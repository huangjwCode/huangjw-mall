<template>
  <div class="nav-bar">
    <div class="left">
			<div class="btn" @click="navTo('/pages/notice/notice')">
				<span class="mix-icon icon-xiaoxi"></span>
				<div class="msg"></div>
			</div>
    </div>
    <div class="center">
       <div class="search-wrap" @click="navTo('/search',{})">
        <span class="mix-icon icon-sousuo"></span>
        <span>输入关键字搜索</span>
       </div>
    </div>
    <div class="right">
			<!-- #ifndef MP-WEIXIN -->
			<div class="btn" @click="scanCode">
				<span class="mix-icon icon-saoma"></span>
			</div>
			<!-- #endif -->
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
      navTo(path,query){
          this.$router.replace({path:path,query:query})
      },
			scanCode(){

			}
		}
	}
</script>

<style scoped>

  @import url("../../../assets/css/common.css");
  @import url("../../../assets/css/icon.css");

	/*.content{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 95;
		width: 100%;
		background-color: #fff;
	}*/

   .nav-bar{
     display: flex;
     height: 2.75rem;
     line-height: 2.75rem;
     text-align: center;
     background-color: #FFF;
     box-shadow: 0 1px 1px rgb(100,100,100,0.1);
   }



   .left,.right{
     width: 3.75rem;
   }

   .center{
     flex: 1;
   }

	.btn{
		width: 60px;
		height: 40px;
		position: relative;
	}
  .btn .mix-icon{
  	font-size: 22px;
  	color: #333;
  }
  .btn .msg{
  	position: absolute;
  	right: 7px;
  	top: 5px;
  	width: 12px;
  	height: 12px;
  	background-color: $base-color;
  	border: 2px solid #fff;
  	border-radius: 100px;
  	opacity: 0;
  }
  .btn .msg .show{
  	opacity: 1;
  }
	.search-wrap{
		flex: 1;
    text-align: left;
    height: 32px;
    line-height: 32px;
		font-size: 14px;
		color: #999;
		border-radius: 100px;
		background-color: #f2f2f2;
	}

  .search-wrap .icon-sousuo{
  	margin-right: 6px;
  	font-size: 18px;
  	color: #999;
  }
</style>
