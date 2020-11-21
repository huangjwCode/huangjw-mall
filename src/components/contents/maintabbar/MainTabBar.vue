<template>
  <div>
	  <TabBar>
		  <TabBarItem path="/home" activeColor="#d4237a">
			  <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt=""/>
			  <img slot="item-icon-active" src="~assets/img/tabbar/homeactive.svg" alt=""/>
			  <div slot="item-text">首页</div>
		  </TabBarItem>
		  <TabBarItem path="/category" activeColor="#d4237a">
			  <img slot="item-icon" src="~assets/img/tabbar/all.svg" alt=""/>
			  <img slot="item-icon-active" src="~assets/img/tabbar/allactive.svg" alt=""/>
			  <div slot="item-text">分类</div>
		  </TabBarItem>
		  <TabBarItem path="/cart" activeColor="#d4237a">
			  <img slot="item-icon" src="~assets/img/tabbar/cartfull.svg" alt=""/>
			  <img slot="item-icon-active" src="~assets/img/tabbar/cartfullactive.svg" alt=""/>
			  <div slot="item-text">购物车</div>
		  </TabBarItem>
		  <TabBarItem path="/user" activeColor="#d4237a">
			  <img slot="item-icon" src="~assets/img/tabbar/account.svg" alt=""/>
			  <img slot="item-icon-active" src="~assets/img/tabbar/accountactive.svg" alt=""/>
			  <div slot="item-text">我的</div>
		  </TabBarItem>
	  </TabBar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

	export default {
		name:'MainTabBar',
    components:{
    	  TabBar,
    	  TabBarItem
    }
	}
</script>

<style>
</style>
