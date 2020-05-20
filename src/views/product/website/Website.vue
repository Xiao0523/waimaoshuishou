<template>
  <div>
    <website-head></website-head>
    <website-middle></website-middle>
    <website-bottom></website-bottom>
    <google-service></google-service>
    <google-footer></google-footer>
  </div>
</template>

<script>
import WebsiteHead from "@/views/product/website/Head.vue";
import WebsiteMiddle from "@/views/product/website/Middle.vue";
import WebsiteBottom from "@/views/product/website/Bottom.vue";
import GoogleService from "@/components/Service.vue";
import GoogleFooter from "@/components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    WebsiteHead,
    WebsiteMiddle,
    WebsiteBottom,
    GoogleService,
    GoogleFooter
  }
};
</script>

<style scoped lang="stylus"></style>
