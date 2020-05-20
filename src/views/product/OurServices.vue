<template>
  <div class="ourservices">
    <div class="ourservices-title">
      <span>我们的服务</span>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="阿里巴巴国际站代运营" name="first">
        <alibaba></alibaba>
      </el-tab-pane>
      <el-tab-pane label="Google搜索排名" name="second">
        <google-search></google-search>
      </el-tab-pane>
      <el-tab-pane label="企业商务微站" name="third">
        <microstation></microstation>
      </el-tab-pane>
      <el-tab-pane label="企业官网建设服务" name="fourth">
        <website></website>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Alibaba from "@/views/product/alibaba/Alibaba.vue";
import GoogleSearch from "@/views/product/google/GoogleSearch.vue";
import Microstation from "@/views/product/microstation/Microstation.vue";
import Website from "@/views/product/website/Website.vue";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    Alibaba,
    GoogleSearch,
    Microstation,
    Website
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped lang="stylus">
.ourservices {
  margin: 0px auto;
  position: relative;
  display: table-cell;
  width: 1920px;

  &-title {
    float: left;
    position: absolute;
    top: 0px;
    left: 360px;
    background: url('https://oss.my51share.com/wmss/assets/img/product_service.png') center left no-repeat;
    width: 370px;
    height: 70px;

    & span {
      position: absolute;
      top: 21px;
      padding-left: 1px;
      width: 180px;
      height: 47px;
      font-size: 36px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(52, 52, 52, 1);
      line-height: 47px;
    }
  }
}

.el-tabs {
  position: absolute;
  top: 153px;
  padding-left: 360px;
  padding-right: 360px;
  // left: 360px;
  //width: 1920px;
}

.el-tabs__item {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 21px;
}

.is-active {
  border: 1px solid rgba(255, 162, 83, 1);
}
</style>
