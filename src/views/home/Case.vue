<template>
<div>
  <div class="case_wrap">
    <div class="title_wrap">
      <div class="heading_img_1">
        <img src="https://oss.my51share.com/wmss/assets/img/img_1.png" />
      </div>
      <div class="heading_text">
        <span>合作案例</span>
      </div>
      <div class="heading_img_2">
        <img src="https://oss.my51share.com/wmss/assets/img/img_3.png" />
      </div>
    </div>
    <div class="caseImg">
      <div>
        <img src="https://oss.my51share.com/wmss/assets/img/img_case_1.png" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "HomeCase",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.case_wrap {
  width: 1920px;
  height: 905px;
  margin: 0px auto;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.heading_img_1 {
  position: absolute;
  top: 150px;
  left: 790px;
  height: 49px;
}

.heading_text {
  position: absolute;
  top: 143px;
  left: 864px;
  width: 192px;
  height: 64px;
  font-size: 48px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 64px;
}

.heading_img_2 {
  position: absolute;
  top: 150px;
  left: 1100px;
  height: 49px;
}

.caseImg {
  position: absolute;
  top: 264px;
  left: 0px;
  width: 1920px;
  height: 548px;
}
</style>
