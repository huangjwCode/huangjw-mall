<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="$route.path.indexOf('detail') == -1"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/contents/maintabbar/MainTabBar.vue'

export default {
  name: 'app',
  components:{
      MainTabBar
  }
}
</script>

<style>
	@import url("assets/css/base.css");
</style>
