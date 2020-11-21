<template>
  <div class="user">
    <div class="user_top">
      <img class="u-bg" src="~assets/img/static/bg/user.jpg"/>
			<div class="user-wrapper">
				<img class="avatar" src="~assets/img/static/icon/default-avatar.png"/>
				<div class="cen column">
					<span class="username f-m">huangjw</span>
					<span class="user-group">普通会员</span>
				</div>
				<!--<div class="login-box">
					<span>请登录</span>
				</div>-->
			</div>
			<img class="arc-line" src="~assets/img/static/icon/arc.png" />
    </div>

    <div class="money-wrap">
      <div class="item center" hover-class="hover-gray" :hover-stay-time="50" @click="navTo('/pages/wallet/index', {login: true})">
        <span class="num">8888888</span>
        <span>余额</span>
      </div>
      <div class="item center" hover-class="hover-gray" :hover-stay-time="50" @click="navTo('/pages/coupon/userCoupon', {login: true})">
        <span class="num">88</span>
        <span>优惠券</span>
      </div>
      <!--  hover-class="hover-gray" :hover-stay-time="50" -->
      <div class="item center">
        <span class="num">3000</span>
        <span>积分</span>
      </div>
    </div>

    <div class="order-wrap">
			<div class="o-header row">
				<span class="tit">我的订单</span>
				<span class="more">查看全部</span>
				<span class="mix-icon icon-you"></span>
			</div>

      <div class="o-list">
        <div class="item center"  hover-class="hover-gray" :hover-stay-time="50">
          <span class="mix-icon icon-daifukuan"></span>
          <span>待付款</span>
          <span class="number">26</span>
        </div>
        <div class="item center" hover-class="hover-gray" :hover-stay-time="50">
          <span class="mix-icon icon-daifahuo"></span>
          <span>待发货</span>
          <span class="number">8</span>
        </div>
        <div class="item center"  hover-class="hover-gray" :hover-stay-time="50">
          <span class="mix-icon icon-yishouhuo"></span>
          <span>待收货</span>
          <span class="number">8</span>
        </div>
        <div class="item center" hover-class="hover-gray" :hover-stay-time="50">
          <span class="mix-icon icon-daipingjia"></span>
          <span>待评价</span>
          <span class="number">8</span>
        </div>
      </div>
    </div>

		<div class="option-wrap">
			<div class="sec-header row">
				<span class="mix-icon icon-lishijilu"></span>
				<span class="fill">浏览历史</span>
				<span class="mix-icon icon-lajitong"></span>
			</div>
      <div class="h-scroll">
        <div class="pro-list row">
          <img src="https://s5.mogucdn.com/mlcdn/c45406/180923_64e36f2bi669hjged9e7ae8066df9_640x960.jpg_640x960.v1cAC.70.webp"/>
          <img src="https://s5.mogucdn.com/mlcdn/c45406/180923_64e36f2bi669hjged9e7ae8066df9_640x960.jpg_640x960.v1cAC.70.webp"/>
          <img src="https://s5.mogucdn.com/mlcdn/c45406/180923_64e36f2bi669hjged9e7ae8066df9_640x960.jpg_640x960.v1cAC.70.webp"/>
          <img src="https://s5.mogucdn.com/mlcdn/c45406/180923_64e36f2bi669hjged9e7ae8066df9_640x960.jpg_640x960.v1cAC.70.webp"/>
        </div>
      </div>

      <mix-list-cell icon="icon-iconfontweixin" iconColor="#fa436a" title="我的钱包" @onClick="navTo('/pages/wallet/index', {login: true})"></mix-list-cell>
      <mix-list-cell icon="icon-dizhi" iconColor="#5fcda2" title="地址管理" @onClick="navTo('/pages/address/list', {login: true})"></mix-list-cell>
      <mix-list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="我的收藏" @onClick="navTo('/pages/favorite/favorite', {login: true})"></mix-list-cell>
      <mix-list-cell icon="icon-pinglun-copy" iconColor="#ee883b" title="意见反馈" @onClick="navTo('/pages/feedback/feedback', {login: true})"></mix-list-cell>
      <mix-list-cell icon="icon-shezhi1" iconColor="#37b0fb" title="设置" border="" @onClick="navTo('/pages/set/set', {login: true})"></mix-list-cell>

      <!--<mix-modal ref="clearHistoryModal" text="确定要清空浏览记录吗" confirmText="清空" @onConfirm="clearHistory"></mix-modal>-->
    </div>
  </div>
</template>

<script>
import mixListCell from "components/common/mix-list-cell/mix-list-cell.vue";

export default {
  data() {
    return {};
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    }
  },
  components: {
    mixListCell
  },
  methods: {
			//清空浏览记录
			clearHistory(){

			}
  }
};
</script>

<style scoped>
  @import url("../../assets/css/common.css");
  @import url("../../assets/css/icon.css");

  .user{
    padding-bottom: 0.6875rem;
    background-color: #f7f7f7;
    height: 120vh;
  }

  .user_top{
		position: relative;
		overflow: hidden;
		padding-top: 0;
		padding-bottom: 0.25rem;
  }

  .u-bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 11.375rem;
  }

  .user-wrapper{
    display:flex;
    flex-direction: column;
    flex-direction: row;
    align-items: center;
    position: relative;
    z-index: 5;
    padding: 11px 16px 33px;
   }
  .login-box{
    font-size: 20px;
    color: #fff;
  }
  .avatar{
    flex-shrink: 0;
    width: 72px;
    height: 72px;
    border-radius: 100px;
    margin-right: 12px;
    border: 2px solid #fff;
    background-color: #fff;
  }
  .username{
    font-size: 17px;
    color: #fff;
  }

  .user-group{
    align-self: flex-start;
    padding: 5px 8px;
    margin-top: 8px;
    font-size: 10px;
    color: #fff;
    background-color: rgba(255,255,255,.3);
    border-radius:50px;
  }

  .arc-line{
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9;
    width: 100%;
    height: 16px;
  }

 	.money-wrap{
 		display:flex;
 		justify-content: space-around;
 		width: 21.875rem;
 		margin: 0.1875rem auto 0;
 		padding: 0.4375rem 0;
 		background: #fff;
 		border-radius: 0.3125rem;

 	}

  .money-wrap .item{
    flex-direction: column;
    width: 4.0625rem;
    height: 3.75rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    color: #606266;
  }
  .money-wrap .num{
    margin-bottom: 0.625rem;
    font-size: 1rem;
    color: #333;
    font-weight: 700;
  }

	.order-wrap{
		width: 21.875rem;
		margin: 10px auto 0;
		background: #fff;
		border-radius: 5px;
	}

  .order-wrap .o-header{
  	padding: 16px 10px 3px 13px;
  }

  .order-wrap .o-header .tit{
  	flex: 1;
  	font-size: 18px;
  	color: #333;
  	font-weight: 700;
  }
  .order-wrap .o-header .more{
  	font-size: 12px;
  	color: #999;
  }
  .order-wrap .o-header .icon-you{
  	margin-left: 2px;
  	font-size: 10px;
  	color: #999;
  }

  .order-wrap .o-list{
  	display:flex;
  	justify-content: space-around;
  	padding: 10px 0;
  }

  .order-wrap .item{
  	flex-direction: column;
  	width: 65px;
  	height: 65px;
  	border-radius: 4px;
  	font-size: 12px;
  	color: #606266;
  	position: relative;
  }

  .order-wrap .item .mix-icon{
  	font-size: 25px;
  	margin-bottom: 10px;
  	color: #fa436a;
  }
  .order-wrap .item .icon-shouhoutuikuan{
  	font-size: 22px;
  }

  .order-wrap .number{
  	position: absolute;
  	right: 11px;
  	top:3px;
  	min-width: 19px;
  	height: 19px;
  	line-height: 15px;
  	text-align: center;
  	padding: 0 4px;
  	font-size: 12px;
  	color: #fff;
  	border: 1px solid #fff;
  	background-color: #ff536f;
  	border-radius: 50px;
  }

	.option-wrap{
		width: 350px;
		margin: 10px auto 0;
		margin-top: 10px;
		background: #fff;
		border-radius:5px;
	}

   .option-wrap .sec-header{
      padding: 13px 7px 0 12px;
      font-size: 14px;
      color: #333;
   }

   .option-wrap .sec-header .icon-lishijilu{
   	font-size: 23px;
   	color: #50bf8b;
   	margin-right: 8px;
   	line-height: 20px;
   }
   .option-wrap .sec-header .icon-lajitong{
   	padding:2px 5px;
   	font-size: 18px;
   	color: #999;
   }
		.option-wrap .pro-list{
			flex-wrap: nowrap;
			padding: 10px 0 6px;
		}

    .option-wrap .pro-list:before, .option-wrap .pro-list:after{
      content: '';
      min-width: 15px;
      height: 15px;
    }
    .option-wrap .pro-list:after{
      min-width: 10px;
    }
    .option-wrap .pro-list img{
      flex-shrink: 0;
      width: 72px;
      height: 72px;
      margin-right: 8px;
      border-radius: 4px;
    }
</style>
