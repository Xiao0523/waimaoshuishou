<template>
  <div>
    <div class="outline">
      <!-- <a href="javascript:;" class="outline__item outline__item_i_1">外观</a> -->
      <!-- <div class="contact">
        <div>
          <span>联系我们</span>
          <a href="javascript:;" >
            <div class="retract"></div>
          </a>
        </div>
      </div>-->
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <div class="contact">
              <div>
                <span>联系我们</span>
                <a href="javascript:;">
                  <div class="retract"></div>
                </a>
              </div>
            </div>
          </template>
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
            <el-dialog title="请输入验证码" :visible.sync="dialogVisible" width="20%">
              <img v-lazy="codeUrl" />
              <el-input v-model="code" placeholder="请输入验证码"></el-input>
              <span slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="consultation">确 定</el-button>
              </span>
            </el-dialog>
            <div class="consulting">
              <span>在线咨询</span>
            </div>
            <a
              class="contact_qq"
              target="_blank"
              href="http://wpa.qq.com/msgrd?v=3&uin=525941084&site=qq&menu=yes"
            >
              <img src="https://oss.my51share.com/wmss/assets/img/contact_qq.png" />
            </a>
            <div class="contact_wx">
              <img src="https://oss.my51share.com/wmss/assets/img/contact_wx.png" />
            </div>
            <div class="contact_kf">
              <img src="https://oss.my51share.com/wmss/assets/img/contact_kf.png" />
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
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
      activeNames: 1,
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
.outline {
  position: fixed;
  padding: 1px 1px;
  bottom: 100px;
  right: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
}

.contact {
  display: block;
  width: 334px;
  height: 48px;
  background: rgba(13, 27, 81, 1);
  align-items: center; // 子元素垂直居中

  & span {
    position: absolute;
    top: 14px;
    left: 39px;
    width: 64px;
    height: 16px;
    font-size: 16px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
  }

  .retract {
    position: absolute;
    top: 25px;
    right: 30px;
    width: 22px;
    height: 2px;
    background: rgba(255, 255, 255, 1);
  }
}

.way {
  display: block;
  width: 334px;
  height: 551px;

  .name_span {
    position: absolute;
    top: 80px;
    left: 29px;
    width: 32px;
    height: 16px;
    font-size: 16px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    line-height: 24px;
  }

  .name_input {
    position: absolute;
    top: 110px;
    left: 29px;
    width: 277px;
    height: 38px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(151, 151, 151, 1);
  }

  .contact_span {
    position: absolute;
    top: 178px;
    left: 29px;
    width: 64px;
    height: 16px;
    font-size: 16px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    line-height: 24px;
  }

  .contact_input {
    position: absolute;
    top: 208px;
    left: 29px;
    width: 277px;
    height: 38px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(151, 151, 151, 1);
  }

  .content_span {
    position: absolute;
    top: 276px;
    left: 29px;
    width: 64px;
    height: 16px;
    font-size: 16px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    line-height: 24px;
  }

  .content_input {
    position: absolute;
    top: 306px;
    left: 29px;
    width: 277px;
    height: 74px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(151, 151, 151, 1);
  }

  .submit_wrap {
    position: absolute;
    top: 401px;
    left: 29px;
    width: 277px;
    height: 43px;
    background: rgba(13, 27, 81, 1);
    border-radius: 8px;
  }

  .submit_wrap>>>el-button--warning {
    color: #FFF;
    background: linear-gradient(56deg, rgba(13, 27, 81, 1) 0%, rgba(13, 27, 81, 1) 100%);
    border-radius: 8px;
  }

  .submit_wrap >>> .el-button {
    float: left;
    width: 277px;
    height: 43px;
    background: linear-gradient(56deg, rgba(13, 27, 81, 1) 0%, rgba(13, 27, 81, 1) 100%);
    border-radius: 8px;
  }

  .submit_wrap>>>.el-button span {
    width: 43px;
    height: 18px;
    font-size: 18px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 27px;
  }

  .consulting {
    position: absolute;
    top: 469px;
    left: 136px;
    width: 72px;
    height: 24px;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 24px;
  }

  .contact_qq {
    position: absolute;
    top: 515px;
    left: 71px;
  }

  .contact_wx {
    position: absolute;
    top: 515px;
    left: 160px;
  }

  .contact_kf {
    position: absolute;
    top: 515px;
    left: 250px;
  }
}
</style>
