<template>
  <div>
    <div class="service_warp">
      <div class="title">
        <div class="title_icon"></div>
        <span class="title_span">获取服务</span>
      </div>
      <div class="message">
        <span>留言咨询</span>
      </div>
      <div class="way">
        <div class="name_span">
          <span>姓名</span>
        </div>
        <div class="name_input">
          <el-input v-model="name" placeholder="请输入姓名"></el-input>
        </div>
        <div class="contact_span">
          <span>联系方式</span>
        </div>
        <div class="contact_input">
          <el-input v-model="phone" placeholder="请输入联系方式"></el-input>
        </div>
        <div class="content_span">
          <span>内容描述</span>
        </div>
        <div class="content_input">
          <el-input v-model="content" type="textarea" :autosize="{ minRows: 3, maxRows: 6}"></el-input>
        </div>
        <div class="submit_wrap">
          <el-button @click="Verification">提交</el-button>
        </div>
      </div>
      <div class="immediately">
        <span>立即联系</span>
      </div>
      <div class="immediately_way">
        <div class="immediately_way_item">
          <img
            src="https://oss.my51share.com/wmss/assets/img/service/phone.png"
            alt
            class="immediately_way_item_img"
          />
          <span class="immediately_way_item_span_1">客服电话</span>
          <span class="immediately_way_item_span_2">400-0574-966</span>
        </div>
        <div class="immediately_way_item">
          <img
            src="https://oss.my51share.com/wmss/assets/img/service/WeChat.png"
            alt
            class="immediately_way_item_img"
          />
          <span class="immediately_way_item_span_1">添加微信</span>
          <span class="immediately_way_item_span_2">18067519330</span>
        </div>
        <div class="immediately_way_item">
          <img
            src="https://oss.my51share.com/wmss/assets/img/service/CustomerService.png"
            alt
            class="immediately_way_item_img"
          />
          <span class="immediately_way_item_span_1">在线客服</span>
          <a
            class="immediately_way_item_a"
            target="_blank"
            href="http://wpa.qq.com/msgrd?v=3&uin=525941084&site=qq&menu=yes"
          >开始咨询</a>
        </div>
        <div class="immediately_way_item">
          <img
            src="https://oss.my51share.com/wmss/assets/img/service/QQ.png"
            alt
            class="immediately_way_item_img"
          />
          <span class="immediately_way_item_span_1">QQ客服</span>
          <a
            class="immediately_way_item_a"
            target="_blank"
            href="http://wpa.qq.com/msgrd?v=3&uin=525941084&site=qq&menu=yes"
          >开始咨询</a>
        </div>
      </div>
    </div>
      <el-dialog title="请输入验证码" :visible.sync="dialogVisible" width="20%">
          <img v-lazy="codeUrl" />
          <el-input v-model="code" placeholder="请输入验证码"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="consultation">确 定</el-button>
          </span>
        </el-dialog>
  </div>
</template>

<script>
import { getCode, patchConsultation } from "@/api/getCode";
export default {
  data() {
    return {
      name: "",
      phone: "",
      content: "",
      dialogVisible: false,
      codeUrl: "",
      code: ""
    };
  },
  components: {},
  methods: {
    Verification() {
      if (!this.phone) {
        this.$message({
          message: "请先输入联系方式",
          type: "warning",
          duration: 5000
        });
        return;
      }
      if (!this.name) {
        this.$message({
          message: "请先输入姓名",
          type: "warning",
          duration: 5000
        });
        return;
      }
      getCode(this.phone)
        .then(res => {
          if (res.data.code) {
            return res.data.message && this.$wran(res.data.message);
          }
          if (!res.data.data) return;
          this.codeUrl = res.data.data;
          this.dialogVisible = true;
        })
        .catch(err => {});
    },
    close() {
      this.dialogVisible = false;
    },
    consultation() {
      const data = {
        code: this.phone, //随机码
        detail: this.content, //内容
        name: this.name, //姓名
        validCode: this.code, //验证码
        way: this.phone //	联系方式
      };
      patchConsultation(data)
        .then(res => {
          if (res.data.code) {
            return res.data.message && this.$wran(res.data.message);
          }

          this.$message({
            message: res.data.message,
            type: "success",
            duration: 5000
          });
          this.dialogVisible = false;
          (this.name = ""),
            (this.phone = ""),
            (this.content = ""),
            (this.codeUrl = ""),
            (this.code = "");
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped lang="stylus">
.service_warp {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  width: 1920px;
  height: 567px;
}

.title_icon {
  position: absolute;
  top: 4px;
  left: 367px;
  width: 4px;
  height: 23px;
  background: rgba(255, 162, 83, 1);
}

.title_span {
  position: absolute;
  left: 383px;
  width: 96px;
  height: 31px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 31px;
}

.message {
  position: absolute;
  left: 367px;
  top: 102px;
  width: 96px;
  height: 31px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 31px;
}

.name_span {
  position: absolute;
  left: 369px;
  top: 194px;
  width: 36px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(52, 52, 52, 1);
  line-height: 27px;
}

.name_input {
  position: absolute;
  left: 369px;
  top: 234px;
  width: 200px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.contact_span {
  position: absolute;
  left: 600px;
  top: 194px;
  width: 72px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(52, 52, 52, 1);
  line-height: 27px;
}

.contact_input {
  position: absolute;
  left: 600px;
  top: 234px;
  width: 200px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.content_span {
  position: absolute;
  left: 369px;
  top: 310px;
  width: 72px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(52, 52, 52, 1);
  line-height: 27px;
}

.content_input {
  position: absolute;
  left: 369px;
  top: 348px;
  width: 430px;
  height: 75px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.submit_wrap >>>.el-button {
  position: absolute;
  left: 369px;
  top: 464px;
  width: 160px;
  height: 48px;
  background: linear-gradient(56deg, rgba(238, 132, 73, 1) 0%, rgba(216, 77, 35, 1) 100%);
  border-radius: 4px;
  color: #FFFFFF;
}

.immediately {
  position: absolute;
  left: 964px;
  top: 102px;
  width: 84px;
  height: 21px;
  font-size: 21px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(223, 93, 46, 1);
  line-height: 32px;
}

.immediately_way {
  position: absolute;
  left: 964px;
  top: 200px;
  width: 540px;
  height: 170px;
}

.immediately_way_item {
  position: relative;
  float: left;
  width: 200px;
  height: 50px;
  margin: 0 70px 70px 0;

  .immediately_way_item_img {
    width: 50px;
    height: 50px;
  }

  .immediately_way_item_span_1 {
    position: absolute;
    float: left;
    left: 70px;
    font-size: 16px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    line-height: 24px;
  }

  .immediately_way_item_span_2 {
    position: absolute;
    float: left;
    left: 70px;
    bottom: 2px;
    font-size: 18px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }

  .immediately_way_item_a {
    position: absolute;
    float: left;
    left: 70px;
    bottom: 2px;
    width: 72px;
    height: 18px;
    font-size: 18px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(223, 93, 46, 1);
    line-height: 27px;
    text-decoration: none;
  }

  .immediately_way_item_a:hover {
    color: #f01400;
  }
}
</style>
