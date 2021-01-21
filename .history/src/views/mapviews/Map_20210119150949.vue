<template>
  <div>
    <div id="mapid"></div>
  </div>
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
import HeatmapOverlay from "../../../node_modules/heatmap.js/plugins/leaflet-heatmap";
import icon from "../../../node_modules/leaflet/src/images/marker.min.svg";
import shades from "../../../node_modules/leaflet/src/images/shadow.svg";
import MapPop from "../mapviews/MapPop";
export default {
  components: {
    MapPop,
  },
  created() {},
  mounted() {
    this.setDeafultStyle();
    MapInt.domid = "mapid";
    MapInt.getInstance().fitBounds(
      L.latLngBounds(
        L.latLng(mapConfig.mapExtent.ymin, mapConfig.mapExtent.xmin),
        L.latLng(mapConfig.mapExtent.ymax, mapConfig.mapExtent.xmax)
      )
    );
    LayerUtils.addTileLayer(mapConfig.dtVector, 1);
    LayerUtils.addTileLayer(mapConfig.dtVectorL, 2);
    let loadLayer = new LoadLayer();
    let pxzqLayer = loadLayer.loadPointLayer();
    pxzqLayer.on("click", (evt) => {
      this.setPopInfo(evt);
    });
    loadLayer.addHeatMapLayer();
    let plableLayer = loadLayer.staticLayer();
    MapInt.getInstance().on("zoom", function(evt) {
      if (evt.sourceTarget._zoom > 7) {
        MapInt.removeLayerByid("sxtjid");
      } else {
        plableLayer = loadLayer.staticLayer();
      }
    });
  },
  methods: {
    setDeafultStyle() {
      let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: shades,
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    },
    createData(gross, radius) {
      var max = 0; //单点最大值
      var points = []; //点集合
      for (; gross > 0; gross--) {
        var val = Math.floor(Math.random() * 100);
        max = Math.max(max, val);
        var point = {
          lat: Math.random() * 2.5 + 34, //经度
          lng: Math.random() * 2.5 + 108, //纬度
          count: val, //数据量大小
          radius: radius,
        };
        points.push(point);
      }
      return { max: max, data: points };
    },
    setPopInfo(evt) {
      let popup = L.popup()
        .setLatLng(evt.latlng)
        .setContent("<div id='contentId'></div>")
        .openOn(MapInt.getInstance());
      new Vue.extend({ MapPop })().$mount("#contentId");
    },
  },
};
</script>

<style>
#mapid {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.myLable {
  background-color: #4c60f1;
  height: 40px !important;
  width: 40px !important;
  line-height: 40px !important;
  text-align: center;
  border-radius: 20px;
  color: white;
}
</style>
