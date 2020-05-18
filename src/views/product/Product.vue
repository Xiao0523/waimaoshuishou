<template>
  <div>
    <product-header></product-header>
    <product-banner></product-banner>
    <product-competitive></product-competitive>
    <product-optimization></product-optimization>
    <product-our-services></product-our-services>
  </div>
</template>

<script>
import ProductHeader from "@/views/home/Header.vue";
import ProductBanner from "@/views/product/Banner.vue";
import ProductCompetitive from "@/views/product/Competitive.vue";
import ProductOptimization from "@/views/product/Optimization.vue";
import ProductOurServices from "@/views/product/OurServices.vue";
export default {
  data() {
    return {};
  },
  components: {
    ProductHeader,
    ProductBanner,
    ProductCompetitive,
    ProductOptimization,
    ProductOurServices
  }
};
</script>

<style scoped lang="stylus"></style>
