import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowLeft, MapPin, Route, Clock, AlertTriangle, Shield, Car, Phone, Navigation, CheckCircle, XCircle, Timer } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface RiskAssessment {
  hazardType: string;
  riskLevel: 'low' | 'medium' | 'high';
  mitigationSteps: string[];
  completed: boolean;
}

interface Journey {
  id: string;
  startLocation: string;
  destination: string;
  estimatedDuration: number;
  actualDuration?: number;
  plannedRoute: string;
  vehicleInfo?: string;
  emergencyContacts: string[];
  checkpoints: string[];
  riskAssessment: RiskAssessment[];
  status: 'planned' | 'in-progress' | 'completed' | 'overdue' | 'deviated';
  startTime?: string;
  endTime?: string;
  deviationAlerts: string[];
}

interface JourneyManagementProps {
  onBack: () => void;
}

export function JourneyManagement({ onBack }: JourneyManagementProps) {
  const [currentJourney, setCurrentJourney] = useState<Journey | null>(null);
  const [showRiskAssessment, setShowRiskAssessment] = useState(false);
  const [newJourney, setNewJourney] = useState<Partial<Journey>>({
    startLocation: '',
    destination: '',
    estimatedDuration: 60,
    vehicleInfo: '',
    emergencyContacts: [],
    checkpoints: [],
    riskAssessment: [],
    status: 'planned'
  });
  const [checkInTimer, setCheckInTimer] = useState<number>(0);
  const [lastCheckIn, setLastCheckIn] = useState<string>('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [checkpoint, setCheckpoint] = useState('');

  // Mock current journey
  useEffect(() => {
    const mockJourney: Journey = {
      id: '1',
      startLocation: 'Sydney CBD Health Center',
      destination: 'Parramatta Community Care',
      estimatedDuration: 45,
      plannedRoute: 'Via M4 Motorway',
      vehicleInfo: 'Toyota Camry - ABC123',
      emergencyContacts: ['Manager: +61 400 123 456', 'Emergency Services: 000'],
      checkpoints: ['Westmead Hospital', 'Parramatta Park'],
      riskAssessment: [
        {
          hazardType: 'Road conditions',
          riskLevel: 'low',
          mitigationSteps: ['Check traffic conditions', 'Plan alternative route'],
          completed: true
        },
        {
          hazardType: 'Weather conditions',
          riskLevel: 'medium',
          mitigationSteps: ['Monitor weather updates', 'Carry emergency kit'],
          completed: true
        }
      ],
      status: 'in-progress',
      startTime: '14:30',
      deviationAlerts: []
    };
    
    // Simulate having a journey in progress
    // setCurrentJourney(mockJourney);
  }, []);

  // Check-in timer
  useEffect(() => {
    if (currentJourney?.status === 'in-progress') {
      const interval = setInterval(() => {
        setCheckInTimer(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentJourney]);

  const riskLevels = ['low', 'medium', 'high'] as const;
  const commonHazards = [
    'Road conditions',
    'Weather conditions',
    'Vehicle breakdown',
    'Medical emergency',
    'Unsafe neighborhood',
    'Equipment failure',
    'Communication loss',
    'Traffic congestion'
  ];

  const handleStartJourney = () => {
    if (!newJourney.startLocation || !newJourney.destination || !newJourney.riskAssessment?.length) {
      return;
    }

    const journey: Journey = {
      id: Date.now().toString(),
      startLocation: newJourney.startLocation!,
      destination: newJourney.destination!,
      estimatedDuration: newJourney.estimatedDuration || 60,
      plannedRoute: newJourney.plannedRoute || 'Direct route',
      vehicleInfo: newJourney.vehicleInfo,
      emergencyContacts: newJourney.emergencyContacts || [],
      checkpoints: newJourney.checkpoints || [],
      riskAssessment: newJourney.riskAssessment || [],
      status: 'in-progress',
      startTime: new Date().toTimeString().slice(0, 5),
      deviationAlerts: []
    };

    setCurrentJourney(journey);
    setLastCheckIn(new Date().toLocaleTimeString());
  };

  const handleEndJourney = () => {
    if (currentJourney) {
      setCurrentJourney({
        ...currentJourney,
        status: 'completed',
        endTime: new Date().toTimeString().slice(0, 5),
        actualDuration: Math.floor(checkInTimer / 60)
      });
    }
  };

  const handleEmergencyAlert = () => {
    // This would trigger emergency protocols
    alert('Emergency alert sent to all emergency contacts and monitoring center!');
  };

  const handleCheckIn = () => {
    setLastCheckIn(new Date().toLocaleTimeString());
    setCheckInTimer(0);
  };

  const addRiskAssessment = () => {
    const newRisk: RiskAssessment = {
      hazardType: '',
      riskLevel: 'low',
      mitigationSteps: [],
      completed: false
    };
    
    setNewJourney(prev => ({
      ...prev,
      riskAssessment: [...(prev.riskAssessment || []), newRisk]
    }));
  };

  const updateRiskAssessment = (index: number, field: keyof RiskAssessment, value: any) => {
    setNewJourney(prev => ({
      ...prev,
      riskAssessment: prev.riskAssessment?.map((risk, i) => 
        i === index ? { ...risk, [field]: value } : risk
      )
    }));
  };

  const addEmergencyContact = () => {
    if (emergencyContact.trim()) {
      setNewJourney(prev => ({
        ...prev,
        emergencyContacts: [...(prev.emergencyContacts || []), emergencyContact]
      }));
      setEmergencyContact('');
    }
  };

  const addCheckpoint = () => {
    if (checkpoint.trim()) {
      setNewJourney(prev => ({
        ...prev,
        checkpoints: [...(prev.checkpoints || []), checkpoint]
      }));
      setCheckpoint('');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getStatusColor = (status: Journey['status']) => {
    switch (status) {
      case 'planned': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'in-progress': return 'bg-green-100 text-green-800 border-green-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-200';
      case 'deviated': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiskColor = (level: RiskAssessment['riskLevel']) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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
              <h1 className="text-xl font-semibold text-gray-900">Journey Management</h1>
              <p className="text-sm text-gray-500">Plan routes, assess risks, and track your journey</p>
            </div>
          </div>
          {currentJourney?.status === 'in-progress' && (
            <Button onClick={handleEmergencyAlert} variant="destructive">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Emergency Alert
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Current Journey Status */}
        {currentJourney && (
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Current Journey
                </CardTitle>
                <Badge className={getStatusColor(currentJourney.status)}>
                  {currentJourney.status.replace('-', ' ').toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">From</div>
                  <div className="font-medium">{currentJourney.startLocation}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">To</div>
                  <div className="font-medium">{currentJourney.destination}</div>
                </div>
              </div>

              {currentJourney.status === 'in-progress' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-mono font-bold text-green-700">
                      {formatTime(checkInTimer)}
                    </div>
                    <div className="text-sm text-green-600">Since last check-in</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-700">
                      {currentJourney.estimatedDuration} min
                    </div>
                    <div className="text-sm text-green-600">Estimated duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-green-700">Last check-in</div>
                    <div className="font-medium text-green-800">{lastCheckIn}</div>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                {currentJourney.status === 'in-progress' && (
                  <>
                    <Button onClick={handleCheckIn} variant="outline">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Check In
                    </Button>
                    <Button onClick={handleEndJourney} className="bg-green-600 hover:bg-green-700">
                      Complete Journey
                    </Button>
                  </>
                )}
                {currentJourney.status === 'completed' && (
                  <Button onClick={() => setCurrentJourney(null)} variant="outline">
                    Start New Journey
                  </Button>
                )}
              </div>

              {/* Emergency Contacts */}
              {currentJourney.emergencyContacts.length > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Emergency Contacts</h4>
                  <div className="space-y-1">
                    {currentJourney.emergencyContacts.map((contact, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-3 w-3" />
                        {contact}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Plan New Journey */}
        {!currentJourney && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Journey Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Route className="h-5 w-5" />
                  Journey Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="start">Start Location</Label>
                  <Input
                    id="start"
                    placeholder="Enter starting location"
                    value={newJourney.startLocation}
                    onChange={(e) => setNewJourney(prev => ({ ...prev, startLocation: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    placeholder="Enter destination"
                    value={newJourney.destination}
                    onChange={(e) => setNewJourney(prev => ({ ...prev, destination: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Estimated Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={newJourney.estimatedDuration}
                      onChange={(e) => setNewJourney(prev => ({ ...prev, estimatedDuration: parseInt(e.target.value) }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="route">Planned Route</Label>
                    <Input
                      id="route"
                      placeholder="e.g., Via M4 Motorway"
                      value={newJourney.plannedRoute}
                      onChange={(e) => setNewJourney(prev => ({ ...prev, plannedRoute: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicle">Vehicle Information (Optional)</Label>
                  <Input
                    id="vehicle"
                    placeholder="e.g., Toyota Camry - ABC123"
                    value={newJourney.vehicleInfo}
                    onChange={(e) => setNewJourney(prev => ({ ...prev, vehicleInfo: e.target.value }))}
                  />
                </div>

                {/* Emergency Contacts */}
                <div className="space-y-2">
                  <Label>Emergency Contacts</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Name: Phone number"
                      value={emergencyContact}
                      onChange={(e) => setEmergencyContact(e.target.value)}
                    />
                    <Button onClick={addEmergencyContact} variant="outline">Add</Button>
                  </div>
                  {newJourney.emergencyContacts && newJourney.emergencyContacts.length > 0 && (
                    <div className="space-y-1 mt-2">
                      {newJourney.emergencyContacts.map((contact, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                          <Phone className="h-3 w-3" />
                          {contact}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Checkpoints */}
                <div className="space-y-2">
                  <Label>Checkpoints</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Checkpoint location"
                      value={checkpoint}
                      onChange={(e) => setCheckpoint(e.target.value)}
                    />
                    <Button onClick={addCheckpoint} variant="outline">Add</Button>
                  </div>
                  {newJourney.checkpoints && newJourney.checkpoints.length > 0 && (
                    <div className="space-y-1 mt-2">
                      {newJourney.checkpoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                          <MapPin className="h-3 w-3" />
                          {point}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Risk Assessment
                  <span className="text-sm font-normal text-red-600">*Required</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {newJourney.riskAssessment && newJourney.riskAssessment.length > 0 ? (
                  <div className="space-y-4">
                    {newJourney.riskAssessment.map((risk, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
                        <div className="space-y-2">
                          <Label>Hazard Type</Label>
                          <Select
                            value={risk.hazardType}
                            onValueChange={(value) => updateRiskAssessment(index, 'hazardType', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select hazard type" />
                            </SelectTrigger>
                            <SelectContent>
                              {commonHazards.map(hazard => (
                                <SelectItem key={hazard} value={hazard}>{hazard}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Risk Level</Label>
                          <RadioGroup
                            value={risk.riskLevel}
                            onValueChange={(value) => updateRiskAssessment(index, 'riskLevel', value as RiskAssessment['riskLevel'])}
                            className="flex gap-6"
                          >
                            {riskLevels.map(level => (
                              <div key={level} className="flex items-center space-x-2">
                                <RadioGroupItem value={level} id={`${index}-${level}`} />
                                <Label htmlFor={`${index}-${level}`} className="capitalize">
                                  <Badge className={getRiskColor(level)}>{level}</Badge>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={risk.completed}
                              onCheckedChange={(checked) => updateRiskAssessment(index, 'completed', checked)}
                            />
                            <Label>Mitigation steps completed</Label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                      You must complete a risk assessment before starting your journey. Click "Add Risk Assessment" to begin.
                    </AlertDescription>
                  </Alert>
                )}

                <Button onClick={addRiskAssessment} variant="outline" className="w-full">
                  <Shield className="h-4 w-4 mr-2" />
                  Add Risk Assessment
                </Button>

                {/* Start Journey Button */}
                <Button 
                  onClick={handleStartJourney}
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!newJourney.startLocation || !newJourney.destination || !newJourney.riskAssessment?.length}
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Start Journey
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Safety Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Safety Reminders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Before You Go:</h4>
                <ul className="space-y-1">
                  <li>• Complete risk assessment</li>
                  <li>• Check vehicle and equipment</li>
                  <li>• Inform emergency contacts</li>
                  <li>• Verify route and weather conditions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">During Your Journey:</h4>
                <ul className="space-y-1">
                  <li>• Check in every 30 minutes</li>
                  <li>• Report any route deviations</li>
                  <li>• Use emergency button if needed</li>
                  <li>• Stay alert and trust your instincts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}