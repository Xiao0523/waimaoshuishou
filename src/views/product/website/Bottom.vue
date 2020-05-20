<template>
  <div>
    <div class="bottom_warp">
      <div class="title">
        <span class="title_span">外贸水手网站特色</span>
        <div class="title_background"></div>
      </div>
      <div class="bottom_background"></div>
      <div class="features_list">
        <div class="features_item item_i_1">
          <span class="features_item_title">高端一对一设计</span>
          <span class="features_item_content">专业设计师，一对一设计方案定制，应用最前沿设计理念</span>
        </div>
          <div class="features_item item_i_2">
          <span class="features_item_title">多维度营销</span>
          <span class="features_item_content">PC、移动多端营销，增加曝光，转化流量，获取商机</span>
        </div>
          <div class="features_item item_i_3">
          <span class="features_item_title">行业专属应用</span>
          <span class="features_item_content">机械、服装、化工等多种不同行业线上场景应用，提升线上客源</span>
        </div>
          <div class="features_item item_i_4">
          <span class="features_item_title">海外推广优势</span>
          <span class="features_item_content">海外服务器部署，专业外语翻译，google等海外平台推广，海外社交媒体分享</span>
        </div>
          <div class="features_item item_i_5">
          <span class="features_item_title">高速稳定部署</span>
          <span class="features_item_content">CND网站加速，支持流媒体服务</span>
        </div>
      </div>
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
  height: 797px;
  width: 1920px;
  position: relative;
  margin: 0 -360px;
  position: relative;
  overflow: hidden;
}

.title_span {
  position: absolute;
  top: 75px;
  text-align: center;
  width: 1920px;
  height: 27px;
  font-size: 21px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: rgba(6, 6, 6, 1);
  line-height: 27px;
}

.title_background {
  position: absolute;
  top: 90px;
  left: 893px;
  width: 134px;
  height: 21px;
  background: rgba(246, 158, 83, 1);
  opacity: 0.33;
}

.bottom_background {
  position: absolute;
  top: 360px;
  left: 442px;
  width: 1060px;
  height: 277px;
  background: url('https://oss.my51share.com/wmss/assets/img/website/bottom_backgroumd.png') center left no-repeat;
}

.features_item {
  position: absolute;
  width: 227px;
  height: 244px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .features_item_title {
    position: absolute;
    top: 45px;
    width: 227px;
    text-align: center;
    height: 27px;
    font-size: 21px;
    font-family: MicrosoftYaHei;
    color: rgba(6, 6, 6, 1);
    line-height: 27px;
  }

  .features_item_content {
    position: absolute;
    top: 110px;
    left: 29px;
    width: 168px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(6, 6, 6, 1);
    line-height: 27px;
  }
}
.item_i_1{
  position: absolute;
  top:173px;
  left:718px;
}
.item_i_2{
  position: absolute;
  top:173px;
  left:976px;
}
.item_i_3{
  position: absolute;
  top:463px;
  left:555px;
}
.item_i_4{
  position: absolute;
  top:463px;
  left:847px;
}
.item_i_5{
  position: absolute;
  top:463px;
  left:1140px;
}
</style>
