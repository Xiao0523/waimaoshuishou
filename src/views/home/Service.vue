<template>
  <div>
    <service-title ></service-title>
    <service-details></service-details>
  </div>
</template>

<script>
import ServiceTitle from "@/views/home/ServiceTitle.vue";
import ServiceDetails from "@/views/home/ServiceDetails.vue";
export default {
  name: "HomeService",
  components: {
    ServiceTitle,
    ServiceDetails
  }
};
</script>

<style scoped lang="stylus">
</style>
