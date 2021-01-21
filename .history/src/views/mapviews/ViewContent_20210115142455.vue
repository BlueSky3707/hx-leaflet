<template>
  <div id="content">
    <Map></Map>
    <MapTool></MapTool>
  </div>
</template>

<script>
import Map from "../mapviews/Map.vue";
import MapTool from "../mapviews/MapTool";
export default {
  components: {
    Map,
    MapTool,
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
