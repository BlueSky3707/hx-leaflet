import MapInt from "../maps/MapInt";
import * as esri from "esri-leaflet";
import L from "leaflet";
export default class LoadLayer {
  public loadPointLayer = (): any => {
    let pFlayer = L.esri.featureLayer({
      url:
        "http://10.61.3.113:6080/arcgis/rest/services/Weatherpt_hbt/MapServer/0",
    });
    MapInt.getInstance().addLayer(pFlayer);
  };
}
