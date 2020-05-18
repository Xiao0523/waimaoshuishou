<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper-slide slide-one">
        <el-button  @click="toBottom()">立即咨询</el-button>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-two"></swiper-slide>
      <swiper-slide class="swiper-slide slide-three"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        loop: true,
        height: "901px", // 高度设置，占满设备高度
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    //this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    toBottom() {
      // 滚动内容的坐标位置0,50000：
      window.scrollTo(0, 50000);
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper >>> .el-button {
  float: left;
  width: 248px;
  height: 73px;
  /* margin-right:608px; */
  /* padding:10px 5px 15px 20px; */
  margin-top: 395px;
  /* margin-bottom:233px; */
  margin-left: 1064px;
  /* padding:  595px  1064px; */
  /* margin:695px 1065px 233px 608px; */
  background: linear-gradient(51deg, rgba(255, 199, 123, 1) 0%, rgba(255, 149, 69, 1) 100%);
  border-radius: 41px;
  font-size: 24px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 31px;
}

.wrapper {
  overflow: hidden;
  width: 1920px;
  height: 910;
}

.swiper-slide {
  height: 900px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.slide-one {
  background: url('https://video.my51share.com/image/default/03C586A3AD6F4DF091CCECA2D7431071-6-2.png') no-repeat center;
  background-size: cover;
}

.slide-two {
  background: url('https://video.my51share.com/image/default/3AD4D7680C304244B83865F916DDEDA0-6-2.png') no-repeat center;
  background-size: cover;
}

.slide-three {
  background: url('https://video.my51share.com/image/default/E19DBAB404A641CA9AD8E2061F178302-6-2.png') no-repeat center;
  background-size: cover;
}
</style>