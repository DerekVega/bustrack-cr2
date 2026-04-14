import { useState } from 'react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import Button from '../Button';

interface ReportIncidentScreenProps {
  onBack: () => void;
}

export default function ReportIncidentScreen({ onBack }: ReportIncidentScreenProps) {
  const [route, setRoute] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [stop, setStop] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Incidente reportado exitosamente');
    onBack();
  };

  const incidentTypes = [
    'Retraso',
    'Bus lleno',
    'Falla mecánica',
    'Conductor',
    'Limpieza',
    'Otro'
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Reportar incidente" onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Ruta</label>
            <select
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
              required
            >
              <option value="">Seleccione una ruta</option>
              <option value="400">400 SJ-Heredia</option>
              <option value="300">300 SJ-Alajuela</option>
              <option value="200">200 Circunvalación</option>
              <option value="500">500 SJ-Cartago</option>
            </select>
          </div>

          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Tipo de incidente</label>
            <div className="grid grid-cols-2 gap-2">
              {incidentTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setIncidentType(type)}
                  className={`py-3 rounded-[10px] text-sm font-medium transition-all ${
                    incidentType === type
                      ? 'bg-[#1D9E75] text-white'
                      : 'bg-white border border-[#e5e7eb] text-[#6b7280]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Parada</label>
            <input
              type="text"
              value={stop}
              onChange={(e) => setStop(e.target.value)}
              placeholder="Parada más cercana"
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
            />
          </div>

          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describa el incidente..."
              rows={4}
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75] resize-none"
              required
            />
          </div>

          <Button type="submit" fullWidth>
            Enviar reporte
          </Button>
        </form>
      </div>
    </div>
  );
}
