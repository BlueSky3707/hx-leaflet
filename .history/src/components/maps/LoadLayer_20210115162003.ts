import MapInt from "../maps/MapInt";
import * as esri from "esri-leaflet";
export default class LoadLayer {
  public loadPointLayer = (): any => {
    let pFlayer = esri.featureLayer({
      url:
        "http://10.61.3.113:6080/arcgis/rest/services/Weatherpt_hbt/MapServer/0",
      style: function(feature) {
        return { color: "white", weight: 0, fillOpacity: 1 };
      },
    });

    MapInt.getInstance().addLayer(pFlayer);
  };
}
