<template>
  <div>
    <alibaba-head></alibaba-head>
    <alibaba-middle></alibaba-middle>
    <alibaba-bottom></alibaba-bottom>
    <alibaba-service></alibaba-service>
    <alibaba-footer></alibaba-footer>
  </div>
</template>

<script>
import AlibabaHead from "@/views/product/alibaba/Head.vue";
import AlibabaMiddle from "@/views/product/alibaba/Middle.vue";
import AlibabaBottom from "@/views/product/alibaba/Bottom.vue";
import AlibabaService from "@/components/Service.vue";
import AlibabaFooter from "@/components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    AlibabaHead,
    AlibabaMiddle,
    AlibabaBottom,
    AlibabaService,
    AlibabaFooter
  }
};
</script>

<style scoped lang="stylus"></style>
