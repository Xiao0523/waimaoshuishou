<template>
  <section class="footer">
    <div class="footer-content">
      <ul class="content-nav">
        <li>
          <p>服务</p>
          <span>多平台多账号广告投放</span>
          <span>Google搜索排名</span>
          <span>国外搜索引擎优化</span>
          <span>国际行业网站推广</span>
          <span>企业外贸网站建设服务</span>
          <span>企业商务微站</span>
        </li>
        <li>
          <p>&nbsp;</p>
          <br />
          <span>商业视频录制</span>
          <span>海关数据</span>
          <span>企业邮箱服务</span>
          <span>全国采购商名录</span>
          <span>询盘对接推送转化</span>
          <span>代理货代服务</span>
        </li>
        <li>
          <p>&nbsp;</p>
          <br />
          <span>海陆空多项目翻译业务</span>
          <span>海外社交平台代运营</span>
          <span>行业展会分享推广</span>
          <span>功能模块</span>
        </li>
        <li>
          <p>联系我们</p>
          <span>电话：18067519330</span>
          <span>电话：400-0574-966</span>
          <span>地址: 宁波市鄞州区南部商务区</span>
          <span>地址:海运大厦6楼</span>
          <span>邮箱: sales3@yishun2d.com</span>
        </li>
      </ul>
      <div class="public">
        <img src="https://oss.my51share.com/wmss/assets/imghome_public.png" alt />
        <span>公众号</span>
      </div>
      <div class="wechat">
        <img class="img_public" src="https://oss.my51share.com/wmss/assets/imghome_wechat.png" alt />
        <span>微信</span>
      </div>
    </div>
    <div class="straightline" style="border:1px solid #979797"></div>
    <div class="copyright">
      <span>© 2019 宁波一顺二维文化传媒有限公司 - All Rights Reserved</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeFooter",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.footer {
  width: 1920px;
  height: 328px;
  margin: -5px auto;
  position: relative;
  overflow: hidden;
  background: rgba(27, 27, 30, 1);

  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

    .content-nav {
      display: flex;
      justify-content: space-around;

      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        // justify-content: center;
        align-items: flex-start;

        p {
          font-size: 16px;
          font-family: SourceHanSansCN-Bold, SourceHanSansCN;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
        }

        span {
          font-size: 12px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          color: rgba(255, 255, 255, 1);
          line-height: 23px;
        }
      }
    }
  }
}

.public img {
  position: absolute;
  top: 62px;
  left: 1219px;
  width: 121px;
  height: 121px;
}

.public span {
  position: absolute;
  top: 208px;
  left: 1259px;
  width: 42px;
  height: 14px;
  font-size: 14px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}

.wechat img {
  position: absolute;
  top: 62px;
  left: 1385px;
  width: 121px;
  height: 121px;
}

.wechat span {
  position: absolute;
  top: 208px;
  left: 1432px;
  width: 28px;
  height: 14px;
  font-size: 14px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}

.straightline {
  position: absolute;
  top: 249px;
  left: 362px;
  width: 1200px;
}

.copyright {
  position: absolute;
  top: 284px;
  left: 429px;
  width: 580px;
  height: 14px;
  font-size: 14px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  //font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}
</style>
