interface BusCardProps {
  route: string;
  status: 'on-time' | 'delayed';
  eta: string;
  progress: number;
  destination?: string;
  onClick?: () => void;
}

export default function BusCard({ route, status, eta, progress, destination, onClick }: BusCardProps) {
  const statusColors = {
    'on-time': 'bg-[#1D9E75] text-white',
    'delayed': 'bg-[#f59e0b] text-white'
  };

  const statusText = {
    'on-time': 'A tiempo',
    'delayed': 'Retrasado'
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white border border-[#e5e7eb] rounded-[10px] p-4 ${onClick ? 'cursor-pointer hover:bg-[#E1F5EE] transition-colors' : ''}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex gap-2">
          <span className="bg-[#E1F5EE] text-[#1D9E75] px-3 py-1 rounded-full text-sm font-medium">
            {route}
          </span>
          <span className={`${statusColors[status]} px-3 py-1 rounded-full text-sm font-medium`}>
            {statusText[status]}
          </span>
        </div>
        <span className="text-[#1a1a1a] text-lg font-medium">{eta}</span>
      </div>
      {destination && (
        <p className="text-[#6b7280] text-sm font-normal mb-3">{destination}</p>
      )}
      <div className="w-full bg-[#E1F5EE] rounded-full h-2">
        <div
          className="bg-[#1D9E75] h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
