<template>
  <div id="mapid"></div>
</template>
<script lang="ts">
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
export default {
  data() {
    return {
      maps: "",
    };
  },
  created() {},
  mounted() {
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
  },
  methods: {},
};
</script>

<style>
#mapid {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
