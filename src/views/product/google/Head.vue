<template>
  <div>
    <div class="head">
      <div class="head_title">
        <span>Google搜索排名</span>
        <div class="head_title_background"></div>
      </div>
      <div class="head_cost">
        <span>服务费用：¥16800/年</span>
      </div>
      <div class="head_equal">
        <span>
          约等于 &nbsp;
          <b>&nbsp; ¥ 46 /天</b>
        </span>
      </div>
      <div class="content_title">
        <span>服务内容</span>
      </div>
      <div class="content_title_item item_i_1">
        <span class="content_title_item_span_1">网站结构优化</span>
        <span class="content_title_item_span_2">整体架构优化、URL结构优化、导航结构优化、内链结构优化</span>
      </div>
      <div class="content_title_item item_i_2">
        <span class="content_title_item_span_1">技术优化</span>
        <span class="content_title_item_span_2">网页代码优化、ROBOTS文件、H标签优化、图片优化、网站地图优化</span>
      </div>
      <div class="content_title_item item_i_3">
        <span class="content_title_item_span_1">关键词优化</span>
        <span class="content_title_item_span_2">关键词选择、关键词密度、用户搜索词分析</span>
      </div>
      <div class="content_title_item item_i_4">
        <span class="content_title_item_span_1">做外部链接</span>
        <span class="content_title_item_span_2">外链分析、外链建设、友链优化</span>
      </div>
      <div class="content_title_item item_i_5">
        <span class="content_title_item_span_1">数据分析</span>
        <span class="content_title_item_span_2">关键词排名报告、流量报告、收录报告</span>
      </div>
      <div class="content_title_item_6">
        <span>
          经过优化后的网站关键词会排名的google搜索
          的首页,确保效果.
          <br />Google全球最大的搜索引擎
        </span>
      </div>
      <div class="content_title_item_6_bjs"></div>
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
.head {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: 734px;

  // width: 1920px;
  &_title {
    position: absolute;
    top: 47px;
    left: 565px;
    width: 270px;
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

  &_cost {
    position: absolute;
    margin: 144px 496px;
    width: 210px;
    height: 27px;
    font-size: 21px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }

  &_equal {
    position: absolute;
    margin: 186px 527px;
    width: 155px;
    height: 37px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 21px;
  }

  &_equal b {
    padding-left: 10px;
    font-weight: normal;
    color: #FA6400;
    font-size: 24px;
  }
}

.content_title {
  position: absolute;
  top: 270px;
  width: 1200px;
  height: 31px;
  font-size: 24px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: rgba(52, 52, 52, 1);
  line-height: 31px;
  text-align: center;
}

.content_title_item {
  position: relative;
  width: 347px;
  height: 178px;

  &_span_1 {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 300px;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 24px;
  }

  &_span_2 {
    position: absolute;
    top: 80px;
    left: 40px;
    width: 264px;
    height: 42px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 21px;
  }
}

.item_i_1 {
  background: url('https://oss.my51share.com/wmss/assets/img/google/content_1.png') center left no-repeat;
  position: absolute;
  top: 370px;
  left: 10px;
}

.item_i_2 {
  background: url('https://oss.my51share.com/wmss/assets/img/google/content_2.png') center left no-repeat;
  position: absolute;
  top: 370px;
  left: 427px;
}

.item_i_3 {
  background: url('https://oss.my51share.com/wmss/assets/img/google/content_2.png') center left no-repeat;
  position: absolute;
  top: 370px;
   left: 850px;
}

.item_i_4 {
  background: url('https://oss.my51share.com/wmss/assets/img/google/content_2.png') center left no-repeat;
  position: absolute;
  top: 555px;
  left: 10px;
}

.item_i_5 {
  background: url('https://oss.my51share.com/wmss/assets/img/google/content_2.png') center left no-repeat;
  position: absolute;
  top: 555px;
  left: 427px;
}

.content_title_item_6 {
  position: absolute;
  float: left;
  top: 610px;
  left: 862px;
  width: 311px;
  height: 93px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 31px;
}

.content_title_item_6_bjs {
  position: absolute;
  float: left;
  top: 702px;
  left: 862px;
  width: 204px;
  height: 3px;
  background: rgba(181, 213, 253, 1);
}
</style>
