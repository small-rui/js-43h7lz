// Import stylesheets
import './style.css';
import { Map, TileLayer, LayerGroup } from 'leaflet';

// Write Javascript code!
const map = new Map('map');

// 高德切片地址
const amapLayer = new TileLayer(
  'http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7',
  {
    subdomains: '1234'
  }
);

const tdtVectorLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=e9b1e38796d3192a17dcccaffd6bd95d', 
  {}
);

// e9b1e38796d3192a17dcccaffd6bd95d

const tdtLabelLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=e9b1e38796d3192a17dcccaffd6bd95d', 
  {}
);

const tdtLayer = new LayerGroup([tdtVectorLayer, tdtLabelLayer]);

amapLayer.addTo(map);

map.setView([39.90, 116.38], 10);

const items = document.getElementsByName('base');
items.forEach(item => {
  item.onclick = evt => {
    switch (evt.target.value) {
      case 'amap':
        tdtLayer.removeFrom(map);
        amapLayer.addTo(map);
        break;
      case 'tdt':
        amapLayer.removeFrom(map);
        tdtLayer.addTo(map);
        break;
    }
  };
});