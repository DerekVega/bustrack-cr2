import { UserCheck, UserX, Clock, CheckCircle, XCircle } from 'lucide-react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import MetricCard from '../MetricCard';
import Button from '../Button';

export default function MOPTPanelScreen() {
  const pendingValidations = [
    { id: 1, name: 'Juan Pérez Mora', cedula: '1-2345-6789', role: 'Conductor', date: '2026-04-14' },
    { id: 2, name: 'María González', cedula: '2-3456-7890', role: 'Operadora', date: '2026-04-14' },
    { id: 3, name: 'Carlos Ramírez', cedula: '3-4567-8901', role: 'Conductor', date: '2026-04-13' },
  ];

  const handleApprove = (id: number) => {
    alert(`Usuario ${id} aprobado`);
  };

  const handleReject = (id: number) => {
    alert(`Usuario ${id} rechazado`);
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Panel MOPT" subtitle="Validación de usuarios" />

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Metrics */}
        <div className="mb-6">
          <h2 className="text-[#1a1a1a] text-lg font-medium mb-3">Validaciones</h2>
          <div className="grid grid-cols-3 gap-3">
            <MetricCard
              label="Pendientes"
              value="8"
              icon={<Clock className="w-6 h-6" />}
            />
            <MetricCard
              label="Aprobadas"
              value="142"
              icon={<UserCheck className="w-6 h-6" />}
            />
            <MetricCard
              label="Rechazadas"
              value="15"
              icon={<UserX className="w-6 h-6" />}
            />
          </div>
        </div>

        {/* Pending Validations */}
        <div>
          <h2 className="text-[#1a1a1a] text-lg font-medium mb-3">Solicitudes pendientes</h2>
          <div className="space-y-3">
            {pendingValidations.map((user) => (
              <div key={user.id} className="bg-white border border-[#e5e7eb] rounded-[10px] p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-[#1a1a1a] text-base font-medium">{user.name}</h3>
                    <p className="text-[#6b7280] text-sm font-normal">Cédula: {user.cedula}</p>
                    <p className="text-[#6b7280] text-sm font-normal">Rol: {user.role}</p>
                  </div>
                  <span className="text-[#6b7280] text-xs font-normal">{user.date}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(user.id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1D9E75] text-white px-4 py-2 rounded-[10px] font-medium"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Aprobar
                  </button>
                  <button
                    onClick={() => handleReject(user.id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-[#ef4444] text-[#ef4444] px-4 py-2 rounded-[10px] font-medium"
                  >
                    <XCircle className="w-4 h-4" />
                    Rechazar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
