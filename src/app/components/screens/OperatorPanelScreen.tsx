import { Bus, Route, AlertTriangle, TrendingUp } from 'lucide-react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import MetricCard from '../MetricCard';
import FleetCard from '../FleetCard';

export default function OperatorPanelScreen() {
  const fleet = [
    { id: 1, busName: 'Bus #1234', route: '400 SJ-Heredia', status: 'active' as const, driver: 'Juan Pérez' },
    { id: 2, busName: 'Bus #1235', route: '300 SJ-Alajuela', status: 'delayed' as const, driver: 'María González' },
    { id: 3, busName: 'Bus #1236', route: '200 Circunvalación', status: 'active' as const, driver: 'Carlos Ramírez' },
    { id: 4, busName: 'Bus #1237', route: '500 SJ-Cartago', status: 'breakdown' as const, driver: 'Ana Solís' },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Panel de operadora" subtitle="TransCR" />

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Metrics Grid */}
        <div className="mb-6">
          <h2 className="text-[#1a1a1a] text-lg font-medium mb-3">Métricas del día</h2>
          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              label="Buses activos"
              value="24"
              icon={<Bus className="w-6 h-6" />}
            />
            <MetricCard
              label="En ruta"
              value="18"
              icon={<Route className="w-6 h-6" />}
            />
            <MetricCard
              label="Incidentes"
              value="3"
              icon={<AlertTriangle className="w-6 h-6" />}
            />
            <MetricCard
              label="Puntualidad"
              value="92%"
              icon={<TrendingUp className="w-6 h-6" />}
            />
          </div>
        </div>

        {/* Fleet List */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[#1a1a1a] text-lg font-medium">Flota</h2>
            <button className="text-[#1D9E75] text-sm font-medium">Ver reportes</button>
          </div>
          <div className="space-y-3">
            {fleet.map((bus) => (
              <FleetCard
                key={bus.id}
                busName={bus.busName}
                route={bus.route}
                status={bus.status}
                driver={bus.driver}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
