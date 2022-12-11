// Import stylesheets
import './style.css';
import { Map, TileLayer} from 'leaflet';

// Write Javascript code!
const map = new Map('map');

const layer = new TileLayer(
  'http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7',
  {
    subdomains: '1234'
  }
);

layer.addTo(map);

map.setView([39.90, 116.38], 10);