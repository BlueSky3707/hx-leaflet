import Vue from "vue";
import L from "leaflet";
import "proj4leaflet";
import "proj4";
import mapConfig from "../maps/mapConfig";

export default class MapInt {
  static maps: L.Map;
  static domid: string;
  static layersArr: any[] = [];
  static getInstance = (): L.Map => {
    if (!MapInt.maps) {
      MapInt.maps = MapInt.IntMap(MapInt.domid);
    }
    MapInt.maps.addLayer(MapInt.pGroupLayers);
    return MapInt.maps;
  };
  static getLayerById = (id: string): any => {
    let pLayer = MapInt.layersArr.filter((x) => {
      return x.id === id;
    });
    if (pLayer.length > 0 && pLayer !== undefined && pLayer !== null) {
      return pLayer[0].player;
    } else {
      return "";
    }
  };
  static setLayerInfo = (layerid: string, layr: L.Layer) => {
    if (MapInt.getInstance().hasLayer(layr)) {
      layr.remove();
    }
    if (MapInt.getLayerById(layerid).length === 0) {
      let layerInf = {
        id: layerid,
        player: layr,
      };
      MapInt.layersArr.push(layerInf);
    }
  };
  static pGroupLayers: L.LayerGroup = L.layerGroup();
  static IntMap = (divId: string): L.Map => {
    return L.map(divId, {
      minZoom: 3,
      maxZoom: 14,
      center: [34.27, 108.95],
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG4326,
    });
  };
}
