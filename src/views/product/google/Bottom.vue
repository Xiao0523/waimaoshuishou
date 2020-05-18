<template>
  <div>
    <div class="bottom_warp">
      <div class="title">
        <div class="bottom_title_ico"></div>
        <span>服务优势</span>
      </div>
      <p class="text">
        1.广告覆盖面广，开拓国际市场（覆盖200多个国家，100多种语言可投放Google平台及全球所有合作伙伴）<br>
        2.无人工干预，广告排名公正（搜索和广告展示结果依照法规，完全无人工干预广告排名不完全受出价影响，企业得到最公正待遇）<br>
        3.触及全球用户,精准锁定目标（Google覆盖全球88%的互联网用户，高端用户和高收入人群最常使用的搜索引擎）
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.bottom_warp {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: 310px;
  width: 1920px;
  background: url('https://oss.my51share.com/wmss/assets/img/google/map.png') center left no-repeat;
}

.bottom_title_ico {
  position: absolute;
  top: 94px;
  left: 363px;
  width: 4px;
  height: 23px;
  background: rgba(255, 162, 83, 1);
}

.title span {
  position: absolute;
  top: 91px;
  left: 380px;
  width: 84px;
  height: 27px;
  font-size: 21px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 27px;
}

.text {
  position: absolute;
  top: 140px;
  left: 363px;
  width: 1193px;
  height: 113px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 32px;
}
</style>
