interface FleetCardProps {
  busName: string;
  route: string;
  status: 'active' | 'delayed' | 'breakdown' | 'offline';
  driver?: string;
  onClick?: () => void;
}

export default function FleetCard({ busName, route, status, driver, onClick }: FleetCardProps) {
  const statusConfig = {
    active: { bg: 'bg-[#1D9E75]', text: 'En servicio' },
    delayed: { bg: 'bg-[#f59e0b]', text: 'Retrasado' },
    breakdown: { bg: 'bg-[#ef4444]', text: 'Avería' },
    offline: { bg: 'bg-[#9ca3af]', text: 'Fuera de servicio' }
  };

  return (
    <div
      className="bg-white border border-[#e5e7eb] rounded-[10px] p-4 cursor-pointer hover:bg-[#E1F5EE] transition-colors"
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-[#1a1a1a] text-base font-medium mb-1">{busName}</h3>
          <p className="text-[#6b7280] text-sm font-normal mb-2">Ruta: {route}</p>
          {driver && <p className="text-[#6b7280] text-sm font-normal">Conductor: {driver}</p>}
        </div>
        <span className={`${statusConfig[status].bg} text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap`}>
          {statusConfig[status].text}
        </span>
      </div>
    </div>
  );
}
