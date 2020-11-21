<template>
  <div id="category">
    <div class="category">
      <nav-bar class="category_nav"><template #center>分类</template></nav-bar>
    </div>
    <div class="main">
      <div class="categoryleft">
        <category-left ref="left"></category-left>
      </div>
      <div class="categoryright">
        <category-right ref="right" :list_item="rightList"></category-right>
      </div>
    </div>
  </div>
</template>
<script>
import { getCategoryInfo } from "network/category.js";

import CategoryLeft from "./childComps/CategoryLeft.vue";
import CategoryRight from "./childComps/CategoryRight.vue";

import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      rightList: null
    };
  },
  created() {},
  mounted() {
    // console.log(this.$refs.left);
    // console.log(this.$refs.left.$el.style);
  },
  components: {
    NavBar,
    CategoryLeft,
    CategoryRight
  },
  methods: {
    async getCategoryInfo(maitKey) {
      let res = await getCategoryInfo(maitKey);
      /*if (res) {
        this.rightList = res.list;
      }*/
      this.rightList = [
          {
          title:'裙子套装',
          link:'https://m.mogu.com/x6/wall/book/shopping?fcid=52495&title=%E7%BE%8E%E8%A3%99%E5%A5%97%E8%A3%85&acm=3.mce.1_10_1og0a.3627.0.4bW3JsgoeIHiY.pos_870-m_570217-sd_119',
          image:'https://s11.mogucdn.com/mlcdn/c45406/181220_8dbei1a33jj57e6le9lk7ce28ggg7_120x120.jpg_999x999.v1c0.81.webp'
          },
          {
          title:'短袖',
          link:'https://m.mogu.com/wall/book/shopping?fcid=20004455&title=%E6%B5%81%E8%A1%8CT%E6%81%A4&acm=3.mce.1_10_1og0c.3627.0.4bW3JsgoeIHiZ.pos_871-m_570218-sd_119',
          image:'https://s17.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg_999x999.v1c0.81.webp'
          },
          {
          title:'连衣裙',
          link:'https://m.mogu.com/wall/book/shopping?fcid=20004471&title=%E8%BF%9E%E8%A1%A3%E8%A3%99&acm=3.mce.1_10_1og0e.3627.0.4bW3JsgoeIHi0.pos_872-m_570219-sd_119',
          image:'https://s18.mogucdn.com/mlcdn/c45406/190611_80i70h1212l87e7d0dhf29kl9cb4b_130x130.png_999x999.v1c0.81.webp'
          },
          {
          title:'短裤',
          link:'https://m.mogu.com/wall/book/shopping?fcid=20004475&title=%E7%9F%AD%E8%A3%A4&acm=3.mce.1_10_1og0o.3627.0.4bW3JsgoeIHi5.pos_877-m_570224-sd_119',
          image:'https://s2.mogucdn.com/mlcdn/c45406/190611_7b6785hk6bfi8lf1g43k8093i43l1_130x130.png_999x999.v1c0.81.webp'
          }
       ];
    }
  }
};
</script>
<style scoped>
 #category{
   height: 100vh;
   position: relative;
 }
 .category{
   position: fixed;
   width: 100%;
   top: 0;
   z-index: 9;
 }
.category_nav {
  background-color: var(--color-tint);
  color: white;
}
.main {
  position: absolute;
  left: 0;
  right: 0;
  top: 2.75rem;
  bottom: 3.0625rem;
  display: flex;
  font-size: 0.875rem;
}
.categoryleft{
  width: 25%;
}
.categoryright{
  flex: 1;
}
</style>
