<template>
  <div>
    <div class="travel_wrap">
      <div class="travel_service">
        <span>寻找最适合的专属产品服务</span>
      </div>
      <div class="travel_to">
        <span>
          <a @click="to">立即前往</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    to() {
      this.$router.push({ name: "Product" });
    }
  }
};
</script>

<style scoped lang="stylus">
.travel_wrap {
  margin-top: 20px;
  width: 1920px;
  height: 280px;
  position: relative;
  overflow: hidden;
  background: url('https://oss.my51share.com/wmss/assets/img/news_travelTo.png') center left no-repeat;

  .travel_service {
    float: left;
    position: absolute;
    top: 122px;
    left: 650px;
    width: 432px;
    height: 36px;
    font-size: 36px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 54px;
  }

  .travel_to {
    float: right;
    position: absolute;
    top: 122px;
    right: 650px;
    width: 144px;
    height: 36px;
    font-size: 36px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(218, 81, 38, 1);
    line-height: 54px;
  }

  .travel_to:hover {
    color: rgba(255, 255, 255, 1);
  }
}
</style>
