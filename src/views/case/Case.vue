<template>
  <div>
    <case-header></case-header>
    <case-title></case-title>
    <case-swiper></case-swiper>
    <case-address></case-address>
    <case-footer></case-footer>
  </div>
</template>

<script>
import CaseHeader from "@/views/home/Header.vue";
import CaseTitle from "@/views/case/Title.vue";
import CaseSwiper from "@/views/case/CaseSwiper.vue";
import CaseAddress  from "@/views/company/Address.vue";
import CaseFooter from "@/views/home/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    CaseHeader,
    CaseTitle,
    CaseSwiper,
    CaseAddress,
    CaseFooter
  }
};
</script>

<style scoped lang="stylus"></style>
