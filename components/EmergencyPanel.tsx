import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ArrowLeft, AlertTriangle, Phone, Shield, MapPin, Clock, Users, MessageSquare, Siren } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface EmergencyAlert {
  id: string;
  workerId: string;
  workerName: string;
  type: 'panic' | 'no-response' | 'route-deviation' | 'equipment-failure' | 'medical';
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: { lat: number; lng: number; address: string };
  timestamp: string;
  status: 'active' | 'acknowledged' | 'responding' | 'resolved';
  description?: string;
  responses: EmergencyResponse[];
}

interface EmergencyResponse {
  id: string;
  responderId: string;
  responderName: string;
  action: string;
  timestamp: string;
}

interface EmergencyPanelProps {
  onBack: () => void;
}

export function EmergencyPanel({ onBack }: EmergencyPanelProps) {
  const [alerts, setAlerts] = useState<EmergencyAlert[]>([]);
  const [selectedAlert, setSelectedAlert] = useState<EmergencyAlert | null>(null);
  const [panicButtonActive, setPanicButtonActive] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Mock emergency alerts
  useEffect(() => {
    const mockAlerts: EmergencyAlert[] = [
      {
        id: '1',
        workerId: '1',
        workerName: 'Anthony Pringle',
        type: 'panic',
        severity: 'critical',
        location: {
          lat: -33.8688,
          lng: 151.2093,
          address: 'George Street, Sydney CBD'
        },
        timestamp: '2025-01-03T10:30:00Z',
        status: 'active',
        description: 'Panic button activated during home visit',
        responses: [
          {
            id: '1',
            responderId: 'supervisor1',
            responderName: 'Sarah Manager',
            action: 'Alert acknowledged, dispatching security',
            timestamp: '2025-01-03T10:31:00Z'
          }
        ]
      },
      {
        id: '2',
        workerId: '2',
        workerName: 'Jack Irwin',
        type: 'no-response',
        severity: 'high',
        location: {
          lat: -33.8648,
          lng: 151.2164,
          address: 'Parramatta Road, Strathfield'
        },
        timestamp: '2025-01-03T10:15:00Z',
        status: 'acknowledged',
        description: 'No check-in for 45 minutes, last known location',
        responses: [
          {
            id: '2',
            responderId: 'supervisor1',
            responderName: 'Sarah Manager',
            action: 'Attempting to contact worker',
            timestamp: '2025-01-03T10:45:00Z'
          }
        ]
      }
    ];
    setAlerts(mockAlerts);
  }, []);

  // Panic button countdown
  useEffect(() => {
    if (panicButtonActive) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            triggerEmergencyAlert();
            setPanicButtonActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [panicButtonActive]);

  const handlePanicButton = () => {
    setPanicButtonActive(true);
    setCountdown(10); // 10 second countdown
  };

  const cancelPanicButton = () => {
    setPanicButtonActive(false);
    setCountdown(0);
  };

  const triggerEmergencyAlert = () => {
    const newAlert: EmergencyAlert = {
      id: Date.now().toString(),
      workerId: 'current-user',
      workerName: 'Current User',
      type: 'panic',
      severity: 'critical',
      location: {
        lat: -33.8708,
        lng: 151.2028,
        address: 'Current Location'
      },
      timestamp: new Date().toISOString(),
      status: 'active',
      description: 'Emergency alert triggered by worker',
      responses: []
    };

    setAlerts(prev => [newAlert, ...prev]);
    // In real app, this would send to emergency services and supervisors
  };

  const acknowledgeAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId 
        ? { 
          ...alert, 
          status: 'acknowledged',
          responses: [
            ...alert.responses,
            {
              id: Date.now().toString(),
              responderId: 'current-supervisor',
              responderName: 'Current Supervisor',
              action: 'Alert acknowledged and investigating',
              timestamp: new Date().toISOString()
            }
          ]
        }
        : alert
    ));
  };

  const resolveAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId 
        ? { 
          ...alert, 
          status: 'resolved',
          responses: [
            ...alert.responses,
            {
              id: Date.now().toString(),
              responderId: 'current-supervisor',
              responderName: 'Current Supervisor',
              action: 'Situation resolved, worker safe',
              timestamp: new Date().toISOString()
            }
          ]
        }
        : alert
    ));
  };

  const getSeverityColor = (severity: EmergencyAlert['severity']) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: EmergencyAlert['status']) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-800 border-red-200';
      case 'acknowledged': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'responding': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: EmergencyAlert['type']) => {
    switch (type) {
      case 'panic': return <Siren className="h-4 w-4" />;
      case 'no-response': return <Clock className="h-4 w-4" />;
      case 'route-deviation': return <MapPin className="h-4 w-4" />;
      case 'equipment-failure': return <Shield className="h-4 w-4" />;
      case 'medical': return <Phone className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const activeAlerts = alerts.filter(alert => alert.status === 'active');
  const acknowledgedAlerts = alerts.filter(alert => alert.status === 'acknowledged' || alert.status === 'responding');
  const resolvedAlerts = alerts.filter(alert => alert.status === 'resolved');

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
              <h1 className="text-xl font-semibold text-gray-900">Emergency Panel</h1>
              <p className="text-sm text-gray-500">Monitor and respond to emergency situations</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {activeAlerts.length > 0 && (
              <Badge className="bg-red-100 text-red-800 border-red-200 animate-pulse">
                {activeAlerts.length} Active Alert{activeAlerts.length > 1 ? 's' : ''}
              </Badge>
            )}
            <div className="flex items-center gap-2 text-green-600">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Emergency Services Connected</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Panic Button */}
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-red-900 mb-4">Emergency Panic Button</h2>
              {panicButtonActive ? (
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-red-600 animate-pulse">
                    {countdown}
                  </div>
                  <p className="text-red-700 mb-4">
                    Emergency alert will be sent in {countdown} seconds
                  </p>
                  <Button onClick={cancelPanicButton} className="bg-gray-600 hover:bg-gray-700">
                    Cancel Alert
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-red-700 mb-4">
                    Press and hold for immediate emergency assistance
                  </p>
                  <Button
                    onClick={handlePanicButton}
                    size="lg"
                    className="h-16 w-32 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full"
                  >
                    <Siren className="h-6 w-6 mr-2" />
                    PANIC
                  </Button>
                  <p className="text-xs text-red-600 mt-2">
                    Will automatically notify emergency services and supervisors
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-16 bg-red-600 hover:bg-red-700">
                <div className="text-center">
                  <div className="text-lg font-bold">000</div>
                  <div className="text-xs">Emergency Services</div>
                </div>
              </Button>
              <Button variant="outline" className="h-16">
                <div className="text-center">
                  <div className="text-lg font-bold">Supervisor</div>
                  <div className="text-xs">+61 400 123 456</div>
                </div>
              </Button>
              <Button variant="outline" className="h-16">
                <div className="text-center">
                  <div className="text-lg font-bold">Security</div>
                  <div className="text-xs">+61 400 789 012</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Alert Management */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Siren className="h-5 w-5" />
                Active Alerts ({activeAlerts.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {activeAlerts.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No active alerts</p>
              ) : (
                activeAlerts.map(alert => (
                  <div 
                    key={alert.id}
                    className="p-4 border border-red-200 rounded-lg bg-red-50 cursor-pointer hover:bg-red-100"
                    onClick={() => setSelectedAlert(alert)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(alert.type)}
                        <span className="font-medium text-red-900">{alert.workerName}</span>
                      </div>
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-red-700 mb-2">{alert.description}</p>
                    <div className="flex items-center gap-2 text-xs text-red-600">
                      <MapPin className="h-3 w-3" />
                      {alert.location.address}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-red-600 mt-1">
                      <Clock className="h-3 w-3" />
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          acknowledgeAlert(alert.id);
                        }}
                        size="sm" 
                        className="bg-yellow-600 hover:bg-yellow-700"
                      >
                        Acknowledge
                      </Button>
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          resolveAlert(alert.id);
                        }}
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Resolve
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* In Progress Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-600">
                <Users className="h-5 w-5" />
                In Progress ({acknowledgedAlerts.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {acknowledgedAlerts.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No alerts in progress</p>
              ) : (
                acknowledgedAlerts.map(alert => (
                  <div 
                    key={alert.id}
                    className="p-4 border border-yellow-200 rounded-lg bg-yellow-50 cursor-pointer hover:bg-yellow-100"
                    onClick={() => setSelectedAlert(alert)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(alert.type)}
                        <span className="font-medium text-yellow-900">{alert.workerName}</span>
                      </div>
                      <Badge className={getStatusColor(alert.status)}>
                        {alert.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-yellow-700 mb-2">{alert.description}</p>
                    <div className="flex items-center gap-2 text-xs text-yellow-600">
                      <Clock className="h-3 w-3" />
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </div>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        resolveAlert(alert.id);
                      }}
                      size="sm" 
                      className="mt-3 bg-green-600 hover:bg-green-700"
                    >
                      Mark Resolved
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Resolved Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Shield className="h-5 w-5" />
                Resolved ({resolvedAlerts.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {resolvedAlerts.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No resolved alerts</p>
              ) : (
                resolvedAlerts.slice(0, 5).map(alert => (
                  <div 
                    key={alert.id}
                    className="p-4 border border-green-200 rounded-lg bg-green-50 cursor-pointer hover:bg-green-100"
                    onClick={() => setSelectedAlert(alert)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(alert.type)}
                        <span className="font-medium text-green-900">{alert.workerName}</span>
                      </div>
                      <Badge className={getStatusColor(alert.status)}>
                        resolved
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-600">
                      <Clock className="h-3 w-3" />
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* Alert Detail Left Overlay Panel */}
        {selectedAlert && (
          <div className="fixed inset-y-0 left-0 z-50 w-full max-w-md p-0 sm:p-4">
            <Card className="h-full sm:h-auto sm:max-h-[90vh] overflow-auto bg-white rounded-none sm:rounded-lg shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {getTypeIcon(selectedAlert.type)}
                    Emergency Alert Details
                  </CardTitle>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedAlert(null)}
                    className="h-8 w-8 p-0"
                    aria-label="Close"
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Worker</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {selectedAlert.workerName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{selectedAlert.workerName}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Status</label>
                    <div className="mt-1">
                      <Badge className={getStatusColor(selectedAlert.status)}>
                        {selectedAlert.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Location</label>
                  <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-600" />
                      <span>{selectedAlert.location.address}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {selectedAlert.location.lat.toFixed(4)}, {selectedAlert.location.lng.toFixed(4)}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Description</label>
                  <p className="mt-1 text-gray-900">{selectedAlert.description}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Response Timeline</label>
                  <div className="mt-2 space-y-3">
                    {selectedAlert.responses.map(response => (
                      <div key={response.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <MessageSquare className="h-4 w-4 text-gray-600 mt-0.5" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{response.responderName}</span>
                            <span className="text-xs text-gray-500">
                              {new Date(response.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">{response.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  {selectedAlert.status === 'active' && (
                    <Button
                      onClick={() => {
                        acknowledgeAlert(selectedAlert.id);
                        setSelectedAlert(null);
                      }}
                      className="bg-yellow-600 hover:bg-yellow-700"
                    >
                      Acknowledge Alert
                    </Button>
                  )}
                  {(selectedAlert.status === 'active' || selectedAlert.status === 'acknowledged') && (
                    <Button
                      onClick={() => {
                        resolveAlert(selectedAlert.id);
                        setSelectedAlert(null);
                      }}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Mark Resolved
                    </Button>
                  )}
                  <Button variant="outline" onClick={() => setSelectedAlert(null)}>
                    Close
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