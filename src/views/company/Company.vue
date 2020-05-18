<template>
  <div>
    <company-header></company-header>
    <company-introduce></company-introduce>
    <company-address></company-address>
    <company-footer></company-footer>
  </div>
</template>

<script>
import CompanyHeader  from "@/views/home/Header.vue";
import CompanyIntroduce  from "@/views/company/Introduce.vue";
import CompanyAddress  from "@/views/company/Address.vue";
import CompanyFooter from "@/views/home/Footer.vue";

export default {
  components: {
    CompanyHeader,
    CompanyIntroduce,
    CompanyAddress,
    CompanyFooter
  }
};
</script>

<style scoped lang="stylus">

</style>
