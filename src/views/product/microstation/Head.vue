<template>
  <div>
    <div class="head">
      <div class="head_title">
        <span>企业商务微站</span>
        <div class="head_title_background"></div>
      </div>
      <div class="head_cost">
        <span>
          网站价格：
          <b>¥16800/三年</b>
        </span>
      </div>
      <div class="content">
        <p>以简单单页面形式，突出商务个人风格，类似目前的社交个人号，如领英的个人号，但是有独立的域名，有相关的产品等介绍，更具有商务性,而且企业商务微站可以被google快速收录,获取关键词排名,同时在网站首页有留言询盘功能,可以获取客户的直接询盘信息.</p>
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
.head {
  margin: 0 0;
  position: relative;
  overflow: hidden;
  height: 345px;
  width: 1200px;

  &_title {
    position: absolute;
    top: 47px;
    left: 492px;
    width: 220px;
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
  left: 485px;
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

.content {
  position: absolute;
  top: 210px;
  left: 7px;
  width: 1186px;
  height: 62px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 31px;
  text-align:center;
}
</style>
