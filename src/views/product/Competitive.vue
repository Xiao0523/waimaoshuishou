<template>
  <div>
    <div class="competitive">
      <div class="title">
        <span>精品套餐</span>
      </div>
      <div class="fist">
        <div class="fist-title">
          <span>拳头产品</span>
        </div>
        <div class="fist-img">
          <img v-lazy="fistUrl" alt />
        </div>
        <div class="fist-subtitle">
          <div class="fist-subtitle-i-1">
            <span>1.全平台广告投放</span>
          </div>
          <div class="fist-subtitle-i-2">
            <span>2.赠送询盘小程序</span>
          </div>
        </div>
        <div class="fist-preferential">
          <div class="fist-preferential-price">
            <span>优惠价¥16800/两年</span>
          </div>
          <div class="fist-preferential-img">
            <img v-lazy="Blackurl" />
          </div>
          <div class="fist-preferential-day">
            <span>¥23/天</span>
          </div>
        </div>
        <div class="fist-consulting">
          <a href>立即咨询 ></a>
        </div>
      </div>
      <div class="star">
        <div class="star-title">
          <span>明星产品</span>
        </div>
        <div class="star-img">
          <img v-lazy="StarUrl" alt />
        </div>
        <div class="star-subtitle">
          <div class="star-subtitle-i-1">
            <span>1.全平台广告投放</span>
          </div>
          <div class="star-subtitle-i-2">
            <span>2.google优化：5个（80%展现）</span>
          </div>
          <div class="star-subtitle-i-3">
            <span>3.赠送询盘小程序</span>
          </div>
        </div>
        <div class="star-preferential">
          <div class="star-preferential-price">
            <span>优惠价¥18800/三年</span>
          </div>
          <div class="star-preferential-img">
            <img v-lazy="Whiteurl" />
          </div>
          <div class="star-preferential-day">
            <span>¥17/天</span>
          </div>
        </div>
        <div class="star-consulting">
          <a href>立即咨询 ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fistUrl: require("@/assets/img/product_fist.png"),
      Blackurl: require("@/assets/img/product_approximate_black.png"),
      StarUrl: require("@/assets/img/product_star.png"),
      Whiteurl: require("@/assets/img/product_approximate_white.png")
    };
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.competitive {
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  height: 630px;
  width: 1920px;
}

.title {
  float: left;
  position: absolute;
  top: 85px;
  left: 775px;
  background: url('https://oss.my51share.com/wmss/assets/img/product_service.png') center left no-repeat;
  width: 370px;
  height: 70px;

  & span {
    position: absolute;
    top: 21px;
    padding-left: 113px;
    width: 144px;
    height: 47px;
    font-size: 36px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: #343434;
    line-height: 47px;
  }
}

.fist {
  float: left;
  position: absolute;
  top: 218px;
  left: 360px;
  width: 585px;
  height: 412px;
  background: rgba(144, 31, 31, 1);
  box-shadow: 0px 2px 14px 10px rgba(173, 57, 45, 0.1);
  border-radius: 10px;

  &-title {
    float: left;
    position: absolute;
    top: 38px;
    left: 40px;
    width: 144px;
    height: 47px;
    font-size: 36px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 47px;
  }

  &-img {
    float: right;
    position: absolute;
    top: 34px;
    right: 52px;
    width: 190px;
    height: 145px;
  }

  &-subtitle-i-1 {
    float: left;
    position: absolute;
    top: 152px;
    left: 40px;
    width: 173px;
    height: 29px;
    font-size: 22px;
    font-family: MicrosoftYaHei;
    color: rgba(255, 255, 255, 1);
    line-height: 29px;
  }

  &-subtitle-i-2 {
    float: left;
    position: absolute;
    top: 198px;
    left: 40px;
    width: 173px;
    height: 29px;
    font-size: 22px;
    font-family: MicrosoftYaHei;
    color: rgba(255, 255, 255, 1);
    line-height: 29px;
  }

  &-preferential-price {
    float: left;
    position: absolute;
    top: 278px;
    left: 40px;
    width: 325px;
    height: 36px;
    font-size: 36px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 54px;
  }

  &-preferential-img {
    float: left;
    position: absolute;
    top: 295px;
    left: 375px;
  }

  &-preferential-day {
    float: right;
    position: absolute;
    top: 286px;
    right: 65px;
    width: 90px;
    height: 24px;
    font-size: 24px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 36px;
  }

  &-consulting {
    float: left;
    position: absolute;
    top: 350px;
    left: 40px;
    width: 111px;
    height: 29px;
    font-size: 22px;
    font-family: MicrosoftYaHei;
    color: rgba(255, 255, 255, 1);
    line-height: 29px;
  }

  &-consulting a {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
  }
}

.star {
  float: left;
  position: absolute;
  top: 218px;
  right: 360px;
  width: 585px;
  height: 412px;
  background: rgba(255, 218, 100, 1);
  box-shadow: 0px 2px 14px 10px rgba(82, 180, 255, 0.1);
  border-radius: 10px;

  &-title {
    float: left;
    position: absolute;
    top: 38px;
    left: 40px;
    width: 144px;
    height: 47px;
    font-size: 36px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(52, 52, 52, 1);
    line-height: 47px;
  }

  &-img {
    float: right;
    position: absolute;
    top: 45px;
    right: 45px;
  }

  &-subtitle-i-1 {
    float: left;
    position: absolute;
    top: 124px;
    left: 53px;
    width: 173px;
    height: 29px;
    font-size: 22px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 29px;
  }

  &-subtitle-i-2 {
    float: left;
    position: absolute;
    top: 173px;
    left: 53px;
    width: 400px;
    height: 22px;
    font-size: 22px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    line-height: 33px;
  }

  &-subtitle-i-3 {
    float: left;
    position: absolute;
    top: 215px;
    left: 53px;
    width: 173px;
    height: 29px;
    font-size: 22px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 29px;
  }

  &-preferential-price {
    float: left;
    position: absolute;
    top: 278px;
    left: 40px;
    width: 324px;
    height: 36px;
    font-size: 36px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    line-height: 54px;
  }

  &-preferential-img {
    float: left;
    position: absolute;
    top: 295px;
    left: 375px;
  }

  &-preferential-day {
    float: right;
    position: absolute;
    top: 286px;
    right: 65px;
    width: 90px;
    height: 24px;
    font-size: 24px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    line-height: 36px;
  }

  &-consulting {
    float: left;
    position: absolute;
    top: 350px;
    left: 40px;
    width: 111px;
    height: 29px;
    font-size: 22px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 29px;
  }

  &-consulting a {
    text-decoration: none;
    color: rgba(52, 52, 52, 1);
  }
}
</style>
