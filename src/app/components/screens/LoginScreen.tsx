import { useState } from 'react';
import StatusBar from '../StatusBar';
import Button from '../Button';

interface LoginScreenProps {
  onLogin: (role: string) => void;
  onNavigateToRegister: () => void;
}

export default function LoginScreen({ onLogin, onNavigateToRegister }: LoginScreenProps) {
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    onLogin('pasajero');
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <StatusBar />
      <div className="flex-1 flex flex-col justify-center px-6">
        <div className="mb-8">
          <h1 className="text-[#1a1a1a] text-3xl font-medium mb-2">BusTrack CR</h1>
          <p className="text-[#6b7280] text-base font-normal">Rastreo de buses en tiempo real</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Cédula</label>
            <input
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="Ingrese su cédula"
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
            />
          </div>

          <div>
            <label className="block text-[#1a1a1a] text-sm font-medium mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]"
            />
          </div>

          <Button type="submit" fullWidth>
            Iniciar sesión
          </Button>

          <button
            type="button"
            onClick={onNavigateToRegister}
            className="w-full text-[#1D9E75] text-sm font-medium"
          >
            ¿No tiene cuenta? Regístrese aquí
          </button>
        </form>
      </div>
    </div>
  );
}
