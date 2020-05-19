<template>
  <div>
    <div class="middle_wrap">
      <div class="title">
        <div class="title_ico"></div>
        <span class="title_span">服务内容</span>
      </div>
      <div class="service">
        <div class="service_item_1">
          <img v-lazy="service_1_img" alt class="service_item_1_img" />
          <div class="service_item_1_content">
            <span class="service_item_1_span">电脑端的网站设计+移动端的网站设计,可以后台上传内容,图片,产品介绍等</span>
          </div>
        </div>
        <div class="service_item_2">
          <img v-lazy="service_2_img" alt class="service_item_2_img" />
          <div class="service_item_2_content">
            <span class="service_item_2_span">电脑端的网站设计+移动端的网站设计,可以后台上传内容,图片,产品介绍等</span>
          </div>
        </div>
        <div class="service_item_3">
          <img v-lazy="service_3_img" alt class="service_item_3_img" />
          <div class="service_item_3_content">
            <span class="service_item_3_span">独立域名+全球多台独立服务器,快速获取seo排名</span>
          </div>
        </div>
        <div class="service_item_4">
          <img v-lazy="service_4_img" alt class="service_item_4_img" />
          <div class="service_item_4_content">
            <span class="service_item_4_span">单页面+引导标题模式，采用目前国外新潮的设计风格，更能吸引客户</span>
          </div>
        </div>
        <div class="service_item_5">
          <img v-lazy="service_5_img" alt class="service_item_5_img" />
          <div class="service_item_5_content">
            <span class="service_item_5_span">专属顾问1对1服务7*24小时售后支持</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service_1_img: "https://oss.my51share.com/wmss/assets/imgmicrostation/service_1.png",
      service_2_img: "https://oss.my51share.com/wmss/assets/imgmicrostation/service_2.png",
      service_3_img: "https://oss.my51share.com/wmss/assets/imgmicrostation/service_3.png",
      service_4_img: "https://oss.my51share.com/wmss/assets/imgmicrostation/service_4.png",
      service_5_img: "https://oss.my51share.com/wmss/assets/imgmicrostation/service_5.png"
    };
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.middle_wrap {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: 1413px;
  width: 1920px;
}

.title_ico {
  left: 367px;
  top: 5px;
  position: absolute;
  width: 4px;
  height: 23px;
  background: rgba(255, 162, 83, 1);
}

.title_span {
  position: absolute;
  left: 383px;
  width: 96px;
  height: 31px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 31px;
}

.service_item_1_img {
  top: 85px;
  left: 575px;
  position: absolute;
  width: 270px;
  height: 223px;
}

.service_item_1_content {
  top: 358px;
  left: 467px;
  position: relative;
  width: 418px;
  height: 103px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .service_item_1_span {
    position: absolute;
    top: 20px;
    left: 52px;
    width: 306px;
    height: 58px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 29px;
  }
}

.service_item_2_img {
  top: 85px;
  left: 1070px;
  position: absolute;
  width: 301px;
  height: 239px;
}

.service_item_2_content {
  top: 358px;
  left: 1038px;
  position: absolute;
  width: 418px;
  height: 103px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .service_item_2_span {
    position: absolute;
    top: 20px;
    left: 52px;
    width: 306px;
    height: 58px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 29px;
  }
}

.service_item_3_img {
  top: 532px;
  left: 554px;
  position: absolute;
  width: 260px;
  height: 260px;
}

.service_item_3_content {
  top: 792px;
  left: 467px;
  position: absolute;
  width: 418px;
  height: 103px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .service_item_3_span {
    position: absolute;
    top: 20px;
    left: 52px;
    width: 306px;
    height: 58px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 29px;
  }
}
.service_item_4_img {
  top: 532px;
  left: 1114px;
  position: absolute;
  width: 265px;
  height: 265px;
}

.service_item_4_content {
  top: 792px;
  left: 1038px;
  position: absolute;
  width: 418px;
  height: 103px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .service_item_4_span {
    position: absolute;
    top: 20px;
    left: 52px;
    width: 306px;
    height: 58px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 29px;
  }
}
.service_item_5_img {
  top: 946px;
  left: 838px;
  position: absolute;
  width: 244px;
  height: 244px;
}
.service_item_5_content {
  top: 1200px;
  left: 752px;
  position: absolute;
  width: 418px;
  height: 103px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .service_item_5_span {
    position: absolute;
    top: 30px;
    left: 52px;
    width: 306px;
    height: 58px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 29px;
  }
}
</style>
