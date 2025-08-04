import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ArrowLeft, Plus, MapPin, Clock, Users, Calendar as CalendarIcon, Briefcase, Route, Navigation, AlertTriangle, CheckCircle, Search, Filter, Edit, Trash2, Copy, Target } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface Job {
  id: string;
  title: string;
  description: string;
  clientName: string;
  address: string;
  coordinates: { lat: number; lng: number };
  scheduledStart: string;
  scheduledEnd: string;
  estimatedDuration: number;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  assignedWorker?: string;
  requiredSkills: string[];
  jobType: 'home-visit' | 'nursing' | 'maintenance' | 'delivery' | 'inspection';
  riskLevel: 'low' | 'medium' | 'high';
  specialInstructions?: string;
  routeId?: string;
}

interface Route {
  id: string;
  name: string;
  description: string;
  waypoints: RouteWaypoint[];
  estimatedTotalTime: number;
  totalDistance: number;
  createdBy: string;
  isTemplate: boolean;
  usage: number;
  lastUsed?: string;
  tags: string[];
}

interface RouteWaypoint {
  id: string;
  address: string;
  coordinates: { lat: number; lng: number };
  stopDuration: number;
  instructions?: string;
  order: number;
}

interface Worker {
  id: string;
  name: string;
  skills: string[];
  availability: 'available' | 'busy' | 'offline';
  currentLocation?: { lat: number; lng: number };
  avatar?: string;
}

interface JobsRoutesProps {
  onBack: () => void;
}

export function JobsRoutes({ onBack }: JobsRoutesProps) {
  const [activeTab, setActiveTab] = useState<'jobs' | 'routes' | 'schedule'>('jobs');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateJob, setShowCreateJob] = useState(false);
  const [showCreateRoute, setShowCreateRoute] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [newJob, setNewJob] = useState<Partial<Job>>({});
  const [newRoute, setNewRoute] = useState<Partial<Route>>({});

  // Mock data initialization
  useEffect(() => {
    const mockJobs: Job[] = [
      {
        id: '1',
        title: 'Home Health Visit - Mrs. Smith',
        description: 'Weekly health check and medication review',
        clientName: 'Margaret Smith',
        address: '123 George Street, Sydney CBD',
        coordinates: { lat: -33.8688, lng: 151.2093 },
        scheduledStart: '2025-01-04T09:00:00Z',
        scheduledEnd: '2025-01-04T10:00:00Z',
        estimatedDuration: 60,
        priority: 'medium',
        status: 'scheduled',
        assignedWorker: 'Anthony Pringle',
        requiredSkills: ['Nursing', 'Medication Management'],
        jobType: 'home-visit',
        riskLevel: 'low',
        specialInstructions: 'Patient has mobility issues - use side entrance'
      },
      {
        id: '2',
        title: 'Equipment Maintenance Check',
        description: 'Quarterly maintenance of medical equipment',
        clientName: 'Parramatta Community Center',
        address: '456 Church Street, Parramatta',
        coordinates: { lat: -33.8148, lng: 151.0023 },
        scheduledStart: '2025-01-04T14:00:00Z',
        scheduledEnd: '2025-01-04T16:00:00Z',
        estimatedDuration: 120,
        priority: 'high',
        status: 'scheduled',
        requiredSkills: ['Equipment Maintenance', 'Safety Inspection'],
        jobType: 'maintenance',
        riskLevel: 'medium'
      },
      {
        id: '3',
        title: 'Emergency Nursing Response',
        description: 'Urgent nursing support required',
        clientName: 'John Anderson',
        address: '789 Pacific Highway, Chatswood',
        coordinates: { lat: -33.7969, lng: 151.1816 },
        scheduledStart: '2025-01-03T11:30:00Z',
        scheduledEnd: '2025-01-03T12:30:00Z',
        estimatedDuration: 60,
        priority: 'urgent',
        status: 'in-progress',
        assignedWorker: 'Anna White',
        requiredSkills: ['Emergency Response', 'Nursing'],
        jobType: 'nursing',
        riskLevel: 'high'
      }
    ];

    const mockRoutes: Route[] = [
      {
        id: '1',
        name: 'North Shore Daily Route',
        description: 'Standard route covering north shore suburbs',
        waypoints: [
          {
            id: '1',
            address: 'Chatswood Station',
            coordinates: { lat: -33.7969, lng: 151.1816 },
            stopDuration: 15,
            order: 1
          },
          {
            id: '2',
            address: 'Lane Cove Plaza',
            coordinates: { lat: -33.8167, lng: 151.1654 },
            stopDuration: 30,
            order: 2
          },
          {
            id: '3',
            address: 'North Sydney Oval',
            coordinates: { lat: -33.8395, lng: 151.2056 },
            stopDuration: 20,
            order: 3
          }
        ],
        estimatedTotalTime: 180,
        totalDistance: 25.5,
        createdBy: 'Supervisor',
        isTemplate: true,
        usage: 15,
        lastUsed: '2025-01-02',
        tags: ['north-shore', 'daily', 'high-frequency']
      },
      {
        id: '2',
        name: 'CBD Emergency Route',
        description: 'Fast route for emergency responses in CBD',
        waypoints: [
          {
            id: '1',
            address: 'Sydney Hospital',
            coordinates: { lat: -33.8688, lng: 151.2093 },
            stopDuration: 5,
            order: 1
          },
          {
            id: '2',
            address: 'Central Station',
            coordinates: { lat: -33.8832, lng: 151.2065 },
            stopDuration: 10,
            order: 2
          }
        ],
        estimatedTotalTime: 45,
        totalDistance: 5.2,
        createdBy: 'Emergency Team',
        isTemplate: true,
        usage: 8,
        lastUsed: '2025-01-03',
        tags: ['emergency', 'cbd', 'fast-response']
      }
    ];

    const mockWorkers: Worker[] = [
      {
        id: '1',
        name: 'Anthony Pringle',
        skills: ['Nursing', 'Home Visits', 'Medication Management'],
        availability: 'busy'
      },
      {
        id: '2',
        name: 'Anna White',
        skills: ['Emergency Response', 'Nursing', 'Critical Care'],
        availability: 'busy'
      },
      {
        id: '3',
        name: 'Jack Irwin',
        skills: ['Nursing', 'Equipment Maintenance', 'Safety Inspection'],
        availability: 'available'
      },
      {
        id: '4',
        name: 'Isabella Martin',
        skills: ['Home Visits', 'Nursing', 'Patient Care'],
        availability: 'available'
      }
    ];

    setJobs(mockJobs);
    setRoutes(mockRoutes);
    setWorkers(mockWorkers);
  }, []);

  const getPriorityBadge = (priority: Job['priority']) => {
    switch (priority) {
      case 'urgent':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Urgent</Badge>;
      case 'high':
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Low</Badge>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: Job['status']) => {
    switch (status) {
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Scheduled</Badge>;
      case 'in-progress':
        return <Badge className="bg-green-100 text-green-800 border-green-200">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Cancelled</Badge>;
      default:
        return null;
    }
  };

  const getRiskBadge = (risk: Job['riskLevel']) => {
    switch (risk) {
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

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRoutes = routes.filter(route =>
    route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    route.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    route.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCreateJob = () => {
    if (!newJob.title || !newJob.address || !newJob.scheduledStart) return;

    const job: Job = {
      id: Date.now().toString(),
      title: newJob.title!,
      description: newJob.description || '',
      clientName: newJob.clientName || '',
      address: newJob.address!,
      coordinates: newJob.coordinates || { lat: -33.8688, lng: 151.2093 },
      scheduledStart: newJob.scheduledStart!,
      scheduledEnd: newJob.scheduledEnd || newJob.scheduledStart!,
      estimatedDuration: newJob.estimatedDuration || 60,
      priority: newJob.priority || 'medium',
      status: 'scheduled',
      assignedWorker: newJob.assignedWorker,
      requiredSkills: newJob.requiredSkills || [],
      jobType: newJob.jobType || 'home-visit',
      riskLevel: newJob.riskLevel || 'low',
      specialInstructions: newJob.specialInstructions
    };

    setJobs(prev => [job, ...prev]);
    setNewJob({});
    setShowCreateJob(false);
  };

  const handleCreateRoute = () => {
    if (!newRoute.name || !newRoute.waypoints || newRoute.waypoints.length < 2) return;

    const route: Route = {
      id: Date.now().toString(),
      name: newRoute.name!,
      description: newRoute.description || '',
      waypoints: newRoute.waypoints,
      estimatedTotalTime: newRoute.estimatedTotalTime || 0,
      totalDistance: newRoute.totalDistance || 0,
      createdBy: 'Current User',
      isTemplate: true,
      usage: 0,
      tags: newRoute.tags || []
    };

    setRoutes(prev => [route, ...prev]);
    setNewRoute({});
    setShowCreateRoute(false);
  };

  const todaysJobs = jobs.filter(job => {
    const jobDate = new Date(job.scheduledStart);
    const today = new Date();
    return jobDate.toDateString() === today.toDateString();
  });

  const scheduledJobs = jobs.filter(job => job.status === 'scheduled').length;
  const inProgressJobs = jobs.filter(job => job.status === 'in-progress').length;
  const urgentJobs = jobs.filter(job => job.priority === 'urgent').length;

  return (
    <div className="h-screen bg-gray-50 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex-shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={onBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Dashboard</span>
              <span className="sm:hidden">Back</span>
            </Button>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Jobs &amp; Routes</h1>
              <p className="text-xs sm:text-sm text-gray-500">Create, manage, and optimize job assignments and routes</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button onClick={() => setShowCreateJob(true)} className="gap-2 text-sm">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Create Job</span>
              <span className="sm:hidden">Job</span>
            </Button>
            <Button onClick={() => setShowCreateRoute(true)} variant="outline" className="gap-2 text-sm">
              <Route className="h-4 w-4" />
              <span className="hidden sm:inline">Create Route</span>
              <span className="sm:hidden">Route</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-4 sm:mb-6">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Today's Jobs</p>
                    <p className="text-xl sm:text-2xl font-bold text-blue-600">{todaysJobs.length}</p>
                  </div>
                  <CalendarIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Scheduled</p>
                    <p className="text-xl sm:text-2xl font-bold text-green-600">{scheduledJobs}</p>
                  </div>
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">In Progress</p>
                    <p className="text-xl sm:text-2xl font-bold text-orange-600">{inProgressJobs}</p>
                  </div>
                  <Navigation className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Urgent</p>
                    <p className="text-xl sm:text-2xl font-bold text-red-600">{urgentJobs}</p>
                  </div>
                  <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'jobs' | 'routes' | 'schedule')} className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="jobs" className="text-xs sm:text-sm">Jobs</TabsTrigger>
              <TabsTrigger value="routes" className="text-xs sm:text-sm">Routes</TabsTrigger>
              <TabsTrigger value="schedule" className="text-xs sm:text-sm">Schedule</TabsTrigger>
            </TabsList>

            {/* Jobs Management Tab */}
            <TabsContent value="jobs" className="flex-1 flex flex-col overflow-hidden">
              <Card className="flex-1 flex flex-col overflow-hidden">
                <CardHeader className="flex-shrink-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <CardTitle className="text-lg">All Jobs</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search jobs..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-full sm:w-64"
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto">
                  <div className="space-y-4">
                    {filteredJobs.map(job => (
                      <div key={job.id} className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{job.title}</h3>
                              {getPriorityBadge(job.priority)}
                              {getStatusBadge(job.status)}
                              {getRiskBadge(job.riskLevel)}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">{job.description}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{job.clientName}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{job.address}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{new Date(job.scheduledStart).toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <Button variant="outline" size="sm" className="text-xs">
                              <Edit className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
                              <span className="hidden sm:inline">Edit</span>
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs">
                              <Copy className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
                              <span className="hidden sm:inline">Duplicate</span>
                            </Button>
                          </div>
                        </div>
                      
                      {job.assignedWorker && (
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {job.assignedWorker.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-700">Assigned to {job.assignedWorker}</span>
                        </div>
                      )}
                      
                      {job.requiredSkills.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm text-gray-600">Required skills:</span>
                          {job.requiredSkills.map(skill => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      {job.specialInstructions && (
                        <Alert className="mt-3">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            {job.specialInstructions}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

            {/* Route Planning Tab */}
            <TabsContent value="routes" className="flex-1 flex flex-col overflow-hidden">
              <Card className="flex-1 flex flex-col overflow-hidden">
                <CardHeader className="flex-shrink-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <CardTitle className="text-lg">Route Templates</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search routes..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-full sm:w-64"
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {filteredRoutes.map(route => (
                    <div key={route.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{route.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{route.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <span>{route.waypoints.length} stops</span>
                            <span>{route.estimatedTotalTime} min</span>
                            <span>{route.totalDistance} km</span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            {route.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                            Used {route.usage} times
                          </Badge>
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Waypoints:</h4>
                        {route.waypoints.slice(0, 3).map((waypoint, index) => (
                          <div key={waypoint.id} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-medium">
                              {waypoint.order}
                            </div>
                            <span>{waypoint.address}</span>
                            <span className="text-gray-400">({waypoint.stopDuration} min)</span>
                          </div>
                        ))}
                        {route.waypoints.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{route.waypoints.length - 3} more stops
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule View Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>
                    Jobs for {selectedDate.toLocaleDateString()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobs
                      .filter(job => {
                        const jobDate = new Date(job.scheduledStart);
                        return jobDate.toDateString() === selectedDate.toDateString();
                      })
                      .sort((a, b) => new Date(a.scheduledStart).getTime() - new Date(b.scheduledStart).getTime())
                      .map(job => (
                        <div key={job.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                          <div className="text-center">
                            <div className="text-sm font-medium text-gray-900">
                              {new Date(job.scheduledStart).toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </div>
                            <div className="text-xs text-gray-500">
                              {job.estimatedDuration}min
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{job.title}</h4>
                            <p className="text-sm text-gray-600">{job.clientName} - {job.address}</p>
                            {job.assignedWorker && (
                              <div className="flex items-center gap-2 mt-1">
                                <Avatar className="h-5 w-5">
                                  <AvatarFallback className="text-xs">
                                    {job.assignedWorker.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-gray-600">{job.assignedWorker}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            {getPriorityBadge(job.priority)}
                            {getStatusBadge(job.status)}
                          </div>
                        </div>
                      ))}
                    {jobs.filter(job => {
                      const jobDate = new Date(job.scheduledStart);
                      return jobDate.toDateString() === selectedDate.toDateString();
                    }).length === 0 && (
                      <p className="text-center text-gray-500 py-8">No jobs scheduled for this date</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          </Tabs>
        </div>
      </div>

        {/* Create Job Modal */}
        {showCreateJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[80vh] overflow-auto bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Create New Job</CardTitle>
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowCreateJob(false)}
                    className="h-8 w-8 p-0"
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title</label>
                    <Input
                      placeholder="Enter job title"
                      value={newJob.title || ''}
                      onChange={(e) => setNewJob(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Client Name</label>
                    <Input
                      placeholder="Enter client name"
                      value={newJob.clientName || ''}
                      onChange={(e) => setNewJob(prev => ({ ...prev, clientName: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    placeholder="Describe the job requirements"
                    value={newJob.description || ''}
                    onChange={(e) => setNewJob(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Address</label>
                  <Input
                    placeholder="Enter job address"
                    value={newJob.address || ''}
                    onChange={(e) => setNewJob(prev => ({ ...prev, address: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Priority</label>
                    <Select
                      value={newJob.priority || 'medium'}
                      onValueChange={(value) => setNewJob(prev => ({ ...prev, priority: value as Job['priority'] }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Type</label>
                    <Select
                      value={newJob.jobType || 'home-visit'}
                      onValueChange={(value) => setNewJob(prev => ({ ...prev, jobType: value as Job['jobType'] }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-visit">Home Visit</SelectItem>
                        <SelectItem value="nursing">Nursing</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="delivery">Delivery</SelectItem>
                        <SelectItem value="inspection">Inspection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Risk Level</label>
                    <Select
                      value={newJob.riskLevel || 'low'}
                      onValueChange={(value) => setNewJob(prev => ({ ...prev, riskLevel: value as Job['riskLevel'] }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Scheduled Start</label>
                    <Input
                      type="datetime-local"
                      value={newJob.scheduledStart || ''}
                      onChange={(e) => setNewJob(prev => ({ ...prev, scheduledStart: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Duration (minutes)</label>
                    <Input
                      type="number"
                      placeholder="60"
                      value={newJob.estimatedDuration || ''}
                      onChange={(e) => setNewJob(prev => ({ ...prev, estimatedDuration: parseInt(e.target.value) }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Assign Worker</label>
                  <Select
                    value={newJob.assignedWorker || ''}
                    onValueChange={(value) => setNewJob(prev => ({ ...prev, assignedWorker: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select worker (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {workers.map(worker => (
                        <SelectItem key={worker.id} value={worker.name}>
                          {worker.name} - {worker.availability}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Special Instructions</label>
                  <Textarea
                    placeholder="Any special instructions or requirements"
                    value={newJob.specialInstructions || ''}
                    onChange={(e) => setNewJob(prev => ({ ...prev, specialInstructions: e.target.value }))}
                  />
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <Button onClick={handleCreateJob} className="bg-blue-600 hover:bg-blue-700">
                    Create Job
                  </Button>
                  <Button variant="outline" onClick={() => setShowCreateJob(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Create Route Modal */}
        {showCreateRoute && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-3xl max-h-[80vh] overflow-auto bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Create New Route</CardTitle>
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowCreateRoute(false)}
                    className="h-8 w-8 p-0"
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Route Name</label>
                    <Input
                      placeholder="Enter route name"
                      value={newRoute.name || ''}
                      onChange={(e) => setNewRoute(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tags (comma separated)</label>
                    <Input
                      placeholder="e.g., cbd, emergency, daily"
                      value={newRoute.tags?.join(', ') || ''}
                      onChange={(e) => setNewRoute(prev => ({ 
                        ...prev, 
                        tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
                      }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    placeholder="Describe the route purpose and usage"
                    value={newRoute.description || ''}
                    onChange={(e) => setNewRoute(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium">Waypoints</label>
                    <Button 
                      type="button"
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        const currentWaypoints = newRoute.waypoints || [];
                        const newWaypoint: RouteWaypoint = {
                          id: Date.now().toString(),
                          address: '',
                          coordinates: { lat: -33.8688, lng: 151.2093 },
                          stopDuration: 15,
                          order: currentWaypoints.length + 1
                        };
                        setNewRoute(prev => ({ 
                          ...prev, 
                          waypoints: [...currentWaypoints, newWaypoint] 
                        }));
                      }}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Waypoint
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {(newRoute.waypoints || []).map((waypoint, index) => (
                      <div key={waypoint.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-medium">
                            {waypoint.order}
                          </div>
                          <span className="font-medium text-sm">Waypoint {waypoint.order}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="ml-auto h-6 w-6 p-0 text-red-600 hover:text-red-700"
                            onClick={() => {
                              const updatedWaypoints = (newRoute.waypoints || [])
                                .filter(w => w.id !== waypoint.id)
                                .map((w, i) => ({ ...w, order: i + 1 }));
                              setNewRoute(prev => ({ ...prev, waypoints: updatedWaypoints }));
                            }}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-600">Address</label>
                            <Input
                              placeholder="Enter waypoint address"
                              value={waypoint.address}
                              onChange={(e) => {
                                const updatedWaypoints = (newRoute.waypoints || []).map(w =>
                                  w.id === waypoint.id ? { ...w, address: e.target.value } : w
                                );
                                setNewRoute(prev => ({ ...prev, waypoints: updatedWaypoints }));
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-600">Stop Duration (minutes)</label>
                            <Input
                              type="number"
                              placeholder="15"
                              value={waypoint.stopDuration}
                              onChange={(e) => {
                                const updatedWaypoints = (newRoute.waypoints || []).map(w =>
                                  w.id === waypoint.id ? { ...w, stopDuration: parseInt(e.target.value) || 0 } : w
                                );
                                setNewRoute(prev => ({ ...prev, waypoints: updatedWaypoints }));
                              }}
                            />
                          </div>
                        </div>

                        <div className="mt-3 space-y-2">
                          <label className="text-xs font-medium text-gray-600">Special Instructions (optional)</label>
                          <Textarea
                            placeholder="Any special instructions for this waypoint"
                            className="text-sm"
                            rows={2}
                            value={waypoint.instructions || ''}
                            onChange={(e) => {
                              const updatedWaypoints = (newRoute.waypoints || []).map(w =>
                                w.id === waypoint.id ? { ...w, instructions: e.target.value } : w
                              );
                              setNewRoute(prev => ({ ...prev, waypoints: updatedWaypoints }));
                            }}
                          />
                        </div>
                      </div>
                    ))}

                    {(!newRoute.waypoints || newRoute.waypoints.length === 0) && (
                      <div className="text-center py-8 text-gray-500">
                        <Route className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                        <p>No waypoints added yet</p>
                        <p className="text-sm">Click "Add Waypoint" to start building your route</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Estimated Total Time (minutes)</label>
                    <Input
                      type="number"
                      placeholder="180"
                      value={newRoute.estimatedTotalTime || ''}
                      onChange={(e) => setNewRoute(prev => ({ 
                        ...prev, 
                        estimatedTotalTime: parseInt(e.target.value) || 0 
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Total Distance (km)</label>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="25.5"
                      value={newRoute.totalDistance || ''}
                      onChange={(e) => setNewRoute(prev => ({ 
                        ...prev, 
                        totalDistance: parseFloat(e.target.value) || 0 
                      }))}
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <Button 
                    onClick={handleCreateRoute} 
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={!newRoute.name || !newRoute.waypoints || newRoute.waypoints.length < 2}
                  >
                    Create Route
                  </Button>
                  <Button variant="outline" onClick={() => setShowCreateRoute(false)}>
                    Cancel
                  </Button>
                </div>

                {newRoute.waypoints && newRoute.waypoints.length < 2 && (
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      A route must have at least 2 waypoints to be created.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}