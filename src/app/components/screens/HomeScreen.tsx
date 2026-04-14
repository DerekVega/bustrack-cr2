import { useState } from 'react';
import { Search } from 'lucide-react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import BusCard from '../BusCard';
import LeafletMap from '../LeafletMap';

interface HomeScreenProps {
  onBusClick?: () => void;
}

export default function HomeScreen({ onBusClick }: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const nearbyBuses = [
    { id: 1, route: '400 SJ-Heredia', status: 'on-time' as const, eta: '3 min', progress: 75, destination: 'Heredia Centro' },
    { id: 2, route: '300 SJ-Alajuela', status: 'delayed' as const, eta: '8 min', progress: 45, destination: 'Alajuela Centro' },
    { id: 3, route: '200 Circunvalación', status: 'on-time' as const, eta: '12 min', progress: 30, destination: 'Barrio México' },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Inicio" subtitle="Buses cercanos" />

      <div className="flex-1 overflow-y-auto">
        {/* Search Bar */}
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7280]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar ruta o parada..."
              className="w-full pl-10 pr-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
            />
          </div>
        </div>

        {/* Map Area */}
        <div className="mx-4 mb-4">
          <LeafletMap onBusClick={onBusClick ? () => onBusClick() : undefined} />
        </div>

        {/* Nearby Buses */}
        <div className="px-4 pb-4">
          <h2 className="text-[#1a1a1a] text-lg font-medium mb-3">Buses cercanos</h2>
          <div className="space-y-3">
            {nearbyBuses.map((bus) => (
              <BusCard
                key={bus.id}
                route={bus.route}
                status={bus.status}
                eta={bus.eta}
                progress={bus.progress}
                destination={bus.destination}
                onClick={onBusClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}