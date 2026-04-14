import { useState } from 'react';
import { Search, Clock, TrendingUp } from 'lucide-react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import PillTab from '../PillTab';

export default function RoutesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('todas');

  const routes = [
    { id: 1, name: '400 SJ-Heredia', frequency: '5-10 min', duration: '45 min', status: 'Operando' },
    { id: 2, name: '300 SJ-Alajuela', frequency: '8-15 min', duration: '50 min', status: 'Operando' },
    { id: 3, name: '200 Circunvalación', frequency: '10-12 min', duration: '60 min', status: 'Operando' },
    { id: 4, name: '500 SJ-Cartago', frequency: '12-20 min', duration: '55 min', status: 'Con retrasos' },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Rutas" subtitle="Todas las rutas disponibles" />

      <div className="flex-1 overflow-y-auto">
        {/* Search Bar */}
        <div className="px-4 py-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7280]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar ruta..."
              className="w-full pl-10 pr-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <PillTab label="Todas" active={activeFilter === 'todas'} onClick={() => setActiveFilter('todas')} />
            <PillTab label="Heredia" active={activeFilter === 'heredia'} onClick={() => setActiveFilter('heredia')} />
            <PillTab label="San José" active={activeFilter === 'sanjose'} onClick={() => setActiveFilter('sanjose')} />
            <PillTab label="Alajuela" active={activeFilter === 'alajuela'} onClick={() => setActiveFilter('alajuela')} />
          </div>
        </div>

        {/* Routes List */}
        <div className="px-4 pb-4 space-y-3">
          {routes.map((route) => (
            <div key={route.id} className="bg-white border border-[#e5e7eb] rounded-[10px] p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-[#1a1a1a] text-base font-medium">{route.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  route.status === 'Operando' ? 'bg-[#1D9E75] text-white' : 'bg-[#f59e0b] text-white'
                }`}>
                  {route.status}
                </span>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2 text-[#6b7280]">
                  <Clock className="w-4 h-4" />
                  <span>{route.frequency}</span>
                </div>
                <div className="flex items-center gap-2 text-[#6b7280]">
                  <TrendingUp className="w-4 h-4" />
                  <span>{route.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
