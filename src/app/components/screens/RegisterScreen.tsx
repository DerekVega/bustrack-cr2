import { useState } from 'react';
import StatusBar from '../StatusBar';
import TopBar from '../TopBar';
import Button from '../Button';

interface RegisterScreenProps {
  onBack: () => void;
}

export default function RegisterScreen({ onBack }: RegisterScreenProps) {
  const [role, setRole] = useState<'pasajero' | 'conductor' | 'operador'>('pasajero');
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitud enviada para validación MOPT. Recibirá respuesta en 24 horas.');
    onBack();
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <TopBar title="Registro" onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Rol</label>
            <div className="flex gap-2">
              {(['pasajero', 'conductor', 'operador'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`flex-1 py-3 rounded-[10px] text-sm font-medium transition-all ${
                    role === r
                      ? 'bg-[#1D9E75] text-white'
                      : 'bg-white border border-[#e5e7eb] text-[#6b7280]'
                  }`}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Cédula</label>
            <input
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="Ingrese su cédula"
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
              required
            />
          </div>

          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Nombre completo</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese su nombre completo"
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
              required
            />
          </div>

          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Correo electrónico</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
              required
            />
          </div>

          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Cree una contraseña"
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
              required
            />
          </div>

          <div className="bg-[#E1F5EE] border border-[#1D9E75] rounded-[10px] p-4">
            <p className="text-[#0F6E56] text-sm font-normal">
              Su solicitud será enviada al MOPT para validación. Recibirá una respuesta en un plazo de 24 horas.
            </p>
          </div>

          <Button type="submit" fullWidth>
            Enviar para validación MOPT
          </Button>
        </form>
      </div>
    </div>
  );
}
