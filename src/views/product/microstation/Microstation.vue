<template>
  <div>
    <microstation-head></microstation-head>
    <microstation-middle></microstation-middle>
    <microstation-bottom></microstation-bottom>
    <google-service></google-service>
    <google-footer></google-footer>
  </div>
</template>

<script>
import MicrostationHead from "@/views/product/microstation/Head.vue";
import MicrostationMiddle from "@/views/product/microstation/Middle.vue";
import MicrostationBottom from "@/views/product/microstation/Bottom.vue";
import GoogleService from "@/components/Service.vue";
import GoogleFooter from "@/views/home/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    MicrostationHead,
    MicrostationMiddle,
    MicrostationBottom,
    GoogleService,
    GoogleFooter
  }
};
</script>

<style scoped lang="stylus"></style>
