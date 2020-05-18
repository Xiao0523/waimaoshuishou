<template>
  <div>
    <news-header></news-header>
    <news-swiper></news-swiper>
    <news-list></news-list>
    <news-travel-to></news-travel-to>
    <news-footer></news-footer>
  </div>
</template>

<script>
import NewsHeader from "@/views/home/Header.vue";
import NewsSwiper from "@/views/home/Swiper.vue";
import NewsList from "@/views/news/NewsList.vue";
import NewsTravelTo from "@/views/news/TravelTo.vue";
import NewsFooter from "@/views/home/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    NewsHeader,
    NewsSwiper,
    NewsList,
    NewsTravelTo,
    NewsFooter
  }
};
</script>

<style scoped lang="stylus"></style>
