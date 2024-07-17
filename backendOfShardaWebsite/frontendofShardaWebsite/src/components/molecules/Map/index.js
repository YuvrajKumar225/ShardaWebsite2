import { MapContainer, TileLayer, ZoomControl, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "../../../pages/Kontak/Kontak.css";

// Pune, Maharashtra coordinates
const position = [18.5204, 73.8567];

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const Map = () => (
  <>
    <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Our Locations</h1>
    <MapContainer className='map-action' center={position} zoom={12} zoomControl={true} scrollWheelZoom={true} dragging={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      <Marker position={position}>
        <Tooltip sticky>
          SHARDA PRODUCTION<br />
          Pune, Maharashtra
        </Tooltip>
      </Marker>
    </MapContainer>
  </>
);

export default Map;
