<template>
  <div class="news_wrap">
    <div class="title_wrap">
      <div class="heading_img_1">
        <img src="@img/img_1.png" />
      </div>
      <div class="heading_text">
        <span>新闻资讯</span>
      </div>
      <div class="heading_img_2">
        <img src="@img/img_3.png" />
      </div>
    </div>
    <div>
      <div class="wrapper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,id) in swiperList" :key="id">
            <img class="swiper-img" :src="item.imgUrl" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNews",
  data() {
    return {
      swiperOptions: {
        direction: "horizontal", 
        pagination: {
          el: ".swiper-pagination"
        },
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        loop: true,
        height: "464px", // 高度设置，占满设备高度
        width: "487px",
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        }
        // Some Swiper option/callback...
      },
      swiperList: [
        { id: "0001", imgUrl: require('@img/img_news_1.png' )},
        { id: "0002", imgUrl: require('@img/img_news_1.png' ) },
        { id: "0003", imgUrl: require('@img/img_news_1.png' ) },
        { id: "0004", imgUrl: require('@img/img_news_1.png' )}
      ]
    };
  },
};
</script>

<style scoped lang="stylus">
.news_wrap {
  width: 1920px;
  height: 743px;
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
  top: 150px;
  left: 790px;
  height: 49px;
}

.heading_text {
  position: absolute;
  top: 143px;
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
  top: 150px;
  left: 1100px;
  height: 49px;
}


.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  position: absolute;
  top: 280px;
  left: 432px;
  width: 487px;
  height: 464px;
}

.swiper-slide {
  width: 487px;
  height: 464px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.swiper-img{
  width: 487px;
  height: 464px;
}
</style>
