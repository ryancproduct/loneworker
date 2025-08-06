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

// Helper function for worker status badges - moved outside component for reuse
export function getStatusBadge(status: Worker['status']) {
  switch (status) {
    case 'active':
      return (
        <Badge className="bg-green-100 text-green-800 border-0 font-normal">
          <div className="h-2 w-2 bg-green-500 rounded-full mr-1"></div>
          Active
        </Badge>
      );
    case 'panic':
      return (
        <Badge className="bg-red-100 text-red-800 border-0 font-normal animate-pulse">
          <div className="h-2 w-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
          Emergency
        </Badge>
      );
    case 'break':
      return (
        <Badge className="bg-amber-100 text-amber-800 border-0 font-normal">
          <div className="h-2 w-2 bg-amber-500 rounded-full mr-1"></div>
          Break
        </Badge>
      );
    case 'offline':
      return (
        <Badge className="bg-gray-100 text-gray-800 border-0 font-normal">
          <div className="h-2 w-2 bg-gray-400 rounded-full mr-1"></div>
          Offline
        </Badge>
      );
    default:
      return null;
  }
};

export function MainDashboard({ onModuleChange, userRole, onRoleChange }: MainDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [organizeByGroups, setOrganizeByGroups] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selectedTab, setSelectedTab] = useState<'live' | 'jobs-routes' | 'history' | 'settings'>('live');
  const [workers, setWorkers] = useState<Worker[]>(mockWorkers);
  const [emergencyAlerts, setEmergencyAlerts] = useState(2);
  const [selectedWorkerId, setSelectedWorkerId] = useState<string | null>(null);

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
                  <div key={worker.id} className="border-b border-gray-100" onClick={() => setSelectedWorkerId(worker.id)}>
                    <Card className={`p-4 shadow-none border-0 rounded-none cursor-pointer hover:bg-gray-50 transition-colors ${selectedWorkerId === worker.id ? 'bg-blue-50' : ''}`}>
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
              
              {/* Side Sheet for Worker Details */}
              {selectedWorkerId && (
                <div className="absolute top-0 right-0 h-full w-96 bg-white border-l border-gray-200 shadow-lg transform transition-transform duration-300 z-20">
                  <WorkerDetailView 
                    worker={workers.find(w => w.id === selectedWorkerId)!} 
                    onClose={() => setSelectedWorkerId(null)}
                  />
                </div>
              )}

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

interface WorkerDetailViewProps {
  worker: Worker;
  onClose: () => void;
}

function WorkerDetailView({ worker, onClose }: WorkerDetailViewProps) {
  // Mock data for the worker details based on the screenshot
  const workerGroup = worker.jobType === 'Nursing' ? 'Nurses' : 'Field Workers';
  const bluetoothDevice = worker.hasBluetoothDevice ? 'Flic-AD-123123123' : 'Not assigned';
  const timeRemaining = '07:05:05';
  const jobDuration = '02:55:55';
  const currentLocation = {
    time: '9:02 am',
    address: `74 Foveaux St,Surry Hills 2010, NSW, AU`,
    coordinates: `-33.884524,151.211815`,
    notes: `Unit 32, level 3. Main entrance under construction—use side door.`
  };
  
  const timeline = [
    {
      type: 'Job started',
      time: '8 Jan 2024, 8:32:05 am',
      duration: '1 h 00 min',
      icon: 'check'
    },
    {
      type: 'Checked in',
      time: '8 Jan 2024, 9:02:05 am',
      icon: 'check'
    },
    {
      type: 'Job duration extended',
      time: '8 Jan 2024, 9:16:05 am',
      additionalTime: '+ 2 h 00 min',
      icon: 'clock'
    },
    {
      type: 'Checked in',
      time: '8 Jan 2024, 9:02:05 am',
      icon: 'check'
    }
  ];
  
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header with back button */}
      <div className="border-b border-gray-200 p-4 flex items-center">
        <Button variant="ghost" size="sm" onClick={onClose} className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-5 w-5">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </Button>
        <span className="text-base font-medium">Worker Details</span>
      </div>
      
      {/* User details */}
      <div className="overflow-y-auto flex-1">
        {/* User header */}
        <div className="p-4 flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            {worker.avatar ? (
              <AvatarImage src={worker.avatar} alt={worker.name} />
            ) : (
              <AvatarFallback>
                {worker.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <div className="text-blue-600 font-medium text-xs uppercase">{worker.jobType}</div>
              {getStatusBadge(worker.status)}
            </div>
            <h2 className="font-semibold text-lg">{worker.name}</h2>
            <div className="text-sm text-gray-500">ID {worker.jobId}</div>
          </div>
        </div>
        
        {/* Group */}
        <div className="px-4 py-2">
          <div className="text-sm text-gray-600">Group</div>
          <div className="font-medium">{workerGroup}</div>
        </div>
        
        {/* Bluetooth device */}
        <div className="px-4 py-2">
          <div className="text-sm text-gray-600">Bluetooth device</div>
          <div className="font-medium">{bluetoothDevice}</div>
        </div>
        
        {/* Time information */}
        <div className="px-4 py-3 flex">
          <div className="flex-1">
            <div className="text-sm text-gray-600">Time remaining</div>
            <div className="font-medium">{timeRemaining}</div>
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-600">Job duration</div>
            <div className="font-medium">{jobDuration}</div>
          </div>
        </div>
        
        {/* Current location */}
        <div className="px-4 py-2">
          <div className="text-sm text-gray-600">Current location</div>
          <div className="mt-2 flex items-start">
            <div className="bg-blue-100 p-2 rounded-full text-blue-700 mr-2">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <div className="text-blue-600 font-medium">{currentLocation.time}</div>
              <div className="font-medium">{currentLocation.address}</div>
              <div className="text-sm text-gray-500">{currentLocation.coordinates}</div>
              <div className="border-l-2 border-gray-300 pl-3 mt-2 text-sm">
                {currentLocation.notes}
              </div>
            </div>
          </div>
        </div>
        
        {/* View journey button */}
        <div className="px-4 py-3">
          <Button variant="outline" className="w-full text-blue-600 border-blue-600" size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route h-4 w-4 mr-2">
              <circle cx="6" cy="19" r="3" />
              <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
              <circle cx="18" cy="5" r="3" />
            </svg>
            View journey
          </Button>
        </div>
        
        {/* Timeline */}
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-blue-600">Timeline</h3>
            <div className="flex items-center text-xs">
              <div className="mr-2">All</div>
              <div className="w-8 h-4 rounded-full bg-gray-200 relative cursor-pointer">
                <div className="absolute left-1 top-1 w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>
          
          {/* Timeline items */}
          <div className="relative border-l-2 border-gray-300 ml-3">
            {timeline.map((item, index) => (
              <div key={index} className="mb-5 ml-6 relative">
                <div className="absolute -left-8 top-0 bg-green-500 p-1 rounded-full">
                  {item.icon === 'check' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4 text-white">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-4 w-4 text-white">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                </div>
                <div className="font-medium">{item.type}</div>
                <div className="text-sm text-gray-500">{item.time}</div>
                {item.duration && <div className="text-sm">Duration: {item.duration}</div>}
                {item.additionalTime && <div className="text-sm">{item.additionalTime}</div>}
                <div className="absolute right-0 top-0">
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crosshair h-4 w-4">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="22" x2="18" y1="12" y2="12" />
                      <line x1="6" x2="2" y1="12" y2="12" />
                      <line x1="12" x2="12" y1="6" y2="2" />
                      <line x1="12" x2="12" y1="22" y2="18" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}