<template>
  <div>
    <div class="middle_wrap">
      <div class="middle_wrap_title">
        <span>我们的优势</span>
      </div>
      <div class="middle_wrap_subtitle">
        <span>专注决定专业，营销成就未来</span>
      </div>
      <div class="advantage">
        <div class="advantage_item">
          <img v-lazy="url01" alt class="advantage_item_i_img" />
          <div class="advantage_item_i_1">
            <span class="advantage_item_ititle">专业B2B平台运营团队</span>
            <span class="advantage_item_subtitle">核心团队具有丰富的推广实战操盘经验</span>
          </div>
        </div>
        <div class="advantage_item">
          <img v-lazy="url02" alt class="advantage_item_i_img" />
          <div class="advantage_item_i_1">
            <span class="advantage_item_ititle">实战技术团队</span>
            <span class="advantage_item_subtitle">专业的电商师资团队，团队经验丰富专业性强，让您省时省力省心</span>
          </div>
        </div>
        <div class="advantage_item">
          <img v-lazy="url03" alt class="advantage_item_i_img" />
          <div class="advantage_item_i_1">
            <span class="advantage_item_ititle">优化资金配置</span>
            <span class="advantage_item_subtitle">杜绝胡乱推广，为每位客户铸造高收益低成本的好店铺</span>
          </div>
        </div>
        <div class="advantage_item">
          <img v-lazy="url04" alt class="advantage_item_i_img" />
          <div class="advantage_item_i_1">
            <span class="advantage_item_ititle">全渠道推广</span>
            <span class="advantage_item_subtitle">站内站外全渠道推广引流，精准锁定目标客户，提升店铺排名</span>
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
      url01: require("@/assets/img/alibaba_advantage_item_1.png"),
      url02: require("@/assets/img/alibaba_advantage_item_2.png"),
      url03: require("@/assets/img/alibaba_advantage_item_3.png"),
      url04: require("@/assets/img/alibaba_advantage_item_4.png")
    };
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.middle_wrap {
  width: 1920px;
  position: relative;
  height: 570px;
  left: 50%;
  margin-left: -960px;
  background: url('https://oss.my51share.com/wmss/assets/img/alibaba_middle_background.png');
  background-size: 1920px 570px;
  background-repeat: no-repeat;
  // background-size: cover;
  z-index: 1;

  &_title {
    position: absolute;
    width: 1920px;
    top: 55px;
    text-align: center;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-size: 32px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 41px;
  }

  &_subtitle {
    position: absolute;
    width: 1920px;
    top: 100px;
    text-align: center;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 41px;
  }
}

.advantage {
  position: absolute;
  width: 1112px;
  height: 280px;
  bottom: 92px;
  left: 424px;
}

.advantage_item {
  float: left;
  width: 248px;
  height: 280px;
  // border: 2px solid #fff;
  // text-align: center;
  line-height: 14px;
  box-shadow: 0px 2px 17px 0px rgba(130, 68, 16, 0.1);
  // border-radius: 8px;
  margin: 0 20px 0px 0;

  .advantage_item_i_1 {
    position: absolute;
    margin: 36px 0 0 0;
    width: 248px;
    height: 244px;
    border: 2px solid #fff;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;

    .advantage_item_ititle {
      position: absolute;
      top: 58px;
      width: 248px;
      height: 24px;
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: rgba(52, 52, 52, 1);
      line-height: 24px;
      text-align: center;
    }

    .advantage_item_subtitle {
      position: absolute;
      top: 112px;
      left:30px;
      width: 190px;
      height: 81px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(52, 52, 52, 1);
      line-height: 27px;
       text-align: center;
    }
  }

  &_i_img {
    position: absolute;
    float: left;
    margin-left: 90px;
    z-index: 1;
  }
}
</style>
