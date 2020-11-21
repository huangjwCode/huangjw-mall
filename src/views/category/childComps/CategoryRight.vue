<template>
  <div id="category_right">
    <div class="right-entry-tab">
      <tab-control
        :titles="['综合', '销量', '新品']"
        @tabEvent="tabClick"
        v-show="topCheck"
        class="top_tab_control"
        ref="tabControl2"
      />
    </div>

    <scroller
       class="wrapper"
       ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrollEvent="contentScroll"
      @pullingUpEvent="loadMore">
      <div class="right-entry-content">
        <div class="tab_item" v-for="(item, index) in list_item" :key="index">
          <a :href="item.link">
            <img v-lazy="item.image" @load="imgLoad"/>
            <p class="item_text">{{ item.title }}</p>
          </a>
        </div>

        <tab-control
          :titles="['综合', '销量', '新品']"
          @tabEvent="tabClick"
          ref="tabControl1"
        />

        <goods-list :sun_goods="goods[this.currentType].list" />
      </div>
    </scroller>
  </div>
</template>
<script>
import scroller from "components/common/scroller/Scroller.vue";
import TabControl from "components/contents/tabControl/TabControl.vue"
import GoodsList from "components/contents/good/GoodsList";

 import { itemListenerMinxin, backTopMinxin } from "common/mixin.js";

export default {
  props: {
    list_item: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      count: 0,
      goods:{
        pop:{page:0, list:[]},
        new:{page:0, list:[]},
        sell:{page:0, list:[]}
      },
      currentType:'pop',
      tabControloffsetTop: 0,
      topCheck: false
    };
  },
  mounted() {},
  mixins: [itemListenerMinxin, backTopMinxin],
  created() {
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  activated() {
    //事件总线
    this.$bus.$on("goodsImgLoadEvent", this.bcFunc);
  },
  deactivated() {
    // 通过给 $off第二参数传递一个函数，可以让其只销毁home里的事件，而不会销毁detail里的事件
    this.$bus.$off("goodsImgLoadEvent", this.bcFunc);
    console.log("销毁Home的bus");
  },
  methods: {
    imgLoad() {
      this.count++;
      if (this.count >= this.list_item.length) {
        //this.$refs.scroll.refresh();
        //等到 swiper的图片加载好之后
        this.tabControloffsetTop = this.$refs.tabControl1.$el.offsetTop;
        this.count = 0;
      }
    },
    getGoods(type){
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
         this.getGoods(this.currentType);
       }

       console.log("上拉了");
       setTimeout(() => {
         this.$refs.scroll.finishPullUp();
       }, 2000);
     },
     contentScroll(pos) {
       //滚动条实时监听
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
       }
  },
  components: {
    scroller,
    TabControl,
    GoodsList
  }
};
</script>
<style scoped>
#category_right {
  height: 100vh;
  position: relative;
}
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 3.0625rem;
}

.right-entry-tab{
  width: 100%;
  padding: 0 1.2rem 0 1.2rem;
}

.right-entry-content{
  width: 100%;
  padding: 1.3rem 1.2rem 0 1.2rem;
}

.tab_item {
  display: inline-block;
  width: 4.5rem;
  margin: 0.3rem 0.25rem;
}
.tab_item a {
  display: block;
}
.tab_item img {
  width: 100%;
}
.item_text {
  margin-top: 0.3rem;
  text-align: center;
}
.top_tab_control {
  position: relative;
  top:0;
  z-index: 8;
}
</style>
