<template>
	<div id="home">
		<nav-bar class="home-nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '潮流']"
      @tabEvent="tabClick"
      v-show="topCheck"
      class="top_tab_control"
      ref="tabControl2"
    />
    <scroller class="wrapper"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrollEvent="contentScroll"
      @pullingUpEvent="loadMore">
      <template>
        <home-swiper
          :sun_banners="banners"
          @SwiperImgLoadEvent="SwiperImgLoad"
        />
        <home-recommend :sun_recommends="recommends"/>
        <home-feature-view/>
        <tab-control
          :titles="['流行', '新款', '潮流']"
          @tabEvent="tabClick"
          ref="tabControl1"
        />
        <goods-list :sun_goods="goods[this.currentType].list" />
      </template>


      <!--<tab-control class="home-tab-control" :ctitles="['流行', '新款', '精选']" @tabClick="pTabClick"/>-->

    </scroller>

    <transition name="back-top">
      <back-top v-show="isShowBackTop" @click.native="backTopClick" />
    </transition>
	</div>
</template>

<script>

  import { getHomeMultiData, getHomeGoods } from "network/home.js";

  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroller from "components/common/scroller/Scroller.vue";
  import TabControl from 'components/contents/tabControl/TabControl.vue'
  import GoodsList from "components/contents/good/GoodsList";
  import BackTop from "components/contents/backTop/BackTop.vue";

  import HomeSwiper from "./childComps/HomeSwiper"
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeatureView from "./childComps/HomeFeatureView";

  import { itemListenerMinxin, backTopMinxin } from "common/mixin.js";





	export default {
		name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeatureView,
      TabControl,
      GoodsList,
      Scroller,
      BackTop
    },
    data(){
      return {
          banners: [],
          recommends: [],
          goods:{
            pop:{page:0, list:[]},
            new:{page:0, list:[]},
            sell:{page:0, list:[]}
          },
          currentType:'pop',
          isShowBackTop: false,
          tabControloffsetTop: 0,
          topCheck: false
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultiData();

      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },
    mounted() {
      //this.$bus.$on("goodsImgLoadEvent",() => {
        //this.$refs.scroll.refresh();
        //console.log(this.$refs.scroll.refresh)
        /**
        * 防抖函数 , 防抖函数只执行一次，后面执行的都是其返回的函数
        */
        //const refresh = deBounce(this.$refs.scroll.refresh, 50);
        //refresh();
      //});
    },
    mixins: [itemListenerMinxin, backTopMinxin],
    activated() {
      //事件总线
      this.$bus.$on("goodsImgLoadEvent", this.bcFunc);
    },
    deactivated() {
      // 通过给 $off第二参数传递一个函数，可以让其只销毁home里的事件，而不会销毁detail里的事件
      this.$bus.$off("goodsImgLoadEvent", this.bcFunc);
      console.log("销毁Home的bus");
    },
    methods:{
      /**
       * 网络相关
       */
      //获取多种数据
      async getHomeMultiData() {
        let res = await getHomeMultiData();
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      },

      //获取商品数据
      getHomeGoods(type) {
        //let res = await getHomeMultiData();

        new Promise(
          function (resolve, reject) {
            setTimeout(function(){
              resolve('成功') // 数据处理完成
            },300);
          }
        ).then(
          (res) => {
            let list = [{
              'iid':'111',
              'title':'intercrew2020秋季破洞刺绣弹力9分乞丐裤潮牛仔裤',
              cfav:'2.5',
              price:'159.00',
              image:'https://s11.mogucdn.com/mlcdn/776a41/201102_43a25i6kf72dli7df21e9c4a55il7_750x1125.png'
            },{
              'iid':'112',
              'title':'仿水貂毛套头针织毛衣潮长袖打底衫2018秋装韩版新款女装时尚百搭显瘦上衣',
              cfav:'2.5',
              price:'159.00',
              image:'https://s11.mogucdn.com/mlcdn/c45406/180920_1jh1lj62l85j29akiijhaaaidgefe_796x1194.jpg'
            },{
              'iid':'113',
              'title':'intercrew2020秋韩版简约修身七分袖打底衫针织衫女',
              cfav:'2.5',
              price:'159.00',
              image:'https://s11.mogucdn.com/mlcdn/776a41/201102_71fkfgl6ag265j9ifbk147ji9f92i_750x1125.png'
            },{
              'iid':'114',
              'title':'v领针织毛衣女',
              cfav:'2.5',
              price:'159.00',
              image:'https://s5.mogucdn.com/mlcdn/c45406/180925_1b2dk00b5f875i838998k4jdle49b_1080x1080.jpg'
            },{
              'iid':'115',
              'title':'2018秋季新款韩版中长款V领针织吊带黑色背心连衣裙chic女装A字打底裙',
              cfav:'2.5',
              price:'159.00',
              image:'https://s5.mogucdn.com/mlcdn/c45406/180923_64e36f2bi669hjged9e7ae8066df9_640x960.jpg'
            },{
              'iid':'116',
              'title':'intercrew2020秋季长袖时尚百搭纯色立领长袖衬衫女',
              cfav:'2.5',
              price:'159.00',
              image:'https://s5.mogucdn.com/mlcdn/c45406/180922_61611jf30ak2la355lldi2le5kb8i_640x960.jpg'
            },{
              'iid':'117',
              'title':'针织毛衣女海马毛亮丝',
              cfav:'2.5',
              price:'159.00',
              image:'https://s5.mogucdn.com/mlcdn/c45406/180925_0k4kflece1lg5jgj3h5c767e09a39_1080x1080.jpg'
            },{
              'iid':'118',
              'title':'intercrew2020秋季新款韩版宽松加绒纯棉连帽卫衣女',
              cfav:'2.5',
              price:'159.00',
              image:'https://s11.mogucdn.com/mlcdn/776a41/201102_8be74g9377l5ci21gaa37la4abbk6_750x1125.png'
            },{
              'iid':'119',
              'title':'夏薄款空调针织开衫新款chic宽松慵懒风小披肩外搭女上衣防晒衣中长款外套气质杏色开衫女上衣',
              cfav:'2.5',
              price:'159.00',
              image:'https://s11.mogucdn.com/mlcdn/c45406/180402_12egdk329dj7k3301ch140c223kdg_640x960.jpg'
            },{
              'iid':'120',
              'title':'2019秋冬新款百搭打底衫白色衬衫女加绒韩版宽松灯笼长袖上衣',
              cfav:'2.5',
              price:'159.00',
              image:'https://s5.mogucdn.com/mlcdn/55cf19/171116_419jj3he8cibljf2h20k34a53g7g0_640x960.jpg'
            },{
              'iid':'121',
              'title':'针织衫外套女学院风宽松V领长袖百搭短款开衫学生时尚显瘦早秋女',
              cfav:'2.5',
              price:'159.00',
              image:'https://s5.mogucdn.com/mlcdn/c45406/180805_62khe7e58lg79g87hdi3hgb6alk6j_640x854.jpg'
            },{
              'iid':'122',
              'title':'白色卫衣女加绒慵懒风2018新款宽松韩版学生百搭圆领套头春秋长袖卫衣',
              cfav:'2.5',
              price:'159.00',
              image:'https://s5.mogucdn.com/mlcdn/c45406/180902_41lj916lalh9jal6dkdbe9agl7424_640x960.jpg'
            }];

            type == 'new' && list.reverse()

            let page = this.goods[type].page + 1;
            this.goods[type].list.push(...list);
            this.goods[type].page += 1;

          }  // 成功
        )

        //let page = this.goods[type].page + 1;
        //let res = await getHomeGoods(type, page);
        //接续list, 3种方法，其中 ...res.list会把 其内的每个元素依次push进this.goods[type].list里
        //[].push.apply(this.goods[type].list, res.list);  //无法做到响应式
        //this.goods[type].list.push(...res.list);
        //this.goods[type].list = this.goods[type].list.concat(res.list);
        //this.goods[type].page += 1;
      },
      backTopClick() {
          // 通过$refs拿到组件中的对象
          this.$refs.scroll.scrollTo(0, 0, 500)
      },
     /**
       * 该组件的事件
       */
      loadMore() {
        //下拉加载更多goods，但是会有bug，该bug由于DOM高度问题
        //图片的DOM高度是异步加载的，所以没那么快能加载出来，会导致scroll的高度跟不上
        //如何解决？
        //让img每次加载完之后，就refresh()一次滚动条
        if (this.goods[this.currentType].page < 2) {
          this.getHomeGoods(this.currentType);
        }

        console.log("上拉了");
        setTimeout(() => {
          this.$refs.scroll.finishPullUp();
        }, 2000);
      },
      contentScroll(pos) {
        //滚动条实时监听
        this.isShowBackTop = -pos.y > 500;
        this.topCheck = -pos.y > this.tabControloffsetTop;
      },
       /**
         * 发射事件相关
         */
        tabClick(index) {
          this.currentType = ["pop", "new", "sell"][index];
          //同步2个tabControl的点击 变红
          this.$refs.tabControl1.currIndex = index;
          this.$refs.tabControl2.currIndex = index;
        },
        SwiperImgLoad() {
          //等到 swiper的图片加载好之后
          this.tabControloffsetTop = this.$refs.tabControl1.$el.offsetTop;
        }
    }
	}
</script>

<style scoped>
#home {
  /**
  * 有了BS之后，可以不需要这2个
  * padding-top: 44px;
  * padding-bottom: 49px;
  * 下方BS的.wrapper样式里就有 top44 bottom49
  */
  /* 一定要有home的高度，否则其子对象wrapper无法正确显示 */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /**
  * 原生滚动时，需要这个，有了BS，就不用下面的了
  *position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%; */
}

/**
  * 由于用了better-scroll已经失效
  * .home_tab_control {
  *   position: sticky;
  *   top: 44px;
  *   z-index: 9;
  * }
  */
.top_tab_control {
  position: relative;
  top:-0.0625rem;
  z-index: 9;
}
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 2.75rem;
  bottom: 2.09rem;
  overflow: hidden;
}

/**
* 给回到顶部按钮做了一个过渡效果
*/
.back-top-enter,
.back-top-leave-to {
  transform: translateX(1rem);
  opacity: 0;
}
.back-top-enter-active {
  transition: all 1s;
}
.back-top-leave-active {
  transition: all 1s;
}
</style>
