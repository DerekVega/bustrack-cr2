import { useState } from 'react';
import { CheckCircle, XCircle, Clock, MapPin } from 'lucide-react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import PillTab from '../PillTab';
import MetricCard from '../MetricCard';

export default function HistoryScreen() {
  const [activeTab, setActiveTab] = useState('hoy');

  const trips = [
    { id: 1, route: '400 SJ-Heredia', time: '8:00 AM', status: 'completed', duration: '45 min' },
    { id: 2, route: '400 Heredia-SJ', time: '6:00 PM', status: 'completed', duration: '50 min' },
    { id: 3, route: '300 SJ-Alajuela', time: '2:00 PM', status: 'cancelled', duration: '-' },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Historial" subtitle="Recorridos realizados" />

      <div className="flex-1 overflow-y-auto">
        {/* Tabs */}
        <div className="px-4 py-4">
          <div className="flex gap-2">
            <PillTab label="Hoy" active={activeTab === 'hoy'} onClick={() => setActiveTab('hoy')} />
            <PillTab label="Semana" active={activeTab === 'semana'} onClick={() => setActiveTab('semana')} />
            <PillTab label="Mes" active={activeTab === 'mes'} onClick={() => setActiveTab('mes')} />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="px-4 mb-6">
          <div className="grid grid-cols-2 gap-3">
            <MetricCard label="Recorridos" value="12" />
            <MetricCard label="Tiempo total" value="9.2h" />
            <MetricCard label="Kilómetros" value="245" />
            <MetricCard label="Incidentes" value="2" />
          </div>
        </div>

        {/* Trips List */}
        <div className="px-4 pb-4">
          <h2 className="text-[#1a1a1a] text-lg font-medium mb-3">Recorridos</h2>
          <div className="space-y-3">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white border border-[#e5e7eb] rounded-[10px] p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {trip.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-[#1D9E75]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#ef4444]" />
                    )}
                    <h3 className="text-[#1a1a1a] text-base font-medium">{trip.route}</h3>
                  </div>
                  <span className="text-[#6b7280] text-sm font-normal">{trip.time}</span>
                </div>
                <div className="flex items-center gap-2 text-[#6b7280] text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{trip.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
