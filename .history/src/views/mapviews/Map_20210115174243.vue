<template>
  <div id="mapid"></div>
</template>
<script>
import Vue from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "proj4leaflet";
import "proj4";
import mapConfig from "../../components/maps/mapConfig";
import MapInt from "../../components/maps/MapInt";
import LayerUtils from "../../components/maps/LayerUtils";
import * as esri from "esri-leaflet";
import LoadLayer from "../../components/maps/LoadLayer";
import icon from "leaflet/dist/images/marker-icon.png";
import viconShadow from "leaflet/dist/images/marker-shadow.png";
import * as HeatmapFeatureLayer from "esri-leaflet-heatmap-feature-layer/src/HeatmapFeatureLayer.js";

export default {
  created() {},
  mounted() {
    // let DefaultIcon = L.icon({
    //   iconUrl: icon,
    //   shadowUrl: iconShadow,
    // });
    // L.Marker.prototype.options.icon = DefaultIcon;

    MapInt.domid = "mapid";
    MapInt.getInstance().fitBounds(
      L.latLngBounds(
        L.latLng(mapConfig.mapExtent.ymin, mapConfig.mapExtent.xmin),
        L.latLng(mapConfig.mapExtent.ymax, mapConfig.mapExtent.xmax)
      )
    );
    console.log(HeatmapFeatureLayer);
    LayerUtils.addTileLayer(mapConfig.dtVector, 1);
    LayerUtils.addTileLayer(mapConfig.dtVectorL, 2);
    let loadLayer = new LoadLayer();
    loadLayer.loadPointLayer();
    new HeatmapFeatureLayer({
      url:
        "https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Graffiti_Locations3/FeatureServer/0",
      radius: 12,
    }).addTo(MapInt.getInstance());
  },
  methods: {
    setDeafultStyle() {},
  },
};
</script>

<style>
#mapid {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
