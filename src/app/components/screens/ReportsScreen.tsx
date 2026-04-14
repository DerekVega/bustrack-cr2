import { BarChart3, TrendingUp, AlertTriangle, Clock } from 'lucide-react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import MetricCard from '../MetricCard';

export default function ReportsScreen() {
  const monthlyStats = [
    { month: 'Enero', trips: 1250, onTime: 95, incidents: 12 },
    { month: 'Febrero', trips: 1180, onTime: 93, incidents: 15 },
    { month: 'Marzo', trips: 1320, onTime: 96, incidents: 8 },
    { month: 'Abril', trips: 890, onTime: 94, incidents: 10 },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Reportes" subtitle="Estadísticas y análisis" />

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Overall Metrics */}
        <div className="mb-6">
          <h2 className="text-[#1a1a1a] text-lg font-medium mb-3">Métricas generales</h2>
          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              label="Recorridos totales"
              value="4,640"
              icon={<BarChart3 className="w-6 h-6" />}
            />
            <MetricCard
              label="Puntualidad promedio"
              value="94.5%"
              icon={<TrendingUp className="w-6 h-6" />}
            />
            <MetricCard
              label="Incidentes totales"
              value="45"
              icon={<AlertTriangle className="w-6 h-6" />}
            />
            <MetricCard
              label="Tiempo promedio"
              value="48 min"
              icon={<Clock className="w-6 h-6" />}
            />
          </div>
        </div>

        {/* Monthly Report */}
        <div>
          <h2 className="text-[#1a1a1a] text-lg font-medium mb-3">Reporte mensual</h2>
          <div className="space-y-3">
            {monthlyStats.map((stat, index) => (
              <div key={index} className="bg-white border border-[#e5e7eb] rounded-[10px] p-4">
                <h3 className="text-[#1a1a1a] text-base font-medium mb-3">{stat.month} 2026</h3>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-[#6b7280] font-normal mb-1">Recorridos</p>
                    <p className="text-[#1a1a1a] font-medium text-lg">{stat.trips}</p>
                  </div>
                  <div>
                    <p className="text-[#6b7280] font-normal mb-1">Puntualidad</p>
                    <p className="text-[#1D9E75] font-medium text-lg">{stat.onTime}%</p>
                  </div>
                  <div>
                    <p className="text-[#6b7280] font-normal mb-1">Incidentes</p>
                    <p className="text-[#f59e0b] font-medium text-lg">{stat.incidents}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
