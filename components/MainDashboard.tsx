import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Switch } from './ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Bell, Search, Filter, MapPin, Clock, AlertTriangle, Shield, Menu, Home, Calendar, Users, Settings, HelpCircle, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import GoogleMap from './GoogleMap';

// Placeholder images - replace Figma imports with placeholders
const imgAvatar = "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=AP";
const imgAvatar1 = "https://via.placeholder.com/40x40/10B981/FFFFFF?text=SK";
const imgAvatar2 = "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=MJ";
const imgImage = "https://via.placeholder.com/300x200/6B7280/FFFFFF?text=Dashboard";

// Mock svgPaths object to replace the large import
const svgPaths = new Proxy({}, {
  get: () => "M0 0h24v24H0z" // Simple placeholder SVG path
});

interface Worker {
  id: string;
  name: string;
  jobType: string;
  status: 'active' | 'panic' | 'break' | 'offline';
  timeWorked: string;
  jobId: string;
  location: { lat: number; lng: number };
  lastCheckIn: string;
  hasBluetoothDevice?: boolean;
  avatar?: string;
}

interface MainDashboardProps {
  onModuleChange: (module: 'dashboard' | 'timesheet' | 'journey' | 'supervisor' | 'emergency' | 'jobs-routes') => void;
  userRole: 'worker' | 'supervisor';
  onRoleChange: (role: 'worker' | 'supervisor') => void;
}

const mockWorkers: Worker[] = [
  {
    id: '1',
    name: 'Anthony Pringle',
    jobType: 'Home visit',
    status: 'panic',
    timeWorked: '00:26:43',
    jobId: 'HV-0000567',
    location: { lat: -33.8688, lng: 151.2093 },
    lastCheckIn: '2025-01-03T10:30:00Z',
    hasBluetoothDevice: true
  },
  {
    id: '2',
    name: 'Jack Irwin',
    jobType: 'Nursing',
    status: 'panic',
    timeWorked: '00:43:43',
    jobId: 'HV-0004538',
    location: { lat: -33.8648, lng: 151.2164 },
    lastCheckIn: '2025-01-03T10:15:00Z'
  },
  {
    id: '3',
    name: 'Anna White',
    jobType: 'Home visit',
    status: 'active',
    timeWorked: '00:12:05',
    jobId: 'HV-000076',
    location: { lat: -33.8708, lng: 151.2028 },
    lastCheckIn: '2025-01-03T10:45:00Z'
  },
  {
    id: '4',
    name: 'Bartholomew Theophilus Montgomery',
    jobType: 'Remote Healthcare Supervision and Incident Management',
    status: 'active',
    timeWorked: '01:22:43',
    jobId: 'RHS-000678',
    location: { lat: -33.8618, lng: 151.2153 },
    lastCheckIn: '2025-01-03T09:30:00Z'
  },
  {
    id: '5',
    name: 'Isabella Martin',
    jobType: 'Nursing',
    status: 'active',
    timeWorked: '00:25:16',
    jobId: 'NC-0004325',
    location: { lat: -33.8578, lng: 151.2113 },
    lastCheckIn: '2025-01-03T10:20:00Z'
  }
];

export function MainDashboard({ onModuleChange, userRole, onRoleChange }: MainDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [organizeByGroups, setOrganizeByGroups] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selectedTab, setSelectedTab] = useState<'live' | 'jobs-routes' | 'history' | 'settings'>('live');
  const [workers, setWorkers] = useState<Worker[]>(mockWorkers);
  const [emergencyAlerts, setEmergencyAlerts] = useState(2);

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    worker.jobType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    worker.jobId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const panicWorkers = workers.filter(w => w.status === 'panic');

  // Transform workers for Google Maps component
  const mapWorkers = filteredWorkers.map(worker => ({
    id: worker.id,
    name: worker.name,
    initials: worker.name.split(' ').map(n => n[0]).join(''),
    status: worker.status,
    location: worker.location
  }));
  const activeWorkers = workers.filter(w => w.status === 'active');

  const getStatusBadge = (status: Worker['status']) => {
    switch (status) {
      case 'panic':
        return <Badge className="bg-red-50 text-red-700 border-red-200">Panic</Badge>;
      case 'active':
        return <Badge className="bg-green-50 text-green-700 border-green-200">Active</Badge>;
      case 'break':
        return <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">On Break</Badge>;
      case 'offline':
        return <Badge className="bg-gray-50 text-gray-700 border-gray-200">Offline</Badge>;
      default:
        return null;
    }
  };

  const SafetyCultureLogo = () => (
    <div className="flex items-center">
      <div className="bg-blue-600 h-8 w-8 rounded-md flex items-center justify-center mr-2">
        <Shield className="h-5 w-5 text-white" />
      </div>
      <div>
        <h1 className="font-bold text-blue-700 text-lg tracking-tight">LoneGuard</h1>
        <p className="text-gray-500 text-xs -mt-1">Safety Management System</p>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      {/* Navigation Sidebar */}
      <div className="w-56 bg-gray-50 border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <SafetyCultureLogo />
        </div>

        {/* Main Navigation */}
        <div className="flex-1 px-4 py-6 space-y-1">
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700">
              <Home className="h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700">
              <Search className="h-4 w-4" />
              Search
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700">
              <Bell className="h-4 w-4" />
              Notifications
            </Button>
          </nav>

          <div className="border-t border-gray-200 my-6"></div>

          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700">
              <Calendar className="h-4 w-4" />
              Schedule
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3 text-blue-600 bg-blue-50"
              onClick={() => onModuleChange('dashboard')}
            >
              <MapPin className="h-4 w-4" />
              Lone worker
              <Badge className="ml-auto bg-blue-600 text-white">New</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700">
              <Users className="h-4 w-4" />
              Training
            </Button>
          </nav>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Quick Actions for Workers */}
          <div className="space-y-2">
            <Button 
              onClick={() => onModuleChange('timesheet')}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Clock className="h-4 w-4 mr-2" />
              Clock In/Out
            </Button>
            <Button 
              onClick={() => onModuleChange('journey')}
              variant="outline"
              className="w-full"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Start Journey
            </Button>
            <Button 
              onClick={() => onModuleChange('emergency')}
              variant="destructive"
              className="w-full"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Emergency
            </Button>
          </div>
        </div>

        {/* Role Switcher & Settings */}
        <div className="p-4 border-t border-gray-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Role:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onRoleChange(userRole === 'worker' ? 'supervisor' : 'worker')}
            >
              {userRole === 'worker' ? 'Worker' : 'Supervisor'}
            </Button>
          </div>
          
          {userRole === 'supervisor' && (
            <Button 
              onClick={() => onModuleChange('supervisor')}
              variant="outline"
              className="w-full"
            >
              <Shield className="h-4 w-4 mr-2" />
              Supervisor Panel
            </Button>
          )}
          
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700">
            <HelpCircle className="h-4 w-4" />
            Help
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Secondary Navigation */}
        <div className="border-b border-gray-200 bg-white">
          <div className="flex items-end justify-between px-4 py-1">
            <div className="flex space-x-8">
              <button
                onClick={() => setSelectedTab('live')}
                className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                  selectedTab === 'live'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Live map
              </button>
              <button
                onClick={() => {
                  setSelectedTab('jobs-routes');
                  onModuleChange('jobs-routes');
                }}
                className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                  selectedTab === 'jobs-routes'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Jobs &amp; Routes
              </button>
              <button
                onClick={() => setSelectedTab('history')}
                className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                  selectedTab === 'history'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                History
              </button>
              <button
                onClick={() => setSelectedTab('settings')}
                className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                  selectedTab === 'settings'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Settings
              </button>
            </div>
            <Button variant="ghost" className="text-blue-600">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Send feedback
            </Button>
          </div>
        </div>

        {/* Content Area - Only show if Live Map tab is selected */}
        {selectedTab === 'live' && (
          <div className="flex-1 flex overflow-hidden">
            {/* Worker List Sidebar */}
            <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-5 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-lg font-semibold text-gray-900">Lone Worker</h1>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-4 w-4" />
                  </Button>
                </div>

                {/* Search */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">{filteredWorkers.length} users</p>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={organizeByGroups}
                      onCheckedChange={setOrganizeByGroups}
                    />
                    <span className="text-sm text-gray-700">Organize by groups</span>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <div className="h-4 w-4 grid grid-cols-2 gap-px">
                        <div className="bg-current rounded-sm"></div>
                        <div className="bg-current rounded-sm"></div>
                        <div className="bg-current rounded-sm"></div>
                        <div className="bg-current rounded-sm"></div>
                      </div>
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <div className="h-4 w-4 flex flex-col gap-px">
                        <div className="h-1 bg-current rounded-sm"></div>
                        <div className="h-1 bg-current rounded-sm"></div>
                        <div className="h-1 bg-current rounded-sm"></div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Worker List */}
              <div className="flex-1 overflow-y-auto">
                {emergencyAlerts > 0 && (
                  <div className="p-4 bg-red-50 border-b border-red-200">
                    <div className="flex items-center gap-2 text-red-700">
                      <AlertTriangle className="h-4 w-4" />
                      <span className="font-medium">{emergencyAlerts} Emergency Alert{emergencyAlerts > 1 ? 's' : ''}</span>
                    </div>
                    <p className="text-sm text-red-600 mt-1">Workers need immediate attention</p>
                  </div>
                )}

                {filteredWorkers.map((worker) => (
                  <div key={worker.id} className="border-b border-gray-100">
                    <Card className="p-4 shadow-none border-0 rounded-none">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3 flex-1">
                          <Avatar className="h-8 w-8">
                            {worker.avatar ? (
                              <AvatarImage src={worker.avatar} alt={worker.name} />
                            ) : (
                              <AvatarFallback className="text-xs">
                                {worker.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="h-3 w-3 bg-blue-600 rounded-sm"></div>
                              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                                {worker.jobType}
                              </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-sm truncate">
                              {worker.name}
                            </h3>
                            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {worker.timeWorked}
                              </div>
                              <span>{worker.jobId}</span>
                              {worker.hasBluetoothDevice && (
                                <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MapPin className="h-4 w-4 text-blue-600" />
                          </Button>
                          {getStatusBadge(worker.status)}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Area */}
            <div className="flex-1 relative overflow-hidden">
              <GoogleMap 
                workers={mapWorkers}
                className="w-full h-full"
              />

              {/* Emergency Alert Overlay */}
              {panicWorkers.length > 0 && (
                <div className="absolute top-4 left-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 animate-pulse" />
                      <div>
                        <h3 className="font-semibold">Emergency Alert</h3>
                        <p className="text-sm opacity-90">
                          {panicWorkers.length} worker{panicWorkers.length > 1 ? 's' : ''} in distress
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="bg-white text-red-600 border-white hover:bg-red-50"
                      onClick={() => onModuleChange('emergency')}
                    >
                      Respond
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}