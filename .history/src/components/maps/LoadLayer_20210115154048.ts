import MapInt from "../maps/MapInt";
import esri from "esri-leaflet";
import L from "leaflet";
export default class LoadLayer {
  public loadPointLayer = (): any => {
    let pFlayer = new L.esri.FeatureLayer({
      url:
        "http://10.61.3.113:6080/arcgis/rest/services/Weatherpt_hbt/MapServer/0",
    });
    MapInt.getInstance().addLayer(pFlayer);
  };
}
