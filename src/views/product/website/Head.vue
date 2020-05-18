<template>
  <div>
    <div class="head">
      <div class="head_title">
        <span>企业官网建设服务</span>
        <div class="head_title_background"></div>
      </div>
      <div class="head_cost">
        <span>
          网站价格：
          <b>¥9800/年</b>
        </span>
      </div>
      <div class="subtitle">
        <span>企业官网豪华版</span>
      </div>
      <div class="website_content">
        <div class="website_content_item white_background">
          <span class="number_black">1</span>
          <span class="content_black">
            多语言版本
            <br />支持英文、日语、俄语、法语、西班牙语、葡萄牙语、简体中文
          </span>
        </div>
        <div class="website_content_item black_background">
          <span class="number_white">2</span>
          <span class="content_white">
            响应式布局
            <br />网站自动适应移动端与PC端，迎合客户任意设备
          </span>
        </div>
        <div class="website_content_item white_background">
          <span class="number_black">3</span>
          <span class="content_black">
            SSL证书https协议
            <br />保证网站安全性，谷歌收录更友好
          </span>
        </div>
        <div class="website_content_item black_background">
          <span class="number_white">4</span>
          <span class="content_white">
            全球CDN
            <br />全球CDN加速，世界各地秒开网站
          </span>
        </div>
        <div class="website_content_item black_background">
          <span class="number_white">5</span>
          <span class="content_white">源码开放,网站定制设计</span>
        </div>
        <div class="website_content_item white_background">
          <span class="number_black">6</span>
          <span class="content_black">
            一对一售后顾问
            <br />微信、手机、QQ7X24小时专属服务
          </span>
        </div>
        <div class="website_content_item black_background">
          <span class="number_white">7</span>
          <span class="content_white">
            后台功能管理
            <br />(企业拥有完整的后台管理账户)
          </span>
        </div>
        <div class="website_content_item white_background">
          <span class="number_black">8</span>
          <span class="content_black">Seo优化功能,赠送5个行业seo关键词,首页排名保证</span>
        </div>
      </div>
      <div class="website_process">
        <div class="process_title">
          <div class="process_title_ioc"></div>
          <span class="process_title_span">建站服务流程（10大标准环节，确保品质服务）</span>
        </div>
        <div class="process_img_1">
          <img v-lazy="img_1" alt />
        </div>
        <div class="process_img_2">
          <img v-lazy="img_2" alt />
        </div>
        <div class="process_list">
          <div class="process_item_i-1">
            <img v-lazy="item_1_img" class="item_i_img i_1_img" />
            <span class="item_i_title i_1_title">提交您的需求</span>
            <span class="item_i_subtitle i_1_subtitle">提交您的需求（客户提出网站建设基本需求，包括：设计需求以及功能需求）</span>
          </div>
          <div class="process_item_i-2">
            <img v-lazy="item_2_img" class="item_i_img i_2_img" />
            <span class="item_i_title i_2_title">项目时间预估与报价</span>
            <span class="item_i_subtitle i_2_subtitle">我们对客户提出的需求,做出时间预估与项目报价</span>
          </div>
          <div class="process_item_i-3">
            <img v-lazy="item_3_img" class="item_i_img i_3_img" />
            <span class="item_i_title i_3_title">达成合作意向</span>
            <span class="item_i_subtitle i_3_subtitle">在客户确认价格的基础上,我们达成合作意向，客户支付订金</span>
          </div>
          <div class="process_item_i-4">
            <img v-lazy="item_4_img" class="item_i_img i_4_img" />
            <span class="item_i_title i_4_title">首页设计</span>
            <span class="item_i_subtitle i_4_subtitle">根据客户设计需求,和客户充分沟通,设计出网站首页</span>
          </div>
          <div class="process_item_i-5">
            <img v-lazy="item_5_img" class="item_i_img i_5_img" />
            <span class="item_i_title i_5_title">首页确认</span>
            <span class="item_i_subtitle i_5_subtitle">客户对首页进行审核,我们根据客户的反馈对页面做出调整,并最终形成确认</span>
          </div>
          <div class="process_item_i-6">
            <img v-lazy="item_6_img" class="item_i_img i_6_img" />
            <span class="item_i_title i_6_title">内页设计及确认</span>
            <span class="item_i_subtitle i_6_subtitle">依次完成内页页面设计提交客户进行审核,并最终形成确认</span>
          </div>
          <div class="process_item_i-7">
            <img v-lazy="item_7_img" class="item_i_img i_7_img" />
            <span class="item_i_title i_7_title">程序开发及页面测试</span>
            <span class="item_i_subtitle i_7_subtitle">根据页面和需求进行程序的开发及前后台页面的整合测试</span>
          </div>
          <div class="process_item_i-8">
            <img v-lazy="item_8_img" class="item_i_img i_8_img" />
            <span class="item_i_title i_8_title">验收阶段</span>
            <span class="item_i_subtitle i_8_subtitle">网站完成后，客户在我们的测试网址上进行验收，确认支付剩余的余款</span>
          </div>
          <div class="process_item_i-9">
            <img v-lazy="item_9_img" class="item_i_img i_9_img" />
            <span class="item_i_title i_9_title">多元化培训</span>
            <span class="item_i_subtitle i_9_subtitle">为了让您的每一份投入获得100%的效益，我们随时为您的企业提供360度全方位的多元化培训</span>
          </div>
          <div class="process_item_i-10">
            <img v-lazy="item_10_img" class="item_i_img i_10_img" />
            <span class="item_i_title i_10_title">项目完成</span>
            <span class="item_i_subtitle i_10_subtitle">至此,整个项目完成，并提供售后服务</span>
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
      img_1: require("@img/website/process_img_1.png"),
      img_2: require("@img/website/process_img_2.png"),
      item_1_img: require("@img/website/process_item_1.png"),
      item_2_img: require("@img/website/process_item_2.png"),
      item_3_img: require("@img/website/process_item_3.png"),
      item_4_img: require("@img/website/process_item_4.png"),
      item_5_img: require("@img/website/process_item_5.png"),
      item_6_img: require("@img/website/process_item_6.png"),
      item_7_img: require("@img/website/process_item_7.png"),
      item_8_img: require("@img/website/process_item_8.png"),
      item_9_img: require("@img/website/process_item_9.png"),
      item_10_img: require("@img/website/process_item_10.png")
    };
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.head {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: 1812px;
  width: 1920px;

  &_title {
    position: absolute;
    top: 47px;
    left: 816px;
    width: 288px;
    height: 47px;
    font-size: 36px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 47px;

    &_background {
      text-align: center;
      margin: -10px auto;
      width: 190px;
      height: 8px;
      background: rgba(255, 162, 83, 1);
    }
  }
}

.head_cost {
  position: absolute;
  top: 144px;
  left: 845px;
  width: 250px;
  height: 27px;
  font-size: 21px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 27px;

  & b {
    text-decoration: none;
    color: #FF9E3D;
    font-weight: normal;
  }
}

.subtitle {
  position: absolute;
  top: 210px;
  width: 1920px;
  text-align: center;
  height: 31px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 31px;
}

.website_content {
  position: absolute;
  width: 1200px;
  height: 410px;
  top: 266px;
  left: 360px;
  background: url('https://oss.my51share.com/wmss/assets/img/website/website_1.png') center left no-repeat;
}

.website_content_item {
  float: left;
  width: 298px;
  height: 203px;
  border: 1px solid #D97173;
  margin: 0 0 0px 0;

  .number_black {
    position: absolute;
    padding-top: 26px;
    text-align: center;
    width: 298px;
    height: 42px;
    font-size: 32px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(52, 52, 52, 1);
    line-height: 42px;
  }

  .number_white {
    position: absolute;
    padding-top: 26px;
    text-align: center;
    width: 298px;
    height: 42px;
    font-size: 32px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 42px;
  }

  .content_black {
    position: absolute;
    padding-top: 82px;
    padding-left: 27px;
    text-align: center;
    width: 250px;
    height: 82px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }

  .content_white {
    position: absolute;
    padding-top: 82px;
    padding-left: 27px;
    text-align: center;
    width: 250px;
    height: 82px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(255, 255, 255, 1);
    line-height: 27px;
  }
}

.white_background {
  background: #ffffff;
}

.black_background {
  background: rgba(0, 0, 0, 1);
  opacity: 0.65;
}

.process_title_ioc {
  left: 367px;
  top: 760px;
  position: absolute;
  width: 4px;
  height: 23px;
  background: rgba(255, 162, 83, 1);
}

.process_title_span {
  left: 383px;
  position: absolute;
  top: 756px;
  width: 445px;
  height: 27px;
  font-size: 21px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 27px;
}

.process_img_1 {
  position: absolute;
  top: 811px;
  left: 1111px;
  width: 450px;
  height: 433px;
}

.process_img_2 {
  position: absolute;
  top: 1290px;
  left: 384px;
  width: 427px;
  height: 430px;
}

.item_i_img {
  width: 49px;
  height: 49px;
}

.item_i_title {
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: rgba(52, 52, 52, 1);
  line-height: 26px;
}

.item_i_subtitle {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 21px;
}

.i_1_img {
  position: absolute;
  top: 847px;
  left: 384px;
}

.i_1_title {
  position: absolute;
  top: 844px;
  left: 452px;
}

.i_1_subtitle {
  position: absolute;
  top: 875px;
  left: 452px;
}

.i_2_img {
  position: absolute;
  top: 934px;
  left: 384px;
}

.i_2_title {
  position: absolute;
  top: 931px;
  left: 452px;
}

.i_2_subtitle {
  position: absolute;
  top: 962px;
  left: 452px;
}

.i_3_img {
  position: absolute;
  top: 1021px;
  left: 384px;
}

.i_3_title {
  position: absolute;
  top: 1018px;
  left: 452px;
}

.i_3_subtitle {
  position: absolute;
  top: 1049px;
  left: 452px;
}

.i_4_img {
  position: absolute;
  top: 1108px;
  left: 384px;
}

.i_4_title {
  position: absolute;
  top: 1105px;
  left: 452px;
}

.i_4_subtitle {
  position: absolute;
  top: 1136px;
  left: 452px;
}

.i_5_img {
  position: absolute;
  top: 1195px;
  left: 384px;
}

.i_5_title {
  position: absolute;
  top: 1192px;
  left: 452px;
}

.i_5_subtitle {
  position: absolute;
  top: 1223px;
  left: 452px;
}

.i_6_img {
  position: absolute;
  top: 1321px;
  left: 830px;
}

.i_6_title {
  position: absolute;
  top: 1318px;
  left: 897px;
}

.i_6_subtitle {
  position: absolute;
  top: 1349px;
  left: 897px;
}
.i_7_img {
  position: absolute;
  top: 1408px;
  left: 830px;
}

.i_7_title {
  position: absolute;
  top: 1405px;
  left: 897px;
}

.i_7_subtitle {
  position: absolute;
  top: 1436px;
  left: 897px;
}
.i_8_img {
  position: absolute;
  top: 1488px;
  left: 830px;
}

.i_8_title {
  position: absolute;
  top: 1485px;
  left: 897px;
}

.i_8_subtitle {
  position: absolute;
  top: 1516px;
  left: 897px;
}
.i_9_img {
  position: absolute;
  top: 1578px;
  left: 830px;
}

.i_9_title {
  position: absolute;
  top: 1573px;
  left: 897px;
}

.i_9_subtitle {
  position: absolute;
  top: 1604px;
  left: 897px;
}

.i_10_img {
  position: absolute;
  top: 1671px;
  left: 830px;
}

.i_10_title {
  position: absolute;
  top: 1668px;
  left: 897px;
}

.i_10_subtitle {
  position: absolute;
  top: 1691px;
  left: 897px;
}
</style>
