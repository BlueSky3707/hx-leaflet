<template>
  <div id="content">
    <Map></Map>
  </div>
</template>

<script>
import Map from "../mapviews/Map.vue";
import Vue from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "proj4leaflet";
import "proj4";
export default {
  components: {
    Map,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>

<style>
#content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
