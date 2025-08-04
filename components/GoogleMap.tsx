import React from 'react';

interface Worker {
  id: string;
  name: string;
  initials: string;
  status: 'active' | 'panic' | 'break' | 'offline';
  location: { lat: number; lng: number };
}

interface GoogleMapProps {
  workers: Worker[];
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ workers, className = '' }) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'panic': return '#DC2626'; // Red
      case 'active': return '#10B981'; // Green
      case 'break': return '#F59E0B'; // Orange
      case 'offline': return '#6B7280'; // Gray
      default: return '#6B7280';
    }
  };

  return (
    <div className={`bg-gray-100 relative overflow-hidden h-full ${className}`}>
      {/* Map Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('../Images/Map_view.png')`
        }}
      >
        {/* Light overlay for better visibility */}
        <div className="absolute inset-0 bg-white bg-opacity-10"></div>
      </div>

      {/* Worker Markers */}
      <div className="absolute inset-0 p-4">
        {workers.map((worker, index) => (
          <div
            key={worker.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${20 + (index * 15) % 60}%`,
              top: `${30 + (index * 12) % 40}%`
            }}
          >
            {/* Worker Pin */}
            <div className="relative">
              <div 
                className="w-8 h-8 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110"
                style={{ backgroundColor: getStatusColor(worker.status) }}
              >
                {worker.initials}
              </div>
              
              {/* Status indicator pulse for panic */}
              {worker.status === 'panic' && (
                <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping"></div>
              )}
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              <div className="font-semibold">{worker.name}</div>
              <div className="capitalize">{worker.status}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="bg-white hover:bg-gray-50 border border-gray-300 rounded p-2 shadow-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="bg-white hover:bg-gray-50 border border-gray-300 rounded p-2 shadow-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>

      {/* Map Label */}
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg text-sm text-gray-700">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Live Worker Locations</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;