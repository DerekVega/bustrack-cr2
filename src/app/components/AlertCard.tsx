interface AlertCardProps {
  type: 'delay' | 'detour' | 'info' | 'notice';
  title: string;
  message: string;
  time: string;
  route?: string;
}

export default function AlertCard({ type, title, message, time, route }: AlertCardProps) {
  const borderColors = {
    delay: 'border-l-[#f59e0b]',
    detour: 'border-l-[#ef4444]',
    info: 'border-l-[#3b82f6]',
    notice: 'border-l-[#9ca3af]'
  };

  return (
    <div className={`bg-white border-l-4 ${borderColors[type]} border-t border-r border-b border-[#e5e7eb] rounded-[10px] p-4`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[#1a1a1a] text-base font-medium">{title}</h3>
        <span className="text-[#6b7280] text-xs font-normal">{time}</span>
      </div>
      <p className="text-[#6b7280] text-sm font-normal mb-2">{message}</p>
      {route && (
        <span className="inline-block bg-[#E1F5EE] text-[#1D9E75] px-3 py-1 rounded-full text-sm font-medium">
          {route}
        </span>
      )}
    </div>
  );
}
