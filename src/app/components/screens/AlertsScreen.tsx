import { useState } from 'react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import AlertCard from '../AlertCard';
import PillTab from '../PillTab';

export default function AlertsScreen() {
  const [activeFilter, setActiveFilter] = useState('todas');

  const alerts = [
    {
      id: 1,
      type: 'delay' as const,
      title: 'Retraso en Ruta 300',
      message: 'Tráfico intenso en la vía a Alajuela',
      time: 'Hace 5 min',
      route: '300 SJ-Alajuela'
    },
    {
      id: 2,
      type: 'detour' as const,
      title: 'Desvío en Ruta 200',
      message: 'Accidente en la Circunvalación, ruta desviada',
      time: 'Hace 15 min',
      route: '200 Circunvalación'
    },
    {
      id: 3,
      type: 'info' as const,
      title: 'Nuevas paradas',
      message: 'Se agregaron 2 paradas nuevas en la ruta 400',
      time: 'Hace 1 hora',
      route: '400 SJ-Heredia'
    },
    {
      id: 4,
      type: 'notice' as const,
      title: 'Mantenimiento programado',
      message: 'Servicio reducido el próximo domingo',
      time: 'Hace 2 horas'
    },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Alertas" subtitle="Notificaciones del sistema" />

      <div className="flex-1 overflow-y-auto">
        {/* Filters */}
        <div className="px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <PillTab label="Todas" active={activeFilter === 'todas'} onClick={() => setActiveFilter('todas')} />
            <PillTab label="Retrasos" active={activeFilter === 'retrasos'} onClick={() => setActiveFilter('retrasos')} />
            <PillTab label="Desvíos" active={activeFilter === 'desvios'} onClick={() => setActiveFilter('desvios')} />
            <PillTab label="Avisos" active={activeFilter === 'avisos'} onClick={() => setActiveFilter('avisos')} />
          </div>
        </div>

        {/* Alerts List */}
        <div className="px-4 pb-4 space-y-3">
          {alerts.map((alert) => (
            <AlertCard
              key={alert.id}
              type={alert.type}
              title={alert.title}
              message={alert.message}
              time={alert.time}
              route={alert.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
