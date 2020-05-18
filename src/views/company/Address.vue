<template>
  <div>
    <div class="address_wrapper">
      <div class="address">
        <span>公司地址</span>
      </div>
      <div class="amap-wrapper">
        <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap-demo">
          <el-amap-info-window :position="window.position" :content="window.content"></el-amap-info-window>
        </el-amap>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let center = [121.549568, 29.802726];
    return {
      zoom: 14,
      center,
      window: {
        position: center,
        content: `电话：18067519330<br/>
                  邮箱：sales@yishun2d.com <br/>
                  地址：鄞州区南部商务区海运大厦<br/>
                  6楼`
      }
    };
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.address_wrapper {
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  background: rgba(27, 27, 30, 1);
  width: 1920px;
  height: 868px;
}

.amap-wrapper {
  float: left;
  position: absolute;
  top: 216px;
  left: 363px;
  width: 1200px;
  height: 652px;
}

.address {
  float: left;
  position: absolute;
  top: 82px;
  left: 778px;
  background: url('https://oss.my51share.com/wmss/assets/img/company_img_5.png') center left no-repeat;
  width: 363px;
  height: 61px;
}

.address span {
  padding-top: 25px;
  padding-left: 110px;
  text-align: center;
  height: 36px;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 54px;
}
</style>
