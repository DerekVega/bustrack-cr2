interface TopBarProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
}

export default function TopBar({ title, subtitle, onBack }: TopBarProps) {
  return (
    <div className="bg-[#1D9E75] px-4 py-4">
      <div className="flex items-center gap-3">
        {onBack && (
          <button onClick={onBack} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <div>
          <h1 className="text-white text-lg font-medium">{title}</h1>
          {subtitle && <p className="text-white/80 text-sm font-normal">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
