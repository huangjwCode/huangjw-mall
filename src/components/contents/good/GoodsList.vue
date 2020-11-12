<template>
  <div class="goods">
    <good-list-item
      v-for="(item, index) in sun_goods"
      :goodsItem="item"
      :key="index"
    ></good-list-item>
  </div>
</template>
<script>
import GoodListItem from "./GoodListItem.vue";
export default {
  components: {
    GoodListItem
  },
  props: {
    sun_goods: Array
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
</style>
