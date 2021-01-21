<template>
  <div id="content">
    <Map></Map>
  </div>
</template>

<script>
import Map from "../mapviews/Map.vue";
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
