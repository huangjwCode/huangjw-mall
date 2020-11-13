<template>
  <div id="detail">
    <detail-nav-bar ref="navBarRef" @itemClickEvent="changeScrollOffset" />
    <scroller
      class="detail_wrapper"
      ref="scroll"
      :probe-type="3"
      @scrollEvent="scrollOn"
    >
      <detail-swiper :topImgs="topImages" ref="swiperRef" />
      <detail-goods :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @loadImgEvent="loadImgOk" />
      <detail-params :paramInfo="paramInfo" ref="paramsRef" />
      <detail-comment :comment="comment" ref="commentRef" />
      <goods-list :sun_goods="recommend" ref="recommendRef"></goods-list>
    </scroller>
    <transition name="back-top">
      <back-top v-show="isShowTop" @click.native="backClick" />
    </transition>
    <detail-bottom-bar @addEvent="addToCart" />
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailGoods from "./childComps/DetailGoods.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailComment from "./childComps/DetailComment.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getDetailRecommend
} from "network/detail.js";

import Scroller from "components/common/scroller/Scroller.vue";
import Toast from "components/common/toast/Toast.vue";
import GoodsList from "components/contents/good/GoodsList.vue";

import { deBounce } from "common/utils.js";
import { itemListenerMinxin, backTopMinxin } from "common/mixin.js";

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoods,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    DetailBottomBar,

    Scroller,
    Toast,
    GoodsList
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comment: {},
      recommend: [],
      theme: ["swiperRef", "paramsRef", "commentRef", "recommendRef"],
      themePosY: [0],
      bcFuncTheme: null,
      detailIndex: 0
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    //详情数据
    this.getDetail(this.iid);

    //推荐数据
    this.getDetailRecommend();
  },
  mixins: [itemListenerMinxin, backTopMinxin],
  mounted() {
    this.$bus.$on("goodsImgLoadEvent", this.bcFunc);

    //给跳转做防抖
    this.bcFuncTheme = deBounce(() => {
      this.themePosY = [0];
      this.themePosY.push(this.$refs.paramsRef.$el.offsetTop);
      this.themePosY.push(this.$refs.commentRef.$el.offsetTop);
      this.themePosY.push(this.$refs.recommendRef.$el.offsetTop);
      this.themePosY.push(Infinity);
      console.log("处理了一次", this.themePosY);
    }, 100);
  },
  beforeDestroy() {
    this.$bus.$off("goodsImgLoadEvent", this.bcFunc);
    console.log("销毁Detail的bus");
  },
  methods: {
    /**
     * 获取网络数据
     */
    async getDetail(iid) {
      let res = await getDetail(iid);
      if (res) {
        const result = res.result;
        //this.topImages = result.itemInfo.topImages;
        this.topImages = [
          'https://s11.mogucdn.com/mlcdn/c45406/200317_5922g1ald8ekfl00a4gal52f3adic_640x960.jpg_640x960.v1cAC.70.webp',
          'https://s5.mogucdn.com/mlcdn/c45406/200317_25282k1aedc3167e901jc0cl1jd79_640x960.jpg_640x960.v1cAC.70.webp',
          'https://s11.mogucdn.com/mlcdn/c45406/200317_2i6ck5kag473ik0gf62c7k4hh70he_640x960.jpg_640x960.v1cAC.70.webp'];

        //获取商品信息
        this.goods = new Goods(
          //result.itemInfo,
          //result.columns,
          //result.shopInfo.services
        );

        //获取店铺信息
        this.shop = new Shop(
          //result.shopInfo
        );

        //获取宝贝的详细信息
        this.detailInfo = {
          desc:'intercrew 新款一字领时尚简约纯色修身女款七分袖弹力针织衫女 ICS1DR32A',
          detailImage:[
            'https://s11.mogucdn.com/mlcdn/c45406/200317_5gf68885ik5e613jd029110jhij5h_790x1053.jpg_468x468.webp',
            'https://s5.mogucdn.com/mlcdn/c45406/200317_3bhlikc60e3l897e8lhl1fgkjjac0_790x1253.jpg_468x468.webp',
            'https://s5.mogucdn.com/mlcdn/c45406/200317_4d922jh3dede3ef6cleaif2hf1j21_790x690.jpg_468x468.webp',
            'https://s5.mogucdn.com/mlcdn/c45406/200317_8h2iah3c9465d79kh6i0jh607ke05_790x1043.jpg_468x468.webp ',
            'https://s5.mogucdn.com/mlcdn/c45406/200317_49dh2b7ccbedaggb6gk7e2ll8ajk3_790x972.jpg_468x468.webp',
            'https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp'
          ]
        };

        //获取商品的参数
        this.paramInfo = new GoodsParam(
          //result.itemParams.info,
          //result.itemParams.rule
        );

        //获取评论
        /*if (result.rate.cRate != 0) {
          this.comment = result.rate.list[0];
        }*/
        this.comment =
            {
              user:{avatar:'https://s11.mogucdn.com/p2/161124/33u8nk_5i344i40g45779dl4kc17d9dfgb03_200x200.jpg_120x120.webp',uname:'快快成长起来'},
              content:'这衣服很好，我很满意，下次还来买,这衣服很好，我很满意，下次还来买,这衣服很好，我很满意，下次还来买',
              created:'',
              style:'颜色 白色 （5886）尺码M',
              explain:'',
              images:[
                'https://s11.mogucdn.com/mlcdn/c45406/200317_5gf68885ik5e613jd029110jhij5h_790x1053.jpg_468x468.webp',
                'https://s5.mogucdn.com/mlcdn/c45406/200317_3bhlikc60e3l897e8lhl1fgkjjac0_790x1253.jpg_468x468.webp'
              ]
            };
      }
    },
    async getDetailRecommend() {
      let res = await getDetailRecommend();
      //this.recommend = res.data.recommend.list;
      this.recommend = [{
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
    },

    /**
     * 各类事件
     */

    addToCart() {
      //把信息发送到vuex里
      const obj = {
        iid: this.iid,
        desc: this.goods.desc,
        price: this.goods.lowNowPrice,
        title: this.goods.title,
        img: this.topImages[0]
      };
      this.$store
        .dispatch("ChangeCart", obj)
        .then(() => {
          this.$toast.show("加入购物车");
        })
        .catch(() => {
          this.$toast.show("购买数量+1");
        });
    },

    changeScrollOffset(index) {
      this.$refs.scroll.scrollToElement(this.$refs[this.theme[index]].$el, 200);
    },
    loadImgOk() {
      this.bcFunc();
      this.bcFuncTheme();
    },
    scrollOn(pos) {
      this.isShowTop = -pos.y > 1000;
      for (let i = 0; i < this.themePosY.length - 1; ++i) {
        if (
          this.detailIndex != i &&
          -pos.y >= this.themePosY[i] &&
          -pos.y < this.themePosY[i + 1]
        ) {
          //console.log(i);
          this.detailIndex = i;
          this.$refs.navBarRef.currIndex = i;
          break;
        }
      }
    }
  }
};
</script>
<style scoped>
#detail {
  /* 利用z-index覆盖 tabbar，不过这样不好，想换种方法 */
  position: relative;
  /* z-index: 10;
  background-color: #fff; */
  height: 100vh;
}
.detail_wrapper {
  position: absolute;
  top: 2.9rem;
  bottom: 2.09rem;
  left: 0;
  right: 0;
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
