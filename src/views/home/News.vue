<template>
  <div class="news_wrap">
    <div class="title_wrap">
      <div class="heading_img_1">
        <img src="https://oss.my51share.com/wmss/assets/img/img_1.png" />
      </div>
      <div class="heading_text">
        <span>新闻资讯</span>
      </div>
      <div class="heading_img_2">
        <img src="https://oss.my51share.com/wmss/assets/img/img_3.png" />
      </div>
    </div>
    <div>
      <div class="wrapper_wrap">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,id) in swiperList" :key="id">
            <!-- <img class="swiper-img" :src="item.imgUrl" /> -->
            <el-image class="swiper-img" :src="item.imgUrl" lazy></el-image>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="news_list">
        <div class="news_item" v-for="(item,index) in newsList" :key="index">
          <div class="news_item_ioc"></div>
          <div class="news_item_title">{{ item.title }}</div>
          <p class="news_item_content">{{item.content}}</p>
          <div class="news_item_date">{{ item.date }}</div>
          <div class="news_item_more">
            <router-link
              class="text-decoration"
              :to="{ name: 'NewsDetails', params: { id: item.id }}"
            >
              <span>查看详情 >></span>
            </router-link>
          </div>
        </div>
      </div>
      <router-link class="to_learn_more" :to="{ name: 'News'}">
        <span>了解更多 ></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
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
        {
          id: "0001",
          imgUrl:
            "https://oss.my51share.com/wmss/assets/img/mock/news/00004.png"
        },
        {
          id: "0002",
          imgUrl:
            "https://oss.my51share.com/wmss/assets/img/mock/news/00003.png"
        },
        {
          id: "0003",
          imgUrl: "https://oss.my51share.com/wmss/assets/img/img_news_1.png"
        }
      ],
      newsList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/mock/news.json")
        .then(res => {
          console.log(res.data);
          const list = res.data.data;
          const newsList_ = list.map(function(item) {
            let url = item.bannerUrl;
            item.bannerUrl = require("@/" + url);
            return item;
          });
          this.saveNewsList(newsList_);
          this.newsList = newsList_.slice(0, 3);
          //this.$store.dispatch('saveNewsList',this.newsList);
        })
        .catch(function(error) {
          window.console.log(error);
        });
    },
    ...mapActions(["saveNewsList"])
  }
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

.wrapper_wrap >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper_wrap {
  position: absolute;
  display: flex;
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

.swiper-img {
  width: 487px;
  height: 464px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.news_list {
  position: absolute;
  top: 272px;
  left: 960px;
  width: 500px;
  height: 420px;

  .news_item {
    float: left;
    width: 500px;
    height: 130px;
    margin: 10px 0px;

    &_ioc {
      position: absolute;
      margin-top: 10px;
      margin-left: 10px;
      width: 4px;
      height: 22px;
      background: #FFA152;
    }

    &_title {
      position: absolute;
      width: 420px;
      margin-top: 8px;
      padding-left: 25px;
      height: 26px;
      font-size: 18px;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      font-weight: bold;
      color: rgba(52, 52, 52, 1);
      line-height: 26px;
    }

    &_content {
      margin-top: 45px;
      margin-left: 25px;
      width: 479px;
      font-size: 14px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: rgba(52, 52, 52, 1);
      line-height: 23px;
      display: -webkit-box; /* 作为弹性伸缩盒子模型显示 */
      -webkit-line-clamp: 2; /* 显示的行数；如果要设置2行加...则设置为2 */
      overflow: hidden; /* 超出的文本隐藏 */
      text-overflow: ellipsis; /* 溢出用省略号 */
      -webkit-box-orient: vertical; /* 伸缩盒子的子元素排列：从上到下 */
    }

    &_date {
      float: left;
      margin-left: 25px;
      margin-bottom: 10px;
      width: 350px;
      height: 14px;
      font-size: 14px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: rgba(52, 52, 52, 1);
      line-height: 21px;
    }

    &_more {
      float: right;
      margin-bottom: 10px;
      width: 100px;
      height: 14px;
      font-size: 14px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: rgba(11, 22, 85, 1);
      line-height: 21px;

      & a {
        text-decoration: none;
        color: #0B1655;
      }
    }
  }
}

.to_learn_more {
  position: absolute;
  top: 720px;
  left: 975px;
  height: 14px;
  font-size: 14px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(11, 22, 85, 1);
  line-height: 21px;

  .to_learn_more a {
    text-decoration: none;
    color: #0B1655;
  }
}
</style>
