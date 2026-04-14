import { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Locate, Filter } from 'lucide-react';

interface Bus {
  id: number;
  route: string;
  destination: string;
  status: 'on-time' | 'delayed' | 'broken';
  eta: string;
  speed: number;
  lat: number;
  lng: number;
}

interface Stop {
  name: string;
  lat: number;
  lng: number;
}

interface LeafletMapProps {
  onBusClick?: (busId: number) => void;
}

const STATUS_COLORS: Record<string, string> = {
  'on-time': '#1D9E75',
  delayed: '#EF9F27',
  broken: '#E24B4A',
};

const STATUS_LABELS: Record<string, string> = {
  'on-time': 'A tiempo',
  delayed: 'Retrasado',
  broken: 'Avería',
};

const BUSES_DATA: Bus[] = [
  { id: 1, route: '400', destination: 'Heredia Centro', status: 'on-time', eta: '3 min', speed: 32, lat: 9.9995, lng: -84.1185 },
  { id: 2, route: '300', destination: 'Alajuela Centro', status: 'delayed', eta: '8 min', speed: 18, lat: 9.9965, lng: -84.1220 },
  { id: 3, route: '200', destination: 'Barrio México', status: 'on-time', eta: '12 min', speed: 28, lat: 10.0010, lng: -84.1160 },
  { id: 4, route: '620', destination: 'San Pablo', status: 'broken', eta: '—', speed: 0, lat: 9.9950, lng: -84.1175 },
];

const ROUTE_STOPS: Stop[] = [
  { name: 'Mercado Central', lat: 9.9988, lng: -84.1200 },
  { name: 'Parque Central', lat: 9.9995, lng: -84.1190 },
  { name: 'Correos', lat: 10.0002, lng: -84.1178 },
  { name: 'Hospital', lat: 10.0012, lng: -84.1165 },
];

const USER_POS = { lat: 9.9981, lng: -84.1197 };

const ROUTES = ['Todas', '400', '300', '200', '620'];

function createBusIcon(route: string, color: string) {
  return L.divIcon({
    className: '',
    html: `<div style="display:flex;flex-direction:column;align-items:center;">
      <div style="width:34px;height:34px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:500;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);">${route}</div>
      <div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:8px solid ${color};margin-top:-2px;"></div>
    </div>`,
    iconSize: [34, 44],
    iconAnchor: [17, 44],
    popupAnchor: [0, -44],
  });
}

function createUserIcon() {
  return L.divIcon({
    className: '',
    html: `<div style="display:flex;flex-direction:column;align-items:center;">
      <div style="position:relative;width:20px;height:20px;">
        <div style="position:absolute;inset:0;background:#378ADD;opacity:0.3;border-radius:50%;animation:pulse-ring 2s ease-out infinite;"></div>
        <div style="position:absolute;inset:4px;background:#378ADD;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.3);"></div>
      </div>
      <span style="font-size:9px;color:#378ADD;font-weight:500;margin-top:2px;">Usted</span>
    </div>`,
    iconSize: [20, 34],
    iconAnchor: [10, 10],
  });
}

function createStopIcon() {
  return L.divIcon({
    className: '',
    html: `<div style="width:10px;height:10px;background:#fff;border:2px solid #1D9E75;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>`,
    iconSize: [10, 10],
    iconAnchor: [5, 5],
  });
}

export default function LeafletMap({ onBusClick }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const busMarkersRef = useRef<L.Marker[]>([]);
  const busDataRef = useRef<Bus[]>([...BUSES_DATA]);
  const [selectedRoute, setSelectedRoute] = useState('Todas');
  const [showFilter, setShowFilter] = useState(false);
  const [activeBus, setActiveBus] = useState<number | null>(null);
  const routeLineRef = useRef<L.Polyline | null>(null);
  const stopMarkersRef = useRef<L.Marker[]>([]);

  const drawRoute = useCallback((busId: number | null) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing
    if (routeLineRef.current) {
      map.removeLayer(routeLineRef.current);
      routeLineRef.current = null;
    }
    stopMarkersRef.current.forEach((m) => map.removeLayer(m));
    stopMarkersRef.current = [];

    if (busId === null) return;

    const bus = busDataRef.current.find((b) => b.id === busId);
    if (!bus) return;

    const routeCoords: L.LatLngExpression[] = [
      [bus.lat, bus.lng],
      ...ROUTE_STOPS.map((s) => [s.lat, s.lng] as L.LatLngExpression),
    ];

    routeLineRef.current = L.polyline(routeCoords, {
      color: '#1D9E75',
      weight: 3,
      dashArray: '8, 8',
      opacity: 0.8,
    }).addTo(map);

    ROUTE_STOPS.forEach((stop) => {
      const m = L.marker([stop.lat, stop.lng], { icon: createStopIcon() })
        .bindTooltip(stop.name, { direction: 'top', offset: [0, -8], className: 'stop-tooltip' })
        .addTo(map);
      stopMarkersRef.current.push(m);
    });
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [9.9981, -84.1197],
      zoom: 15,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(map);

    // User marker
    L.marker([USER_POS.lat, USER_POS.lng], { icon: createUserIcon(), zIndexOffset: 1000 }).addTo(map);

    mapInstanceRef.current = map;

    // Bus markers
    const markers = busDataRef.current.map((bus) => {
      const color = STATUS_COLORS[bus.status];
      const marker = L.marker([bus.lat, bus.lng], { icon: createBusIcon(bus.route, color) }).addTo(map);

      const badgeColor = bus.status === 'on-time' ? '#1D9E75' : bus.status === 'delayed' ? '#EF9F27' : '#E24B4A';
      marker.bindPopup(
        `<div style="font-family:sans-serif;min-width:160px;">
          <div style="font-weight:500;font-size:14px;margin-bottom:4px;">Ruta ${bus.route}</div>
          <div style="color:#6b7280;font-size:12px;margin-bottom:6px;">${bus.destination}</div>
          <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
            <span>ETA: <b>${bus.eta}</b></span>
            <span>${bus.speed} km/h</span>
          </div>
          <div style="margin-bottom:8px;">
            <span style="background:${badgeColor};color:#fff;font-size:10px;padding:2px 8px;border-radius:10px;">${STATUS_LABELS[bus.status]}</span>
          </div>
          <button onclick="window.__busDetailClick && window.__busDetailClick(${bus.id})" style="width:100%;background:#1D9E75;color:#fff;border:none;padding:6px;border-radius:8px;font-size:12px;cursor:pointer;">Ver detalle</button>
        </div>`,
        { closeButton: true, className: 'bus-popup' }
      );

      marker.on('click', () => {
        setActiveBus(bus.id);
      });

      return marker;
    });

    busMarkersRef.current = markers;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Draw route when activeBus changes
  useEffect(() => {
    drawRoute(activeBus);
  }, [activeBus, drawRoute]);

  // Bus detail click handler
  useEffect(() => {
    (window as any).__busDetailClick = (busId: number) => {
      onBusClick?.(busId);
    };
    return () => {
      delete (window as any).__busDetailClick;
    };
  }, [onBusClick]);

  // Animate buses
  useEffect(() => {
    const interval = setInterval(() => {
      busDataRef.current = busDataRef.current.map((bus) => ({
        ...bus,
        lat: bus.lat + (Math.random() - 0.5) * 0.0004,
        lng: bus.lng + (Math.random() - 0.5) * 0.0004,
      }));

      busMarkersRef.current.forEach((marker, i) => {
        const bus = busDataRef.current[i];
        if (selectedRoute === 'Todas' || bus.route === selectedRoute) {
          const newLatLng = L.latLng(bus.lat, bus.lng);
          marker.setLatLng(newLatLng);
          if (!mapInstanceRef.current?.hasLayer(marker)) {
            marker.addTo(mapInstanceRef.current!);
          }
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedRoute]);

  // Filter buses
  useEffect(() => {
    busMarkersRef.current.forEach((marker, i) => {
      const bus = busDataRef.current[i];
      const map = mapInstanceRef.current;
      if (!map) return;
      if (selectedRoute === 'Todas' || bus.route === selectedRoute) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else {
        if (map.hasLayer(marker)) map.removeLayer(marker);
      }
    });
  }, [selectedRoute]);

  const centerOnUser = () => {
    mapInstanceRef.current?.setView([USER_POS.lat, USER_POS.lng], 15, { animate: true });
  };

  return (
    <div className="relative h-[240px] rounded-[14px] overflow-hidden">
      {/* Pulse animation style */}
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .bus-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .bus-popup .leaflet-popup-tip {
          box-shadow: none;
        }
        .stop-tooltip {
          font-size: 11px !important;
          padding: 2px 6px !important;
          border-radius: 4px !important;
        }
        .leaflet-container { font-family: inherit; }
      `}</style>

      <div ref={mapRef} className="w-full h-full" />

      {/* Filter button */}
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="absolute top-3 right-3 z-[1000] w-9 h-9 bg-white rounded-[10px] shadow-md flex items-center justify-center"
      >
        <Filter className="w-4 h-4 text-[#1D9E75]" />
      </button>

      {/* Filter dropdown */}
      {showFilter && (
        <div className="absolute top-13 right-3 z-[1000] bg-white rounded-[10px] shadow-lg p-2 min-w-[100px]">
          {ROUTES.map((r) => (
            <button
              key={r}
              onClick={() => { setSelectedRoute(r); setShowFilter(false); }}
              className={`block w-full text-left px-3 py-1.5 rounded-md text-sm ${selectedRoute === r ? 'bg-[#E1F5EE] text-[#1D9E75]' : 'text-[#4b5563]'}`}
            >
              {r === 'Todas' ? 'Todas las rutas' : `Ruta ${r}`}
            </button>
          ))}
        </div>
      )}

      {/* Center button */}
      <button
        onClick={centerOnUser}
        className="absolute bottom-3 right-3 z-[1000] w-9 h-9 bg-white rounded-[10px] shadow-md flex items-center justify-center"
      >
        <Locate className="w-4 h-4 text-[#1D9E75]" />
      </button>
    </div>
  );
}
