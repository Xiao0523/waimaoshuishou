<template>
  <div class="Header_1">
    <el-container>
      <el-header style="height: 100px;">
        <div class="header_logo">
          <!--<img src="https://oss.my51share.com/wmss/assets/img/logo.png" alt/>-->
        </div>
        <!-- :default-active="defaultActive" -->
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
          :default-active="$route.path"
        > 
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/product" >产品服务</el-menu-item>
          <el-menu-item index="/news" >新闻资讯</el-menu-item>
          <el-menu-item index="/case" >合作案例</el-menu-item>
          <el-menu-item index="/Company" >公司简介</el-menu-item>
          <el-menu-item index="/goin" >联系我们</el-menu-item> 
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      router: true,

    };
  },
  methods: {
    handleSelect(key, keyPath) {
     
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
      window.console.log(keyPath);
      this.defaultActive = key;
    }
  }
};
</script>
<style lang="stylus" scoped>
.Header_1 >>> .el-header {
  height: 100px;
  width: 1920px;
  position: relative;
  display: flex;
  height: 100px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}

.Header_1 >>>.el-menu {
  margin-left: 673px;
}

.el-menu-item {
  height: 100px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 21px;
  padding-top: 39px;
  padding-bottom: 40px;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid rgba(255, 162, 83, 1) !important;
  color: #000000 !important;
  font-size: 1.2rem !important;
}

.header_logo {
  width: 151px;
  height: 54px;
  position: absolute;
  // margin-top: -23px;
  background: url('https://oss.my51share.com/wmss/assets/img/logo.png') left center no-repeat;
  background-size: 151px 54px;
  margin-left: 385px;
  padding-top: 23px;
  padding-bottom: 23px;
}

.el-main {
  padding: 0 !important;
}
</style>