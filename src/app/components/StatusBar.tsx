export default function StatusBar() {
  return (
    <div className="h-11 bg-[#1D9E75] flex items-center justify-between px-6 pt-2">
      <span className="text-white text-sm font-normal">9:41</span>
      <div className="flex items-center gap-1">
        <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
          <rect x="0.5" y="3.5" width="3" height="5" rx="0.5" fill="white"/>
          <rect x="4.5" y="1.5" width="3" height="9" rx="0.5" fill="white" fillOpacity="0.6"/>
          <rect x="8.5" y="0.5" width="3" height="11" rx="0.5" fill="white" fillOpacity="0.4"/>
        </svg>
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M2 6h12v4H2z" fill="white"/>
          <rect x="14" y="7" width="1" height="2" fill="white" opacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}
