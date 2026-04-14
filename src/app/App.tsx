import { useState } from 'react';
import TabBar from './components/TabBar';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import HomeScreen from './components/screens/HomeScreen';
import RoutesScreen from './components/screens/RoutesScreen';
import BusDetailScreen from './components/screens/BusDetailScreen';
import AlertsScreen from './components/screens/AlertsScreen';
import ReportIncidentScreen from './components/screens/ReportIncidentScreen';
import HistoryScreen from './components/screens/HistoryScreen';
import DriverPanelScreen from './components/screens/DriverPanelScreen';
import OperatorPanelScreen from './components/screens/OperatorPanelScreen';
import MOPTPanelScreen from './components/screens/MOPTPanelScreen';
import ReportsScreen from './components/screens/ReportsScreen';

type Screen =
  | 'login'
  | 'register'
  | 'home'
  | 'routes'
  | 'bus-detail'
  | 'alerts'
  | 'report-incident'
  | 'history'
  | 'driver-panel'
  | 'operator-panel'
  | 'mopt-panel'
  | 'reports'
  | 'profile';

type UserRole = 'pasajero' | 'conductor' | 'operador' | 'mopt' | null;

const tabConfigs = {
  pasajero: [
    { id: 'home', label: 'Inicio', icon: 'home' as const },
    { id: 'routes', label: 'Rutas', icon: 'routes' as const },
    { id: 'alerts', label: 'Alertas', icon: 'alerts' as const },
    { id: 'history', label: 'Historial', icon: 'history' as const },
    { id: 'profile', label: 'Perfil', icon: 'profile' as const },
  ],
  conductor: [
    { id: 'driver-panel', label: 'Panel', icon: 'panel' as const },
    { id: 'history', label: 'Historial', icon: 'history' as const },
    { id: 'report-incident', label: 'Reportar', icon: 'report' as const },
  ],
  operador: [
    { id: 'operator-panel', label: 'Flota', icon: 'fleet' as const },
    { id: 'reports', label: 'Reportes', icon: 'reports' as const },
    { id: 'alerts', label: 'Alertas', icon: 'alerts' as const },
  ],
  mopt: [
    { id: 'mopt-panel', label: 'Validar', icon: 'validate' as const },
    { id: 'operator-panel', label: 'Flota', icon: 'fleet' as const },
    { id: 'reports', label: 'Reportes', icon: 'reports' as const },
  ],
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [activeTab, setActiveTab] = useState('home');

  const handleLogin = (role: string) => {
    const userRoleTyped = role as UserRole;
    setUserRole(userRoleTyped);

    // Navigate to appropriate default screen based on role
    if (role === 'pasajero') {
      setCurrentScreen('home');
      setActiveTab('home');
    } else if (role === 'conductor') {
      setCurrentScreen('driver-panel');
      setActiveTab('driver-panel');
    } else if (role === 'operador') {
      setCurrentScreen('operator-panel');
      setActiveTab('operator-panel');
    } else if (role === 'mopt') {
      setCurrentScreen('mopt-panel');
      setActiveTab('mopt-panel');
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentScreen(tabId as Screen);
  };

  const handleBack = () => {
    if (userRole === 'pasajero') {
      setCurrentScreen('home');
      setActiveTab('home');
    } else if (userRole === 'conductor') {
      setCurrentScreen('driver-panel');
      setActiveTab('driver-panel');
    } else if (userRole === 'operador') {
      setCurrentScreen('operator-panel');
      setActiveTab('operator-panel');
    } else if (userRole === 'mopt') {
      setCurrentScreen('mopt-panel');
      setActiveTab('mopt-panel');
    } else {
      setCurrentScreen('login');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return (
          <LoginScreen
            onLogin={handleLogin}
            onNavigateToRegister={() => setCurrentScreen('register')}
          />
        );
      case 'register':
        return <RegisterScreen onBack={() => setCurrentScreen('login')} />;
      case 'home':
        return <HomeScreen onBusClick={() => setCurrentScreen('bus-detail')} />;
      case 'routes':
        return <RoutesScreen />;
      case 'bus-detail':
        return <BusDetailScreen onBack={handleBack} />;
      case 'alerts':
        return <AlertsScreen />;
      case 'report-incident':
        return <ReportIncidentScreen onBack={handleBack} />;
      case 'history':
        return <HistoryScreen />;
      case 'driver-panel':
        return <DriverPanelScreen />;
      case 'operator-panel':
        return <OperatorPanelScreen />;
      case 'mopt-panel':
        return <MOPTPanelScreen />;
      case 'reports':
        return <ReportsScreen />;
      case 'profile':
        return (
          <div className="h-full bg-white flex flex-col">
            <div className="h-11 bg-[#1D9E75] flex items-center justify-between px-6 pt-2">
              <span className="text-white text-sm font-normal">9:41</span>
            </div>
            <div className="bg-[#1D9E75] px-4 py-4">
              <h1 className="text-white text-lg font-medium">Perfil</h1>
            </div>
            <div className="flex-1 px-6 py-6">
              <div className="bg-[#E1F5EE] rounded-[10px] p-4 mb-4">
                <p className="text-[#1a1a1a] text-base font-medium mb-2">Usuario Pasajero</p>
                <p className="text-[#6b7280] text-sm font-normal">usuario@ejemplo.com</p>
              </div>
              <button
                onClick={() => {
                  setUserRole(null);
                  setCurrentScreen('login');
                }}
                className="w-full bg-[#ef4444] text-white px-6 py-3 rounded-[10px] font-medium"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        );
      default:
        return <HomeScreen />;
    }
  };

  const showTabBar = userRole && currentScreen !== 'login' && currentScreen !== 'register' && currentScreen !== 'bus-detail';

  return (
    <div className="w-[390px] h-[844px] mx-auto bg-white shadow-2xl overflow-hidden flex flex-col">
      <div className="flex-1 overflow-hidden">
        {renderScreen()}
      </div>
      {showTabBar && userRole && (
        <TabBar
          tabs={tabConfigs[userRole]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      )}
    </div>
  );
}
