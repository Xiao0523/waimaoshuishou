<template>
  <div>
    <div class="technology_wrap">
      <div class="title_wrap">
        <div class="heading_img_1">
          <img src="https://oss.my51share.com/wmss/assets/img/img_1.png" />
        </div>
        <div class="heading_text">
          <span>核心技术</span>
        </div>
        <div class="heading_img_2">
          <img src="https://oss.my51share.com/wmss/assets/img/img_3.png" />
        </div>
      </div>
      <div class="subheading">
        <span>
          基于大数据、云计算、人工智能的外贸一站式营销推广系统，
          保证核心关键词在站内站外排名首页！
        </span>
      </div>
      <div class="technology_point_1">
        <div class="technology_point_1_img"></div>
        <div class="technology_point_1_text">
          <span>大数据</span>
        </div>
      </div>
      <div class="technology_point_2">
        <div class="technology_point_2_img"></div>
        <div class="technology_point_2_text">
          <span>云计算</span>
        </div>
      </div>
      <div class="technology_point_3">
        <div class="technology_point_3_img"></div>
        <div class="technology_point_3_text">
          <span>人工智能</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTechnology",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.technology_wrap {
  width: 1920px;
  height: 655px;
  margin: 0px auto;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 33px 30px rgba(0, 0, 0, 0.04);
  border-radius: 38px;
}

.heading_img_1 {
  position: absolute;
  top: 75px;
  left: 790px;
  height: 49px;
}

.heading_text {
  position: absolute;
  top: 68px;
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
  top: 75px;
  left: 1100px;
  height: 49px;
}

.subheading {
  position: absolute;
  text-align: center;
  top: 181px;
  left: 570px;
  width: 780px;
  height: 182px;
  font-size: 28px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 52px;
}

.technology_point_1_img {
  position: absolute;
  text-align: center;
  top: 370px;
  left: 580px;
  bottom:122px;
  width: 162px;
  height: 162px;
  background: url('https://oss.my51share.com/wmss/assets/img/img_techology_1.png') no-repeat center right;
}

.technology_point_1_text {
  position: absolute;
  top: 435px;
  left: 624px;
  width: 83px;
  height: 24px;
  font-size: 24px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(52, 52, 52, 1);
  line-height: 36px;
}

.technology_point_2_img {
  position: absolute;
  text-align: center;
  top: 370px;
  left: 880px;
  width: 162px;
  height: 162px;
  background: url('https://oss.my51share.com/wmss/assets/img/img_techology_1.png') no-repeat center right;
}

.technology_point_2_text {
  position: absolute;
  top: 435px;
  left: 922px;
  width: 83px;
  height: 24px;
  font-size: 24px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(52, 52, 52, 1);
  line-height: 36px;
}

.technology_point_3_img {
  position: absolute;
  text-align: center;
  top: 370px;
  left: 1178px;
  width: 162px;
  height: 162px;
  background: url('https://oss.my51share.com/wmss/assets/img/img_techology_1.png') no-repeat center right;
}

.technology_point_3_text {
  position: absolute;
  top: 423px;
  left: 1236px;
  width: 52px;
  height: 56px;
  font-size: 24px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(52, 52, 52, 1);
  line-height: 28px;
}
</style>
