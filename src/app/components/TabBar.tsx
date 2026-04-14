import { Home, MapPin, Bell, Clock, User, Radio, FileText, AlertCircle, Users, CheckSquare } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: 'home' | 'routes' | 'alerts' | 'history' | 'profile' | 'panel' | 'report' | 'fleet' | 'reports' | 'validate';
}

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const icons = {
  home: Home,
  routes: MapPin,
  alerts: Bell,
  history: Clock,
  profile: User,
  panel: Radio,
  report: FileText,
  fleet: Users,
  reports: AlertCircle,
  validate: CheckSquare
};

export default function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="bg-white border-t border-[#e5e7eb] px-4 py-2 flex items-center justify-around">
      {tabs.map((tab) => {
        const Icon = icons[tab.icon];
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center gap-1 py-2 px-3 min-w-[60px]"
          >
            <Icon
              className={`w-6 h-6 ${isActive ? 'text-[#1D9E75]' : 'text-[#9ca3af]'}`}
              strokeWidth={2}
            />
            <span className={`text-xs font-normal ${isActive ? 'text-[#1D9E75]' : 'text-[#9ca3af]'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
