<template>
  <div id="content">
    <Map></Map>
    <MapTool></MapTool>
    <LayerSwitch></LayerSwitch>
  </div>
</template>
<script>
import Map from "../mapviews/Map.vue";
import MapTool from "../mapviews/MapTool";
import LayerSwitch from "../mapviews/LayerSwitch";
export default {
  components: {
    Map,
    MapTool,
    LayerSwitch,
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
