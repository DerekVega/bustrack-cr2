interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export default function MetricCard({ label, value, icon }: MetricCardProps) {
  return (
    <div className="bg-[#E1F5EE] rounded-[10px] p-4 flex flex-col items-center justify-center">
      {icon && <div className="mb-2 text-[#1D9E75]">{icon}</div>}
      <span className="text-[#6b7280] text-xs font-normal text-center mb-1">{label}</span>
      <span className="text-[#1a1a1a] text-2xl font-medium">{value}</span>
    </div>
  );
}
