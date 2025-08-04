import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Users, Clock, AlertTriangle, Shield, MapPin, Download, Filter, Search, Calendar, TrendingUp, Activity } from 'lucide-react';
import { Input } from './ui/input';

interface WorkerStatus {
  id: string;
  name: string;
  status: 'active' | 'break' | 'offline' | 'panic' | 'overdue';
  location: string;
  jobType: string;
  timeWorked: string;
  lastCheckIn: string;
  riskLevel: 'low' | 'medium' | 'high';
  batteryLevel?: number;
  deviceConnected: boolean;
}

interface Alert {
  id: string;
  workerId: string;
  workerName: string;
  type: 'panic' | 'overdue' | 'no-checkin' | 'route-deviation';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  resolved: boolean;
}

interface SupervisorDashboardProps {
  onBack: () => void;
}

export function SupervisorDashboard({ onBack }: SupervisorDashboardProps) {
  const [workers, setWorkers] = useState<WorkerStatus[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWorker, setSelectedWorker] = useState<WorkerStatus | null>(null);

  // Mock data
  useEffect(() => {
    const mockWorkers: WorkerStatus[] = [
      {
        id: '1',
        name: 'Anthony Pringle',
        status: 'panic',
        location: 'Sydney CBD',
        jobType: 'Home Visit',
        timeWorked: '00:26:43',
        lastCheckIn: '10:30 AM',
        riskLevel: 'high',
        batteryLevel: 85,
        deviceConnected: true
      },
      {
        id: '2',
        name: 'Jack Irwin',
        status: 'overdue',
        location: 'Parramatta',
        jobType: 'Nursing',
        timeWorked: '00:43:43',
        lastCheckIn: '09:45 AM',
        riskLevel: 'medium',
        batteryLevel: 65,
        deviceConnected: true
      },
      {
        id: '3',
        name: 'Anna White',
        status: 'active',
        location: 'Chatswood',
        jobType: 'Home Visit',
        timeWorked: '00:12:05',
        lastCheckIn: '10:45 AM',
        riskLevel: 'low',
        batteryLevel: 95,
        deviceConnected: true
      },
      {
        id: '4',
        name: 'Isabella Martin',
        status: 'active',
        location: 'Bondi',
        jobType: 'Nursing',
        timeWorked: '00:25:16',
        lastCheckIn: '10:20 AM',
        riskLevel: 'low',
        batteryLevel: 78,
        deviceConnected: true
      },
      {
        id: '5',
        name: 'Charlotte Brown',
        status: 'break',
        location: 'Manly',
        jobType: 'Nursing',
        timeWorked: '00:57:43',
        lastCheckIn: '10:40 AM',
        riskLevel: 'low',
        batteryLevel: 60,
        deviceConnected: false
      }
    ];

    const mockAlerts: Alert[] = [
      {
        id: '1',
        workerId: '1',
        workerName: 'Anthony Pringle',
        type: 'panic',
        severity: 'critical',
        timestamp: '2025-01-03T10:30:00Z',
        resolved: false
      },
      {
        id: '2',
        workerId: '2',
        workerName: 'Jack Irwin',
        type: 'overdue',
        severity: 'high',
        timestamp: '2025-01-03T10:15:00Z',
        resolved: false
      }
    ];

    setWorkers(mockWorkers);
    setAlerts(mockAlerts);
  }, []);

  const getStatusBadge = (status: WorkerStatus['status']) => {
    switch (status) {
      case 'panic':
        return <Badge className="bg-red-100 text-red-800 border-red-200 animate-pulse">Panic</Badge>;
      case 'overdue':
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Overdue</Badge>;
      case 'active':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>;
      case 'break':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">On Break</Badge>;
      case 'offline':
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Offline</Badge>;
      default:
        return null;
    }
  };

  const getRiskBadge = (level: WorkerStatus['riskLevel']) => {
    switch (level) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800 border-red-200">High Risk</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium Risk</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Low Risk</Badge>;
      default:
        return null;
    }
  };

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    worker.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    worker.jobType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeWorkers = workers.filter(w => w.status === 'active').length;
  const criticalAlerts = alerts.filter(a => a.severity === 'critical' && !a.resolved).length;
  const overdueWorkers = workers.filter(w => w.status === 'overdue' || w.status === 'panic').length;
  const totalHours = workers.reduce((sum, w) => {
    const [hours, minutes] = w.timeWorked.split(':');
    return sum + parseInt(hours) + parseInt(minutes) / 60;
  }, 0);

  return (
    <div className="size-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Supervisor Dashboard</h1>
              <p className="text-sm text-gray-500">Monitor and manage all worker activities</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            {criticalAlerts > 0 && (
              <Badge className="bg-red-100 text-red-800 border-red-200 animate-pulse">
                {criticalAlerts} Critical Alert{criticalAlerts > 1 ? 's' : ''}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Workers</p>
                  <p className="text-2xl font-bold text-green-600">{activeWorkers}</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Critical Alerts</p>
                  <p className="text-2xl font-bold text-red-600">{criticalAlerts}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Overdue Check-ins</p>
                  <p className="text-2xl font-bold text-orange-600">{overdueWorkers}</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Hours Today</p>
                  <p className="text-2xl font-bold text-blue-600">{totalHours.toFixed(1)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="workers" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="workers">Workers</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Workers Tab */}
          <TabsContent value="workers" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Worker Status</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search workers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredWorkers.map((worker) => (
                    <div 
                      key={worker.id}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedWorker(worker)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>
                              {worker.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">{worker.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <span>{worker.jobType}</span>
                              <span>•</span>
                              <MapPin className="h-3 w-3" />
                              <span>{worker.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm font-medium">{worker.timeWorked}</div>
                            <div className="text-xs text-gray-500">Last: {worker.lastCheckIn}</div>
                          </div>
                          <div className="flex flex-col gap-1">
                            {getStatusBadge(worker.status)}
                            {getRiskBadge(worker.riskLevel)}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <div className={`h-2 w-2 rounded-full ${
                                worker.deviceConnected ? 'bg-green-500' : 'bg-red-500'
                              }`}></div>
                              <span className="text-xs text-gray-500">
                                {worker.batteryLevel}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.filter(a => !a.resolved).map((alert) => (
                    <div key={alert.id} className="p-4 border border-red-200 rounded-lg bg-red-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          <div>
                            <h3 className="font-semibold text-red-900">{alert.workerName}</h3>
                            <p className="text-sm text-red-700 capitalize">{alert.type.replace('-', ' ')}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-100 text-red-800 border-red-200">
                            {alert.severity}
                          </Badge>
                          <span className="text-sm text-red-600">
                            {new Date(alert.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                          Acknowledge
                        </Button>
                        <Button size="sm" variant="outline">
                          Contact Worker
                        </Button>
                        <Button size="sm" variant="outline">
                          Dispatch Help
                        </Button>
                      </div>
                    </div>
                  ))}
                  {alerts.filter(a => !a.resolved).length === 0 && (
                    <p className="text-center text-gray-500 py-8">No active alerts</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Average Response Time</span>
                      <span className="font-semibold">2.3 minutes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Check-in Compliance</span>
                      <span className="font-semibold text-green-600">94%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Risk Assessments Completed</span>
                      <span className="font-semibold text-green-600">100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Incidents This Week</span>
                      <span className="font-semibold text-yellow-600">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Worker Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Active Workers</span>
                      </div>
                      <span className="font-semibold">{activeWorkers}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">On Break</span>
                      </div>
                      <span className="font-semibold">{workers.filter(w => w.status === 'break').length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm">High Risk</span>
                      </div>
                      <span className="font-semibold">{workers.filter(w => w.riskLevel === 'high').length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                        <span className="text-sm">Offline</span>
                      </div>
                      <span className="font-semibold">{workers.filter(w => w.status === 'offline').length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Generate Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Safety Reports</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="h-4 w-4 mr-2" />
                        Daily Safety Summary
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Incident Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Shield className="h-4 w-4 mr-2" />
                        Risk Assessment Report
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Operational Reports</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Clock className="h-4 w-4 mr-2" />
                        Timesheet Summary
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="h-4 w-4 mr-2" />
                        Worker Performance
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Compliance Report
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Worker Detail Modal */}
        {selectedWorker && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[80vh] overflow-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {selectedWorker.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {selectedWorker.name}
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedWorker(null)}
                    className="h-8 w-8 p-0"
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Status</label>
                    <div className="mt-1">
                      {getStatusBadge(selectedWorker.status)}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Risk Level</label>
                    <div className="mt-1">
                      {getRiskBadge(selectedWorker.riskLevel)}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Location</label>
                    <p className="mt-1">{selectedWorker.location}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Job Type</label>
                    <p className="mt-1">{selectedWorker.jobType}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Time Worked</label>
                    <p className="mt-1 font-mono">{selectedWorker.timeWorked}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Last Check-in</label>
                    <p className="mt-1">{selectedWorker.lastCheckIn}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Device Status</label>
                    <div className="mt-1 flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${
                        selectedWorker.deviceConnected ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-sm">
                        {selectedWorker.deviceConnected ? 'Connected' : 'Disconnected'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Battery Level</label>
                    <p className="mt-1">{selectedWorker.batteryLevel}%</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Contact Worker
                  </Button>
                  <Button variant="outline">
                    View Location
                  </Button>
                  <Button variant="outline">
                    View History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}