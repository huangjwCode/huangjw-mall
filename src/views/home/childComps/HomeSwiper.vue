<template>
  <swiper class="home-swiper">
      <template>
        <swiper-item
          v-for="(item, index) in sun_banners"
          :key="index"
          @slideEven="slideLoadOn"
          :count="sun_banners.length"
        >
          <template>
            <a :href="item.link"
              ><img :src="item.image" alt="" @load="SwiperImgLoad"
            /></a>
          </template>
        </swiper-item>
      </template>    
  </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper';
    export default {
        name: "HomeSwiper",
        data() {
          return { loadCheck: false };
        },
        props: {
          sun_banners: Array
        },
        mounted() {},
        methods: {
          /**
           * 加载函数
           */
          SwiperImgLoad() {
            if (!this.loadCheck) {
              this.$emit("SwiperImgLoadEvent");
              this.loadCheck = true;
            }
          },
          slideLoadOn() {
            this.$refs.swiper.slideOn();
          }
        },
        components:{
            Swiper,SwiperItem
        }
    }
</script>

<style scoped>


</style>
