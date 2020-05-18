<template>
  <div>
    <advantage-title></advantage-title>
    <advantage-details></advantage-details>
  </div>
</template>

<script>
import AdvantageTitle from "@/views/home/AdvantageTitle.vue";
import AdvantageDetails from "@/views/home/AdvantageDetails.vue";
export default {
  name: "HomeAdvantage",
  components: {
    AdvantageTitle,
    AdvantageDetails
  }
};
</script>

<style scoped lang="stylus"></style>
