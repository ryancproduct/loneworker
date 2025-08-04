import React, { useState } from 'react';
import { MainDashboard } from './components/MainDashboard';
import { TimesheetModule } from './components/TimesheetModule';
import { JourneyManagement } from './components/JourneyManagement';
import { SupervisorDashboard } from './components/SupervisorDashboard';
import { EmergencyPanel } from './components/EmergencyPanel';
import { JobsRoutes } from './components/JobsRoutes';

export default function App() {
  const [activeModule, setActiveModule] = useState<'dashboard' | 'timesheet' | 'journey' | 'supervisor' | 'emergency' | 'jobs-routes'>('dashboard');
  const [userRole, setUserRole] = useState<'worker' | 'supervisor'>('worker');

  return (
    <div className="size-full bg-background">
      {activeModule === 'dashboard' && (
        <MainDashboard 
          onModuleChange={setActiveModule}
          userRole={userRole}
          onRoleChange={setUserRole}
        />
      )}
      {activeModule === 'timesheet' && (
        <TimesheetModule onBack={() => setActiveModule('dashboard')} />
      )}
      {activeModule === 'journey' && (
        <JourneyManagement onBack={() => setActiveModule('dashboard')} />
      )}
      {activeModule === 'supervisor' && userRole === 'supervisor' && (
        <SupervisorDashboard onBack={() => setActiveModule('dashboard')} />
      )}
      {activeModule === 'emergency' && (
        <EmergencyPanel onBack={() => setActiveModule('dashboard')} />
      )}
      {activeModule === 'jobs-routes' && (
        <JobsRoutes onBack={() => setActiveModule('dashboard')} />
      )}
    </div>
  );
}