<template>
  <div id="app">
    <Nav/>
    <Map/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './views/Nav'
import Map from './views/mapviews/ViewContent'

export default {
  components: {
    Nav,
    Map
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
