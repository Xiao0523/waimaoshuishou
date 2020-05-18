<template>
  <div>
    <div class="NewsDetails">
      <div class="NewsDetails-product">
        <div class="NewsDetails-product-head">
          <span class="details">新闻资讯 > 详情</span>
          <el-button   @click="showFn">返回</el-button>
        </div>
        <div class="NewsDetails-product-content">
          <p class="product-title">{{newsIditem.title}}</p>
          <p class="product-time">{{newsIditem.date}}</p>
          <p class="product-content">{{newsIditem.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  components: {},
  data() {
    return {
      pid: "00001"
    };
  },
  computed: {
    newsIditem() {
      let newsList = this.$store.state.newsList
        ? this.$store.state.newsList
        : [];
      let id = this.$route.params.id ? this.$route.params.id : this.pid;
      let item = newsList.filter(newsitem => newsitem.id === id);
      return item[0];
    }
  },
  created() {},
  mounted() {},
  methods: {
    showFn(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="stylus" scoped>
.NewsDetails {
  width: 100%;
  height: 100%;
 // background-color: #fff;

  &-product {
    width: 1050px;
    margin: 0 auto;
    //background-color: #fff;
    //border: 1px solid red;

    &-head {
      width: 1050px;
      padding: 38px 0;

      .details {
        width: 99px;
        height: 14px;
        font-size: 14px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        line-height: 21px;
      }

      .el-button{
        float: right;
      }
    }

    &-content {
      width: 1050px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px 0;

      .product-title {
        font-size: 24px;
        font-family: SourceHanSansCN-Bold, SourceHanSansCN;
        font-weight: bold;
        color: rgba(52, 52, 52, 1);
        line-height: 36px;
        padding: 10px 0;
      }

      .product-content {
        font-size: 17px;
        font-weight: bolder;
        font-size: 14px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        line-height: 21px;
      }
    }
  }
}
</style>