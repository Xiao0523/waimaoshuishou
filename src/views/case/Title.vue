<template>
  <div class="title_wrapper">
    <div class="title">
      <span>合作案例</span>
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
.title_wrapper {
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  //background: rgba(27, 27, 30, 1);
  width: 1920px;
  height: 267px;
}

.title {
  float: left;
  position: absolute;
  top: 122px;
  left: 596px;
  background: url('https://oss.my51share.com/wmss/assets/img/cooperation_case.png') center left no-repeat;
  width: 728px;
  height: 57px;
}

.title span {
  float: left;
  position: absolute;
  top: 15px;
  left: 292px;
  width: 144px;
  height: 36px;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(52, 52, 52, 1);
  line-height: 54px;
}
</style>
