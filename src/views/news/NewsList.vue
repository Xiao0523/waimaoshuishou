<template>
  <div>
    <div class="news">
      <div class="news-section" v-loading="loading">
        <div class="content-nav">
          <span>新闻资讯</span>
        </div>
        <div class="news-section-content">
          <div class="content-nav-item">
            <div
              class="item-list"
              v-for="(item,index) in newsList"
              :key="index"
              v-lazy:background-image="item.bannerUrl" 
            >
              <div class="item-list-backg">
                <p class="item-list-title">{{ item.title }}</p>
                <p class="item-list-date">{{ item.date }}</p>
                <div class="item-list-more">
                  <router-link
                    class="text-decoration"
                    :to="{ name: 'NewsDetails', params: { id: item.id }}"
                  >
                    <span>查看详情 >></span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="10" :page-size="9"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      loading: true,
      newsList: []
    };
  },
  components: {},
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

          this.newsList = list.map(function(item) {
            let url = item.bannerUrl;
            item.bannerUrl = require("@/" + url);
            return item;
          });
          this.loading = false;
          console.log(this.newsList);
          //this.$store.dispatch('saveNewsList',this.newsList);
           this.saveNewsList(this.newsList);
        })
        .catch(function(error) {
          window.console.log(error);
        });
    },
     ...mapActions(['saveNewsList']),
  }
};
</script>

<style scoped lang="stylus">
* {
  margin: 0;
  padding: 0;
}

.news {
  position: relative;
  overflow: hidden;
  width: 100%;

  // height: 1677px;
  &-section {
    width: 100%;

    &-content {
      width: 1200px;
      // height: 1600px;
      margin: 0 auto;
      background-color: #fff;
    }

    .content-nav {
      width: 100%;
      height: 0px;
      text-align: center;
      margin: 96px auto;

      & span {
        text-align: center;
        font-size: 48px;
        font-family: SourceHanSansCN-Bold, SourceHanSansCN;
        font-weight: bold;
        color: rgba(43, 43, 43, 1);
        line-height: 72px;
      }
    }

    .content-nav-item {
      width: 1160px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .item-list {
        width: 360px;
        height: 425px;
        display: flex;
        // flex-direction: column;
        // justify-content: center;
        align-items: flex-end;
        margin: 10px 10px;
        border: 1px solid #15669e;
        background:center left no-repeat;
        border-radius:8px
        &:hover {
          border: 1px solid #fff;
          box-shadow: 0 0 5px 2px #bfd3e0;
          border-radius:8px
        }

        &-backg {
          width: 360px;
          height: 132px;
          background: rgba(0, 0, 0, 1);
          opacity: 0.5;

          .item-list-title {
            padding-top: 20px;
            padding-left: 30px;
            width: 300px;
            height: 56px;
            font-size: 18px;
            font-family: SourceHanSansCN-Bold, SourceHanSansCN;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 28px;
            align-items: center;
          }

          .item-list-title:hover {
            color: #e13834;
          }

          .item-list-date {
            padding-top: 30px;
            padding-left: 30px;
            width: 170px;
            height: 14px;
            font-size: 14px;
            float: left;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: rgba(198, 198, 198, 1);
            line-height: 21px;
          }

          .item-list-date :hover {
            color: #e13834;
          }

          .item-list-more {
            float: right;
            text-align: center;
            padding-top: 30px;
            width: 160px;
            height: 14px;
            font-size: 14px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: rgba(198, 198, 198, 1);
            line-height: 21px;
            // align-items: flex-end;
          }

          .item-list-more :hover {
            color: #e13834;
          }

          .item-list-more a {
            text-decoration: none;
            color: rgba(198, 198, 198, 1);
          }
        }
      }
    }
  }
}

.el-pagination {
  float: right;
  margin-top: 40px;
  margin-right: 390px;
}
</style>
