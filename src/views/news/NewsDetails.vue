<template>
  <div>
    <news-header></news-header>
    <banner></banner>
    <newsdetails></newsdetails>
    <news-travel-to></news-travel-to>
    <news-footer></news-footer>
  </div>
</template>

<script>
import NewsHeader from "@/views/home/Header.vue";
import banner from "@/views/news/banner.vue";
import newsdetails from "@/views/news/Details.vue";
import NewsTravelTo from "@/views/news/TravelTo.vue";
import NewsFooter from "@/views/home/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    NewsHeader,
    banner,
    newsdetails,
    NewsTravelTo,
    NewsFooter
  }
};
</script>

<style scoped lang="stylus"></style>
