<template>
  <div>
    <google-search-head></google-search-head>
    <google-search-middle></google-search-middle>
    <google-search-bottom></google-search-bottom>
    <google-search-attach></google-search-attach>
    <google-service></google-service>
    <google-footer></google-footer>
  </div>
</template>

<script>
import GoogleSearchHead from "@/views/product/google/Head.vue";
import GoogleSearchMiddle from "@/views/product/google/Middle.vue";
import GoogleSearchBottom from "@/views/product/google/Bottom.vue";
import GoogleSearchAttach from "@/views/product/google/Attach.vue";
import GoogleService from "@/components/Service.vue";
import GoogleFooter from "@/views/home/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    GoogleSearchHead,
    GoogleSearchMiddle,
    GoogleSearchBottom,
    GoogleSearchAttach,
    GoogleService,
    GoogleFooter
  }
};
</script>

<style scoped lang="stylus"></style>
