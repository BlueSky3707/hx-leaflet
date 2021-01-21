<template>
  <div class="qsfx">
    综合分析
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("进入综合分析");
  },
  destroyed() {
    console.log("离开综合分析");
  }
};
</script>

<style>
.qsfx{
  position: fixed;
  left: 220px;
  top: 100px;
  width: 100px;
  height: 100px;
  background: #4c60f1;
}
</style>
