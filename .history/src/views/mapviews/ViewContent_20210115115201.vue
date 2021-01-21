<template>
  <div id="content">
    <Map></Map>
    <MapTool></MapTool>
    <LayerSwitch></LayerSwitch>
  </div>
</template>

<script>
import Map from "../../view/mapcomponent/Map";
import MapTool from "../../view/mapcomponent/MapTool";
import LayerSwitch from "../../view/mapcomponent/LayerSwitch";
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
