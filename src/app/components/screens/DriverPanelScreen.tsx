import { useState } from 'react';
import { Bus, AlertCircle } from 'lucide-react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import Button from '../Button';

export default function DriverPanelScreen() {
  const [busStatus, setBusStatus] = useState<'service' | 'delayed' | 'breakdown' | 'offline'>('service');

  const statusOptions = [
    { id: 'service' as const, label: 'En servicio', color: 'bg-[#1D9E75]' },
    { id: 'delayed' as const, label: 'Retrasado', color: 'bg-[#f59e0b]' },
    { id: 'breakdown' as const, label: 'Avería', color: 'bg-[#ef4444]' },
    { id: 'offline' as const, label: 'Fuera de servicio', color: 'bg-[#9ca3af]' },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Panel de conductor" subtitle="Bus #1234" />

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Bus Info */}
        <div className="bg-[#E1F5EE] rounded-[10px] p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Bus className="w-8 h-8 text-[#1D9E75]" />
            <div>
              <h2 className="text-[#1a1a1a] text-lg font-medium">Bus #1234</h2>
              <p className="text-[#6b7280] text-sm font-normal">Ruta 400 SJ-Heredia</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-[#6b7280] font-normal">Placa</p>
              <p className="text-[#1a1a1a] font-medium">SJO-123-456</p>
            </div>
            <div>
              <p className="text-[#6b7280] font-normal">Operadora</p>
              <p className="text-[#1a1a1a] font-medium">TransCR</p>
            </div>
          </div>
        </div>

        {/* Status Selector */}
        <div className="mb-6">
          <h3 className="text-[#1a1a1a] text-base font-medium mb-3">Estado del bus</h3>
          <div className="grid grid-cols-2 gap-3">
            {statusOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setBusStatus(option.id)}
                className={`py-3 rounded-[10px] text-sm font-medium transition-all ${
                  busStatus === option.id
                    ? `${option.color} text-white`
                    : 'bg-white border border-[#e5e7eb] text-[#6b7280]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Current Route */}
        <div className="mb-6">
          <h3 className="text-[#1a1a1a] text-base font-medium mb-3">Ruta en curso</h3>
          <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#1a1a1a] text-base font-medium">400 SJ-Heredia</span>
              <span className="bg-[#1D9E75] text-white px-3 py-1 rounded-full text-sm font-medium">Activa</span>
            </div>
            <div className="space-y-1 text-sm text-[#6b7280]">
              <p>Salida: 8:00 AM - Terminal San José</p>
              <p>Llegada estimada: 9:15 AM - Terminal Heredia</p>
              <p>Paradas restantes: 4 de 12</p>
            </div>
          </div>
        </div>

        {/* Report Incident */}
        <div className="bg-[#fef3c7] border border-[#f59e0b] rounded-[10px] p-4 mb-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-[#92400e] text-sm font-medium mb-1">¿Algún problema?</h4>
              <p className="text-[#92400e] text-sm font-normal mb-3">Reporte cualquier incidente que afecte el servicio</p>
              <Button variant="secondary" fullWidth>
                Reportar incidente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
