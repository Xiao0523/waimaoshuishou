<template>
  <div>
    <div class="message_wrap">
      <div class="title">
        立即行动！
        <br />开启 海外营销之旅！
      </div>
      <div class="subtitle">请联系您的营销顾问，获取定制报价单、客户案例及行业分析报告。</div>
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
          <el-input v-model="content" type="textarea" :autosize="{ minRows: 3, maxRows: 6}"></el-input>
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
.message_wrap {
  height: 887px;
  width: 1920px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background: url('https://oss.my51share.com/wmss/assets/img/goin/map.png') center left no-repeat;
}

.title {
  position: absolute;
  top: 201px;
  left: 812px;
  width: 310px;
  height: 96px;
  text-align: center;
  font-size: 32px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(52, 52, 52, 1);
  line-height: 48px;
}

.subtitle {
  position: absolute;
  top: 341px;
  text-align: center;
  width: 1920px;
  height: 16px;
  font-size: 16px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(52, 52, 52, 1);
  line-height: 24px;
}

.name_span {
  position: absolute;
  top: 468px;
  left: 611px;
  width: 36px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(38, 38, 38, 1);
  line-height: 27px;
}

.name_input {
  position: absolute;
  top: 507px;
  left: 611px;
  width: 354px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.contact_span {
  position: absolute;
  top: 468px;
  left: 1011px;
  width: 72px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(38, 38, 38, 1);
  line-height: 27px;
}

.contact_input {
  position: absolute;
  top: 507px;
  left: 1011px;
  width: 354px;
  height: 30px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.content_span {
  position: absolute;
  top: 591px;
  left: 611px;
  width: 72px;
  height: 18px;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(38, 38, 38, 1);
  line-height: 27px;
}

.content_input {
  position: absolute;
  top: 630px;
  left: 611px;
  width: 754px;
  height: 80px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.submit_wrap {
  position: absolute;
  top: 754px;
  left: 828px;
  width: 320px;
  height: 48px;
  background: linear-gradient(56deg, rgba(238, 132, 73, 1) 0%, rgba(216, 77, 35, 1) 100%);
  border-radius: 8px;
}

.submit_wrap>>>el-button--warning {
  color: #FFF;
  background: linear-gradient(56deg, rgba(238, 132, 73, 1) 0%, rgba(216, 77, 35, 1) 100%);
  border-radius: 8px;
}

.submit_wrap >>> .el-button {
  float: left;
  width: 320px;
  height: 48px;
  background: linear-gradient(56deg, rgba(238, 132, 73, 1) 0%, rgba(216, 77, 35, 1) 100%);
  border-radius: 8px;
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
</style>
