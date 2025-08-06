import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ArrowLeft, Clock, MapPin, Play, Square, Pause, AlertTriangle, Camera, Mic, FileText, Wifi, WifiOff } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface TimesheetEntry {
  id: string;
  date: string;
  clockIn: string;
  clockOut?: string;
  breakStart?: string;
  breakEnd?: string;
  location: string;
  notes: string;
  totalHours: number;
  status: 'clocked-in' | 'on-break' | 'clocked-out';
  gpsCoordinates: { lat: number; lng: number };
  incidentReports: string[];
}

interface TimesheetModuleProps {
  onBack: () => void;
}

export function TimesheetModule({ onBack }: TimesheetModuleProps) {
  const [currentStatus, setCurrentStatus] = useState<'clocked-out' | 'clocked-in' | 'on-break'>('clocked-out');
  const [currentSession, setCurrentSession] = useState<TimesheetEntry | null>(null);
  const [location, setLocation] = useState<string>('Determining location...');
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [notes, setNotes] = useState('');
  const [incidentNote, setIncidentNote] = useState('');
  const [showIncidentReport, setShowIncidentReport] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState('00:00:00');
  const [isOffline, setIsOffline] = useState(false);
  const [weeklyEntries, setWeeklyEntries] = useState<TimesheetEntry[]>([]);
  const [autoCheckInWarning, setAutoCheckInWarning] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockEntries: TimesheetEntry[] = [
      {
        id: '1',
        date: '2025-01-03',
        clockIn: '09:00',
        clockOut: '17:30',
        location: 'Community Health Center - District 5',
        notes: 'Completed 4 home visits, all patients stable',
        totalHours: 8.5,
        status: 'clocked-out',
        gpsCoordinates: { lat: -33.8688, lng: 151.2093 },
        incidentReports: []
      },
      {
        id: '2',
        date: '2025-01-02',
        clockIn: '08:30',
        clockOut: '16:45',
        breakStart: '12:00',
        breakEnd: '12:30',
        location: 'Regional Hospital - Emergency Ward',
        notes: 'Assisted with 2 emergency calls, updated patient records',
        totalHours: 7.75,
        status: 'clocked-out',
        gpsCoordinates: { lat: -33.8648, lng: 151.2164 },
        incidentReports: ['Minor equipment malfunction reported and resolved']
      }
    ];
    setWeeklyEntries(mockEntries);
  }, []);

  // Simulate GPS location detection
  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            setCoordinates(coords);
            setLocation('Sydney CBD, NSW - Community Health District');
          },
          () => {
            setLocation('Unable to determine location - using manual entry');
          }
        );
      } else {
        setLocation('GPS not available - using manual entry');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Timer for elapsed time
  useEffect(() => {
    if (currentStatus === 'clocked-in') {
      const interval = setInterval(() => {
        const now = new Date();
        const start = currentSession ? new Date(`${currentSession.date}T${currentSession.clockIn}`) : now;
        const diff = now.getTime() - start.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeElapsed(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentStatus, currentSession]);

  // Auto check-in warning
  useEffect(() => {
    const checkAutoWarning = () => {
      const now = new Date();
      const currentHour = now.getHours();
      if (currentHour >= 9 && currentStatus === 'clocked-out') {
        setAutoCheckInWarning(true);
      }
    };

    const timer = setTimeout(checkAutoWarning, 2000);
    return () => clearTimeout(timer);
  }, [currentStatus]);

  const handleClockIn = () => {
    const now = new Date();
    const newSession: TimesheetEntry = {
      id: Date.now().toString(),
      date: now.toISOString().split('T')[0],
      clockIn: now.toTimeString().slice(0, 5),
      location: location,
      notes: '',
      totalHours: 0,
      status: 'clocked-in',
      gpsCoordinates: coordinates || { lat: 0, lng: 0 },
      incidentReports: []
    };
    
    setCurrentSession(newSession);
    setCurrentStatus('clocked-in');
    setAutoCheckInWarning(false);
  };

  const handleClockOut = () => {
    if (currentSession) {
      const now = new Date();
      const updatedSession = {
        ...currentSession,
        clockOut: now.toTimeString().slice(0, 5),
        notes: notes,
        status: 'clocked-out' as const,
        totalHours: parseFloat(timeElapsed.split(':')[0]) + parseFloat(timeElapsed.split(':')[1]) / 60
      };
      
      setWeeklyEntries(prev => [updatedSession, ...prev]);
      setCurrentSession(null);
      setCurrentStatus('clocked-out');
      setNotes('');
    }
  };

  const handleBreak = () => {
    if (currentStatus === 'clocked-in') {
      setCurrentStatus('on-break');
    } else if (currentStatus === 'on-break') {
      setCurrentStatus('clocked-in');
    }
  };

  const handleIncidentReport = () => {
    if (incidentNote.trim() && currentSession) {
      const updatedSession = {
        ...currentSession,
        incidentReports: [...currentSession.incidentReports, incidentNote]
      };
      setCurrentSession(updatedSession);
      setIncidentNote('');
      setShowIncidentReport(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'clocked-in': return 'bg-green-100 text-green-800 border-green-200';
      case 'on-break': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'clocked-out': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const totalWeeklyHours = weeklyEntries.reduce((sum, entry) => sum + entry.totalHours, 0);

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
              <h1 className="text-xl font-semibold text-gray-900">Digital Timesheet</h1>
              <p className="text-sm text-gray-500">Track your work hours and location</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isOffline ? (
              <div className="flex items-center gap-2 text-red-600">
                <WifiOff className="h-4 w-4" />
                <span className="text-sm">Offline Mode</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-green-600">
                <Wifi className="h-4 w-4" />
                <span className="text-sm">Online</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Alerts */}
        {autoCheckInWarning && (
          <Alert className="mb-6 border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              It's past 9 AM and you haven't clocked in yet. Would you like to clock in now?
              <Button onClick={handleClockIn} className="ml-2" size="sm">
                Clock In
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Status Card */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Current Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Badge className={`text-lg px-4 py-2 ${getStatusColor(currentStatus)}`}>
                    {currentStatus.replace('-', ' ').toUpperCase()}
                  </Badge>
                  {currentStatus !== 'clocked-out' && (
                    <div className="mt-4">
                      <div className="text-4xl font-mono font-bold text-gray-900">{timeElapsed}</div>
                      <div className="text-sm text-gray-500 mt-1">Time Elapsed</div>
                    </div>
                  )}
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Current Location</div>
                    <div className="text-sm text-gray-600 mt-1">{location}</div>
                    {coordinates && (
                      <div className="text-xs text-gray-500 mt-1">
                        {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Controls */}
                <div className="flex gap-3">
                  {currentStatus === 'clocked-out' ? (
                    <Button onClick={handleClockIn} className="flex-1 bg-green-600 hover:bg-green-700">
                      <Play className="h-4 w-4 mr-2" />
                      Clock In
                    </Button>
                  ) : (
                    <>
                      <Button 
                        onClick={handleClockOut} 
                        variant="outline" 
                        className="flex-1 border-black text-black hover:bg-gray-100 hover:text-black"
                      >
                        <Square className="h-4 w-4 mr-2" />
                        Clock Out
                      </Button>
                      <Button 
                        onClick={handleBreak} 
                        variant="outline" 
                        className={`flex-1 ${currentStatus === 'on-break' ? 'bg-yellow-50 border-yellow-300' : ''}`}
                      >
                        <Pause className="h-4 w-4 mr-2" />
                        {currentStatus === 'on-break' ? 'End Break' : 'Take Break'}
                      </Button>
                    </>
                  )}
                </div>

                {/* Notes Section */}
                {currentStatus !== 'clocked-out' && (
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Session Notes
                    </label>
                    <Textarea
                      placeholder="Add notes about your current work session..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                    />
                  </div>
                )}

                {/* Incident Report */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      Incident Reporting
                    </label>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowIncidentReport(!showIncidentReport)}
                    >
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Report Incident
                    </Button>
                  </div>
                  
                  {showIncidentReport && (
                    <div className="p-4 border border-amber-200 rounded-lg bg-amber-50">
                      <Textarea
                        placeholder="Describe the incident in detail..."
                        value={incidentNote}
                        onChange={(e) => setIncidentNote(e.target.value)}
                        rows={3}
                        className="mb-3"
                      />
                      <div className="flex gap-2">
                        <Button onClick={handleIncidentReport} size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Submit Report
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setShowIncidentReport(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mic className="h-4 w-4 mr-2" />
                    Voice Note
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Weekly Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{totalWeeklyHours.toFixed(1)}h</div>
                    <div className="text-sm text-blue-700">Total Hours This Week</div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Recent Entries</h4>
                    {weeklyEntries.slice(0, 5).map((entry) => (
                      <div key={entry.id} className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">
                            {new Date(entry.date).toLocaleDateString()}
                          </span>
                          <span className="text-sm text-gray-600">{entry.totalHours}h</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          {entry.clockIn} - {entry.clockOut || 'In Progress'}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 truncate">
                          {entry.location}
                        </div>
                        {entry.incidentReports.length > 0 && (
                          <div className="flex items-center gap-1 mt-2">
                            <AlertTriangle className="h-3 w-3 text-amber-600" />
                            <span className="text-xs text-amber-700">
                              {entry.incidentReports.length} incident{entry.incidentReports.length > 1 ? 's' : ''} reported
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    View Full History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payroll Integration Notice */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-700">
                Your timesheet data is automatically synced with the payroll system every hour.
              </span>
              <Button variant="outline" size="sm" className="ml-auto">
                Export Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}