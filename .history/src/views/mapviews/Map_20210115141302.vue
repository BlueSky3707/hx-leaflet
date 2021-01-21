<template>
  <div id="mapid"></div>
</template>
<script lang="ts">
import L from "leaflet";
import mapConfig from "../../components/maps/mapConfig";
import MapInt from "../../components/maps/MapInt";
import LayerUtils from "../../components/maps/LayerUtils";
export default {
  data() {
    return {
      maps: "",
    };
  },
  created() {},
  mounted() {
    MapInt.domid = "mapid";
    this.maps = MapInt.getInstance();
    LayerUtils.addTileLayer(mapConfig.dtVector, 1);
    LayerUtils.addTileLayer(mapConfig.dtVectorL, 2);
  },
  methods: {},
};
</script>

<style></style>
