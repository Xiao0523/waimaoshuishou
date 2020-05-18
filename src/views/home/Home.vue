<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-service></home-service>
    <home-advantage></home-advantage>
    <home-technology></home-technology>
    <home-news></home-news>
    <home-case></home-case>
    <home-consulting></home-consulting>
    <home-footer></home-footer>
    <home-contact></home-contact>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/views/home/Header.vue";
import HomeSwiper from "@/views/home/Swiper.vue";
import HomeService from "@/views/home/Service.vue";
import HomeAdvantage from "@/views/home/Advantage.vue";
import HomeTechnology from "@/views/home/Technology.vue";
import HomeNews from "@/views/home/News.vue";
import HomeCase from "@/views/home/Case.vue";
import HomeConsulting from "@/views/home/Consulting.vue";
import HomeFooter from "@/views/home/Footer.vue";
import HomeContact from "@/views/home/Contact.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeService,
    HomeAdvantage,
    HomeTechnology,
    HomeNews,
    HomeCase,
    HomeConsulting,
    HomeFooter,
    HomeContact
  }
};
</script>
