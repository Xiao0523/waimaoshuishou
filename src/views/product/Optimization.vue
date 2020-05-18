<template>
  <div>
    <div class="optimization">
      <div class="optimization-title">
        <span>优选套餐</span>
      </div>
      <div class="optimization_package package_animate_done">
        <div>
          <div class="optimization_package_item">
            <div class="package-item-i-1">
              <img v-lazy="url01" alt class="package-item-i-img" />
              <span class="package-item-i-version">商家版</span>
              <span class="package-item-i-number">立省¥3000</span>
              <el-popover placement="top-end" width="1150" trigger="click">
                 <package-details></package-details>
                <input
                  type="image"
                  :src="url05"
                  name="img"
                  class="package-item-i-drop-down"
                  slot="reference"
                />
              </el-popover>
            </div>
          </div>
          <div class="optimization_package_item">
            <div class="package-item-i-2">
              <img v-lazy="url02" alt class="package-item-i-img" />
              <span class="package-item-i-version">商务版</span>
              <span class="package-item-i-number">立省¥5000</span>
              <el-popover placement="top-end" width="1150" trigger="click" >
                 <package-details></package-details>
                <input
                  type="image"
                  :src="url05"
                  name="img"
                  class="package-item-i-drop-down"
                  slot="reference"
                />
              </el-popover>
            </div>
          </div>
          <div class="optimization_package_item">
            <div class="package-item-i-3">
              <img v-lazy="url03" alt class="package-item-i-img" />
              <span class="package-item-i-version">精英版</span>
              <span class="package-item-i-number">立省¥6000</span>
              <el-popover placement="top-end" width="1150" trigger="click" >
                 <package-details></package-details>
                <input
                  type="image"
                  :src="url05"
                  name="img"
                  class="package-item-i-drop-down"
                  slot="reference"
                />
              </el-popover>
            </div>
          </div>
          <div class="optimization_package_item">
            <div class="package-item-i-4">
              <img v-lazy="url04" alt class="package-item-i-img" />
              <span class="package-item-i-version">领导版</span>
              <span class="package-item-i-number">立省¥7000</span>
              <el-popover placement="top-end" width="1150" trigger="click">
                 <package-details></package-details>
                <input
                  type="image"
                  :src="url05"
                  name="img"
                  class="package-item-i-drop-down"
                  slot="reference"
                />
              </el-popover>
            </div>
          </div>
        </div>
      </div>
      <div class="optimization-leader package_animate_done">
        <img v-lazy="url06" alt class="package-item-i-leader" />
        <span class="package-item-leader-version">领袖版</span>
        <span class="package-item-leader-number">立省¥88800</span>
        <el-popover placement="top-end" width="1150" trigger="click" >
          <package-details></package-details>
          <input
            type="image"
            :src="url05"
            name="img"
            class="package-item-leader-drop-down"
            slot="reference"
          
          />
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import PackageDetails from "@/components/PackageDetails.vue";
export default {
  data() {
    return {
      url01: require("@/assets/img/optimization_item_i_1.png"),
      url02: require("@/assets/img/optimization_item_i_2.png"),
      url03: require("@/assets/img/optimization_item_i_3.png"),
      url04: require("@/assets/img/optimization_item_i_4.png"),
      url05: require("@/assets/img/optimization_drop-down.png"),
      url06: require("@/assets/img/optimization_item_i_leader.png"),
     
    };
  },
  components: {
    PackageDetails
  },
  methods: {
    // unfold() {
    //   this.visible = true;
    // }
  }
};
</script>

<style scoped lang="stylus">
.optimization {
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  height: 830px;
  width: 1920px;

  &-title {
    float: left;
    position: absolute;
    top: 85px;
    left: 775px;
    background: url('https://oss.my51share.com/wmss/assets/img/product_service.png') center left no-repeat;
    width: 370px;
    height: 70px;

    & span {
      position: absolute;
      top: 21px;
      padding-left: 113px;
      width: 144px;
      height: 47px;
      font-size: 36px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #343434;
      line-height: 47px;
    }
  }
}

.optimization_package {
  position: absolute;
  width: 930px;
  height: 323px;
  bottom: 236px;
  left: 360px;
}

.optimization_package_item {
  float: left;
  width: 215px;
  height: 323px;
  // border: 1px solid #D97173;
  border-radius: 3px;
  text-align: center;
  line-height: 14px;
  font-size: 14px;
  margin: 0 15px 15px 0;
  color: #fff;
  background: url('https://oss.my51share.com/wmss/assets/img/optimization_item_background.png') center left no-repeat;
  transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
}

.optimization_package_item:hover {
  transform: scale(1.05);
  border-color: #fff;
}

.package-item-i-img {
  padding: 32px 56px 0px 56px;
}

.package-item-i-version {
  padding: 32px 66px 0px 66px;
  float: left;
  width: 84px;
  height: 37px;
  font-size: 28px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 37px;
}

.package-item-i-number {
  padding: 32px 63px 0px 64px;
  float: left;
  width: 89px;
  height: 24px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(250, 100, 0, 1);
  line-height: 24px;
}

.package-item-i-drop-down {
  margin: 23px 100px 20px 100px;
  width: 16px;
  height: 16px;
  z-index: 1;
}

.package_animate_done {
  opacity: 1;
  transform: scale(1);
  transition: all 1s 1.5s;
}

.optimization-leader {
  position: absolute;
  top: 273px;
  float: right;
  right: 360px;
  width: 280px;
  height: 378px;
  background: rgba(144, 31, 31, 1);
  border-radius: 8px;
  transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
}

.optimization-leader:hover {
  transform: scale(1.05);
  border-color: #fff;
}

.package-item-i-leader {
  position: absolute;
  top: 43px;
  left: 68px;
  width: 134px;
  height: 134px;
}

.package-item-leader-version {
  position: absolute;
  top: 213px;
  left: 93px;
  width: 84px;
  height: 37px;
  font-size: 28px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 37px;
}

.package-item-leader-number {
  position: absolute;
  top: 268px;
  left: 85px;
  width: 100px;
  height: 24px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: rgba(232, 232, 232, 1);
  line-height: 24px;
}

.package-item-leader-drop-down {
  position: absolute;
  bottom: 43px;
  left: 130px;
}
</style>
