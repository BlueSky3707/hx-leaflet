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
import HeatmapOverlay from "../../../node_modules/heatmap.js/plugins/leaflet-heatmap";
import icon from "../../../node_modules/leaflet/src/images/marker.min.svg";
import shades from "../../../node_modules/leaflet/src/images/shadow.svg";
export default {
  created() {},
  mounted() {
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: shades,
    });
    L.Marker.prototype.options.icon = DefaultIcon;

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
    loadLayer.loadPointLayer();
    var heatmap_cfg = {
      radius: "radius", //设置每一个热力点的半径
      maxOpacity: 0.5, //设置最大的不透明度
      minOpacity: 0.3, //设置最小的不透明度
      scaleRadius: true, //设置热力点是否平滑过渡
      blur: 0.95, //系数越高，渐变越平滑，默认是0.85,
      //滤镜系数将应用于所有热点数据。
      useLocalExtrema: true, //使用局部极值
      latField: "lat", //纬度
      lngField: "lng", //经度
      valueField: "value", //热力点的值
      gradient: {
        "0.99": "rgba(255,0,0,1)",
        "0.9": "rgba(255,255,0,1)",
        "0.8": "rgba(0,255,0,1)",
        "0.5": "rgba(0,255,255,1)",
        "0": "rgba(0,0,255,1)",
      },
    };

    var heatmap_layer = new HeatmapOverlay(heatmap_cfg);
    console.log(heatmap_layer);
  },
  methods: {
    setDeafultStyle() {},
    createData(gross, radius) {
      var max = 0; //单点最大值
      var points = []; //点集合
      for (; gross > 0; gross--) {
        var val = Math.floor(Math.random() * 100);
        max = Math.max(max, val);
        var point = {
          lat: Math.random() * 2.5 + 39, //经度
          lng: Math.random() * 2.5 + 115, //纬度
          count: val, //数据量大小
          radius: radius,
        };
        points.push(point);
      }
      return { max: max, data: points };
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
</style>
