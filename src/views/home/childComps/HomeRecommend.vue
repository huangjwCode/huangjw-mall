<template>
  <div class="recommend">
    <div
      class="recommend_item"
      v-for="(item, index) in sun_recommends"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad"/>
      </a>
      <div>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
          sun_recommends: Array
        },
        methods: {
          imgLoad() {
            //可以在home页面中，单独$off掉home的那个事件。
            this.$bus.$emit("goodsImgLoadEvent");
          }
        }
    }
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  /* background-color: rgba(255, 192, 203, 0.384); */
}

.recommend_item {
  flex: 1;
  text-align: center;
  padding-top: 0.42rem;
  padding-bottom: 0.84rem;
  border-bottom: 0.42rem solid #eee;
  font-size: 0.7rem;
}
.recommend_item img {
  width: 3.37rem;
  height: 3.37rem;
  border-radius: 50%;
  margin-bottom: 0.42rem;
}
</style>
