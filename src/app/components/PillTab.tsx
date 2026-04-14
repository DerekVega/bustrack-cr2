interface PillTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function PillTab({ label, active, onClick }: PillTabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? 'bg-[#1D9E75] text-white'
          : 'bg-white border border-[#e5e7eb] text-[#6b7280]'
      }`}
    >
      {label}
    </button>
  );
}
