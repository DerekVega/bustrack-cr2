import { Gauge, Users, User as UserIcon } from 'lucide-react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';

interface BusDetailScreenProps {
  onBack: () => void;
}

export default function BusDetailScreen({ onBack }: BusDetailScreenProps) {
  const stops = [
    { name: 'Terminal San José', status: 'passed', time: '8:00 AM' },
    { name: 'Barrio México', status: 'passed', time: '8:15 AM' },
    { name: 'La Sabana', status: 'current', time: '8:30 AM' },
    { name: 'Pavas', status: 'upcoming', time: '8:45 AM' },
    { name: 'Hospital México', status: 'upcoming', time: '9:00 AM' },
    { name: 'Terminal Heredia', status: 'upcoming', time: '9:15 AM' },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Ruta 400 SJ-Heredia" subtitle="Bus #1234" onBack={onBack} />

      <div className="flex-1 overflow-y-auto">
        {/* ETA Display */}
        <div className="bg-[#1D9E75] px-6 py-8 text-center">
          <p className="text-white/80 text-sm font-normal mb-2">Tiempo estimado de llegada</p>
          <p className="text-white text-5xl font-medium">3 min</p>
        </div>

        {/* Bus Info */}
        <div className="px-4 py-6 grid grid-cols-3 gap-4">
          <div className="text-center">
            <Gauge className="w-8 h-8 text-[#1D9E75] mx-auto mb-2" />
            <p className="text-[#6b7280] text-xs font-normal mb-1">Velocidad</p>
            <p className="text-[#1a1a1a] text-lg font-medium">45 km/h</p>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 text-[#1D9E75] mx-auto mb-2" />
            <p className="text-[#6b7280] text-xs font-normal mb-1">Capacidad</p>
            <p className="text-[#1a1a1a] text-lg font-medium">65%</p>
          </div>
          <div className="text-center">
            <UserIcon className="w-8 h-8 text-[#1D9E75] mx-auto mb-2" />
            <p className="text-[#6b7280] text-xs font-normal mb-1">Estado</p>
            <p className="text-[#1a1a1a] text-lg font-medium">A tiempo</p>
          </div>
        </div>

        <div className="px-4 mb-4">
          <p className="text-[#6b7280] text-sm font-normal">
            <span className="font-medium">Conductor:</span> Juan Pérez
          </p>
        </div>

        {/* Stops List */}
        <div className="px-4 pb-4">
          <h2 className="text-[#1a1a1a] text-lg font-medium mb-4">Paradas</h2>
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-[#e5e7eb]" />

            {stops.map((stop, index) => {
              const statusColors = {
                passed: 'bg-[#1D9E75]',
                current: 'bg-[#1D9E75] ring-4 ring-[#E1F5EE]',
                upcoming: 'bg-[#e5e7eb]'
              };

              const textColors = {
                passed: 'text-[#6b7280]',
                current: 'text-[#1a1a1a] font-medium',
                upcoming: 'text-[#6b7280]'
              };

              return (
                <div key={index} className="relative flex items-start gap-4 pb-6 last:pb-0">
                  <div className={`relative z-10 w-6 h-6 rounded-full ${statusColors[stop.status]} flex-shrink-0`} />
                  <div className="flex-1 -mt-0.5">
                    <p className={`text-base ${textColors[stop.status]}`}>{stop.name}</p>
                    <p className="text-[#6b7280] text-sm font-normal">{stop.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
