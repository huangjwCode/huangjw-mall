<template>
  <div id="cart">
    <nav-bar class="cart_nav_bar">
      <template v-slot:center>
        <div>购物车({{ cartLength }})</div>
      </template>
    </nav-bar>
    <scroller ref="scroll" class="cartwrapper">
      <cart-list></cart-list>
    </scroller>
    <div class="carttotal"><cart-total ></cart-total></div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroller from "components/common/scroller/Scroller.vue";

import CartList from "./childComps/CartList.vue";
import CartTotal from "./childComps/CartTotal.vue";

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
    NavBar,
    CartList,
    CartTotal,
    Scroller
  },
  methods: {

  }
};
</script>
<style scoped>
#cart{
  height: 100vh;
  position: relative;
}
.cartwrapper{
  position: absolute;
  left: 0;
  right: 0;
  top: 2.75rem;
  bottom: 2.09rem;
  overflow: hidden;
}
.carttotal{
  position: relative;
  top: 33.9375rem;
  z-index: 9;
}
.cart_nav_bar {
  background-color: var(--color-tint);
  color: white;
}
</style>
