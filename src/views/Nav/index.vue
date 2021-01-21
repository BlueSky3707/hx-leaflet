<template>
  <nav class="nav">
    <div class="item" v-for="(item,index) in navList" :key="item.name"
         :class="{active:navIndex == index}" @click="changeNav(item,index)">
      <img :src="navIndex == index ? item.activeIcon : item.icon">
      <div>{{ item.name }}</div>
      <div class="shutiao" v-if="navIndex == index"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navIndex: 0,
      navList: [
        {name: '综合事件查询', router: '/', icon: require('@/assets/nav/a1.png'), activeIcon: require('@/assets/nav/b1.png')},
        {
          name: '趋势化分析',
          router: '/QSFX',
          icon: require('@/assets/nav/a2.png'),
          activeIcon: require('@/assets/nav/b2.png')
        },
        {
          name: '污染源分布',
          router: '/WRFB',
          icon: require('@/assets/nav/a3.png'),
          activeIcon: require('@/assets/nav/b3.png')
        },
      ]
    }
  },
  methods: {
    // 改变菜单导航
    changeNav(item, index) {
      this.navIndex = index
      this.$router.push(item.router)
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 1020px;
  background: #FFFFFF;
  box-shadow: 2px 3px 5px 0px rgba(138, 138, 138, 0.2);
  z-index: 9999999999;

  .active {
    background: rgba(41, 138, 248, .1);
    color: #298AF8;
  }

  .item {
    padding-left: 40px;
    height: 48px;
    display: flex;
    font-size: 14px;
    align-items: center;
    cursor: pointer;

    img {
      padding-right: 10px;
    }

    .shutiao {
      position: absolute;
      right: 0;
      width: 3px;
      height: 48px;
      background: #298AF8;
    }
  }
}
</style>
