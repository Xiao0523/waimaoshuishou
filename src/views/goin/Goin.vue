<template>
  <div>
    <goin-header></goin-header>
    <goin-contact></goin-contact>
    <goin-message></goin-message>
    <news-travel-to></news-travel-to>
    <news-footer></news-footer>
  </div>
</template>

<script>
import GoinHeader from "@/views/home/Header.vue";
import GoinContact from "@/views/goin/Contact.vue";
import GoinMessage from "@/views/goin/Message.vue";

import NewsTravelTo from "@/views/news/TravelTo.vue";
import NewsFooter from "@/views/home/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    GoinHeader,
    GoinContact,
    GoinMessage,
    NewsTravelTo,
    NewsFooter
  }
};
</script>

<style scoped lang="stylus"></style>
