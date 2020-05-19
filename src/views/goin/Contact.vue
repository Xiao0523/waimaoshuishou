<template>
  <div>
    <div class="contact_wrap">
      <div class="background"></div>
      <div class="contact_list">
        <div class="contact_item">
          <img src="https://oss.my51share.com/wmss/assets/img/goin/phone.png" alt class="item_img" />
          <span class="span_1">客服电话</span>
          <span class="span_2">400-0574-966</span>
        </div>
        <div class="contact_item">
          <img src="https://oss.my51share.com/wmss/assets/img/goin/WeChat.png" alt class="item_img" />
          <span class="span_1">添加微信</span>
          <span class="span_2">18067519330</span>
        </div>
        <div class="contact_item">
          <img src="https://oss.my51share.com/wmss/assets/img/goin/Customer.png" alt class="item_img" />
          <span class="span_1">在线客服</span>
          <el-button>开始咨询</el-button>
        </div>
        <div class="contact_item">
          <img src="https://oss.my51share.com/wmss/assets/img/goin/QQ.png" alt class="item_img" />
          <span class="span_1">QQ客服</span>
          <el-button>开始咨询</el-button>
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
.contact_wrap {
  height: 1303px;
  width: 1920px;
  position: relative;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.background {
  width: 1920px;
  height: 801px;
  background: url('https://oss.my51share.com/wmss/assets/img/goin/img_1.png') center left no-repeat;
}

.contact_list {
  position: absolute;
  width: 1200px;
  height: 498px;
  top: 647px;
  left: 450px;
  float: left;
}

.contact_item {
  float: left;
  width: 457px;
  height: 195px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 24px 14px rgba(0, 0, 0, 0.04);
  margin: 0px 54px 54px 54px;
}

.item_img {
  position: absolute;
  padding-top: 43px;
  padding-left: 54px;
  width: 110px;
  height: 110px;
}

.span_1 {
  position: absolute;
  padding-top: 58px;
  padding-left: 225px;
  width: 96px;
  height: 24px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(52, 52, 52, 1);
  line-height: 36px;
}

.span_2 {
  position: absolute;
  padding-top: 123px;
  padding-left: 225px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(52, 52, 52, 1);
  line-height: 27px;
}

.el-button {
  margin-top:103px;
   margin-left:225px;
  width: 129px;
  height: 40px;
  background: linear-gradient(90deg, rgba(255, 203, 131, 1) 0%, rgba(255, 156, 76, 1) 100%, rgba(255, 156, 76, 1) 100%);
  border-radius: 4px;
}
</style>
