<template>
  <swiper class="swiper" ref="swiper" :options="swiperOption">
    <swiper-slide  v-for="(item,id) in swiperList" :key="id">
      <div class="swiper-slide-img">
        <img v-lazy="item.url" alt />
      </div>
      <p class="swiper-slide-title">{{item.title}}</p>
      <el-popover placement="bottom" width="300" trigger="hover" :content="item.content">
        <p class="swiper-slide-content" slot="reference" v-html="item.content"></p>
      </el-popover>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import axios from "axios";
export default {
  name: "swiper-example-change-direction",
  title: "Change direction",
  components: {},
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          resize: () => {
           
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960 ? "vertical" : "horizontal"
            );
          }
        }
      },
      swiperList: [],
      loading: true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/mock/case.json")
        .then(res => {
          console.log(res.data);
          const list = res.data.data;
          this.swiperList = list.map(function(item) {
            let url = item.url;
            item.url = require("@/" + url);
            return item;
          });
        })
        .catch(function(error) {
          window.console.log(error);
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.swiper {
  margin: 0px 396px;
  height: 700px;
}

.swiper-slide {
  height: 555px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 17px 0px rgba(0, 0, 0, 0.1);

  &-img {
    height: 245px;
  }

  &-title {
    float: right;
    position: absolute;
    top: 273px;
    left: 29px;
    width: 311px;
    height: 61px;
    font-size: 16px;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }

  .el-popover {
    float: right;
    position: absolute;
    top: 340px;
    left: 29px;
  }

  &-content {
    float: right;
    position: absolute;
    top: 340px;
    left: 29px;
    width: 311px;
    height: 159px;
    font-size: 16px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
    display: -webkit-box; /* 作为弹性伸缩盒子模型显示 */
    -webkit-line-clamp: 6; /* 显示的行数；如果要设置2行加...则设置为2 */
    overflow: hidden; /* 超出的文本隐藏 */
    text-overflow: ellipsis; /* 溢出用省略号 */
    -webkit-box-orient: vertical; /* 伸缩盒子的子元素排列：从上到下 */
  }
}

// .swiper-button-prev {
//   left: 450px;
//   color: #000;
//   transform: translateY(-50%);
// }

// .swiper-button-next {
//   left: 550px;
//   color: #000;
//   transform: translateY(-50%);
// }
</style>