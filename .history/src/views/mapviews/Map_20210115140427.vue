<template>
  <div id="mapid"></div>
</template>
<script lang="ts">
import L from "leaflet";
import mapConfig from "../../components/maps/mapConfig";
import MapInt from "../../components/maps/MapInt";
export default {
  created() {},
  mounted() {
    MapInt.domid = "mapid";
    this.maps = MapInt.getInstance().fitBounds(
      L.latLngBounds(
        L.latLng(mapConfig.mapExtent.ymin, mapConfig.mapExtent.xmin),
        L.latLng(mapConfig.mapExtent.ymax, mapConfig.mapExtent.xmax)
      )
    );
    LayerUtils.addTileLayer(mapConfig.dtVector, 1);
    LayerUtils.addTileLayer(mapConfig.dtVectorL, 2);
  },
  methods: {},
};
</script>

<style></style>
