<template>
  <div>
    <div class="middle_warp">
      <div class="title">
        <div class="title_oic"></div>
        <span class="title_span">建站优势</span>
      </div>
      <p class="text_style advantage_item_1">1.专为外贸行业开发的网站系统，更懂外贸</p>
      <p class="text_style advantage_item_2">
        2.响应式设计,支持PC、手机等移动设备(所有网站建设方案，均支持手机及移动设备适配访
        <br />问，最大限度留住每一个客户)
      </p>

      <p class="text_style advantage_item_3">
        3.欧美设计风，更懂您的客户
        <br />网站欧美风格设计，简洁、大气。符合老外用户审美与操作习惯，并使用正版图库
      </p>
      <p class="text_style advantage_item_4">
        4.支持Goolge SEO、Facebook等多种营销渠道
        <br />我们的网站系统拥有19项SEO相关功能，让您的网站Google等海外搜索引擎上有更好排名表
        <br />现。同时具备Facebook社交媒体的互联互通，一键分享等功能。
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
.middle_warp {
  height: 512px;
  width: 1920px;
  position: relative;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: url('https://oss.my51share.com/wmss/assets/img/website/middle_background.png') center left no-repeat;
}

.title_oic {
  position: absolute;
  top: 72px;
  left: 385px;
  width: 4px;
  height: 23px;
  background: rgba(255, 162, 83, 1);
}

.title_span {
  position: absolute;
  top: 69px;
  left: 401px;
  width: 84px;
  height: 54px;
  font-size: 21px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 27px;
}

.text_style {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}

.advantage_item_1 {
  position: absolute;
  top: 136px;
  left: 401px;
}

.advantage_item_2 {
  position: absolute;
  top: 191px;
  left: 401px;
}

.advantage_item_3 {
  position: absolute;
  top: 281px;
  left: 401px;
}

.advantage_item_4 {
  position: absolute;
  top: 371px;
  left: 401px;
}
p:hover{
  color:rgba(255, 162, 83, 1);
}
</style>
