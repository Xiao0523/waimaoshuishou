<template>
  <div class="consulting_wrap">
    <div class="heading_1">
      <span>立即行动！</span>
    </div>
    <div class="heading_2">
      <span>开启海外营销之旅！</span>
    </div>
    <div class="subheading">
      <span>请联系您的营销顾问，获取定制报价单、客户案例及行业分析报告。</span>
    </div>
    <div class="name_wrap">
      <div class="name_span">
        <span>姓名</span>
      </div>
      <div class="name_input">
        <el-input v-model="name" placeholder="请输入姓名"></el-input>
      </div>
    </div>
    <div class="contact_wrap">
      <div class="contact_span">
        <span>联系方式</span>
      </div>
      <div class="contact_input">
        <el-input v-model="phone" placeholder="请输入联系方式"></el-input>
      </div>
    </div>
    <div class="content_wrap">
      <div class="content_span">
        <span>内容描述</span>
      </div>
      <div class="content_input">
        <el-input
          v-model="content"
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 4}"
          :resize="none"
          :autocomplete="on"
        ></el-input>
      </div>
    </div>
    <div class="submit_wrap">
      <el-button size="medium" @click="Verification">提交</el-button>
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
  name: "HomeConsulting",
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
.consulting_wrap {
  position: relative;
  overflow: hidden;
  width: 1920px;
  height: 678px;
  margin: 0px auto;
  background: url('https://video.my51share.com/image/default/136BD33D2BF743A1B650F2BD29D689D0-6-2.png') no-repeat center left;
}

.heading_1 {
  position: absolute;
  top: 60px;
  left: 840px;
  width: 296px;
  height: 48px;
  text-align: center;
  font-size: 32px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 48px;
}

.heading_2 {
  position: absolute;
  top: 108px;
  left: 840px;
  width: 296px;
  height: 48px;
  text-align: center;
  font-size: 32px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 48px;
}

.subheading {
  position: absolute;
  top: 200px;
  left: 748px;
  width: 480px;
  height: 16px;
  text-align: center;
  font-size: 16px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}

.name_span {
  position: absolute;
  top: 284px;
  left: 611px;
  width: 36px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 27px;
}

.name_input {
  position: absolute;
  top: 323px;
  left: 611px;
  width: 354px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.contact_span {
  position: absolute;
  top: 284px;
  left: 1011px;
  width: 72px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 27px;
}

.contact_input {
  position: absolute;
  top: 323px;
  left: 1011px;
  width: 354px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.content_span {
  position: absolute;
  top: 407px;
  left: 611px;
  width: 72px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 27px;
}

.content_input {
  position: absolute;
  top: 446px;
  left: 611px;
  width: 754px;
  height: 80px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.submit_wrap {
  position: absolute;
  top: 570px;
  left: 828px;
  width: 320px;
  height: 48px;
  // background: linear-gradient(56deg, rgba(238, 132, 73, 1) 0%, rgba(216, 77, 35, 1) 100%);
  background: rgba(216, 77, 35, 1);
  border-radius: 8px;
  border: rgba(216, 77, 35, 1);
}

.submit_wrap>>>el-button--warning {
  color: #FFF;
  background: linear-gradient(56deg, rgba(238, 132, 73, 1) 0%, rgba(216, 77, 35, 1) 100%);
  // background: rgba(216, 77, 35, 1);
  border-radius: 8px;
}

.submit_wrap >>> .el-button {
  float: left;
  width: 320px;
  height: 48px;
  background: linear-gradient(56deg, rgba(238, 132, 73, 1) 0%, rgba(216, 77, 35, 1) 100%);
  // background: rgba(216, 77, 35, 1);
  border-radius: 8px;
  border: 8px rgba(216, 77, 35, 1);
}

.submit_wrap>>>.el-button span {
  width: 36px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 27px;
}

.el-textarea__inner {
  height: 81px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.el-dialog__body {
  padding: 10px 10px;
}
</style>
