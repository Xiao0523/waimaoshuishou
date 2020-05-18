<template>
  <div>
    <div class="bottom_wrap">
      <div class="tilte">
        <span>阿里巴巴国际站代运营</span>
      </div>
      <div class="subtitle">
        <span>国际站入驻服务商，专业外贸电商营销运营团队和多年国外行业需求渗透，经验全力融汇到您的国际站店铺中，专业人做专业事，让您外贸生意轻松上路</span>
      </div>
      <div class="screen"></div>
      <div class="oval">
        <div>
          <div class="screen_point screen_point_i_1">超强数据分析，超级运营体系</div>
          <div class="screen_point_i_1_kong"></div>
          <div class="point point_i_1"></div>
        </div>
        <div>
          <div class="screen_point screen_point_i_2">资深运营团队，1对1客服对接</div>
          <div class="screen_point_i_1_kong"></div>
          <div class="point point_i_2"></div>
        </div>
        <div>
          <div class="screen_point screen_point_i_3">市场分析，产品精准定位</div>
          <div class="screen_point_i_3_kong"></div>
          <div class="point point_i_3"></div>
        </div>
        <div>
          <div class="screen_point screen_point_i_4">吸睛震撼视觉，攻心营销文案</div>
          <div class="screen_point_i_1_kong"></div>
          <div class="point point_i_4"></div>
        </div>
        <div>
          <div class="screen_point screen_point_i_5">爆款打造，销量迅速提升</div>
          <div class="screen_point_i_1_kong"></div>
          <div class="point point_i_5"></div>
        </div>
      </div>
      <div class="process">
        <div class="process_tilte">
          <div class="process_tilte_img"></div>
          <span>合作流程</span>
        </div>
        <div class="process_subtitle">
          <span>我们与您一起推进项目并协作，共同达到目标</span>
        </div>
        <div class="process_figure">
          <div class="process_figure_item item_i_1">
            <p>
              1.确定合作
              <br />（了解公司运营能力）
            </p>
          </div>
          <div class="process_figure_item item_i_2">
            <p>
              2.签订协议
              <br />（双方签订合作协议）
            </p>
          </div>
          <div class="process_figure_item item_i_3">
            <p>
              3.项目探讨
              <br />（分配项目技运营小组
            </p>
          </div>
          <div class="process_figure_item item_i_4">
            <p>
              4.数据分析
              <br />（调研产品行业数据）
            </p>
          </div>
          <div class="process_figure_item item_i_5">
            <p>
              5.始操作
              <br />（运营小组开始操作）
            </p>
          </div>
          <div class="process_figure_item item_i_6">
            <p>
              6.见证效果
              <br />（定期提供项目成果）
            </p>
          </div>
          <div class="item_i_7">
            <p>
              7.长期合作
              <br />（新增销量稳定提升）
            </p>
          </div>
        </div>

        <div class="process_arrow">
          <img src="@img/alibaba_arrow_1.png" class="process_arrow_i_1" />
          <img src="@img/alibaba_arrow_1.png" class="process_arrow_i_2" />
          <img src="@img/alibaba_arrow_1.png" class="process_arrow_i_3" />
          <img src="@img/alibaba_arrow_1.png" class="process_arrow_i_4" />
          <img src="@img/alibaba_arrow_1.png" class="process_arrow_i_5" />
          <img src="@img/alibaba_arrow_2.png" class="process_arrow_i_6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.bottom_wrap {
  width: 1920px;
  height: 1215px;
  position: relative;
  overflow: hidden;

  .tilte {
    position: absolute;
    width: 1920px;
    height: 37px;
    top: 52px;
    font-size: 28px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(52, 52, 52, 1);
    line-height: 37px;
    text-align: center;
  }

  .subtitle {
    position: absolute;
    top: 118px;
    left: 534px;
    width: 852px;
    height: 72px;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 36px;
    text-align: center;
  }

  .screen {
    position: absolute;
    top: 264px;
    left: 792px;
    width: 337px;
    height: 337px;
    background: url('https://oss.my51share.com/wmss/assets/img/alibaba_oval.png');
  }

  .screen_point {
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 24px;
  }

  .point {
    width: 12px;
    height: 12px;
    background: rgba(255, 162, 83, 1);
  }

  .screen_point_i_1 {
    position: absolute;
    top: 362px;
    left: 589px;
    z-index: 1;
  }

  .point_i_1 {
    position: absolute;
    top: 369px;
    left: 560px;
  }

  .screen_point_i_2 {
    position: absolute;
    // width:256px;
    top: 537px;
    left: 658px;
    z-index: 1;
    text-align: left;
    background: rgba(255, 255, 255, 1);
  }

  .point_i_2 {
    position: absolute;
    top: 545px;
    left: 625px;
  }

  .screen_point_i_3 {
    position: absolute;
    top: 284px;
    left: 1070px;
    z-index: 1;
    text-align: left;
    background: rgba(255, 255, 255, 1);
  }

  .point_i_3 {
    position: absolute;
    top: 290px;
    left: 1050px;
  }

  .screen_point_i_4 {
    position: absolute;
    top: 401px;
    left: 1152px;
    z-index: 1;
    text-align: left;
    background: rgba(255, 255, 255, 1);
  }

  .point_i_4 {
    position: absolute;
    top: 408px;
    left: 1120px;
  }

  .screen_point_i_5 {
    position: absolute;
    top: 537px;
    left: 1100px;
    z-index: 1;
    text-align: left;
    background: rgba(255, 255, 255, 1);
  }

  .point_i_5 {
    position: absolute;
    top: 544px;
    left: 1072px;
  }
}

.process_tilte_img {
  position: absolute;
  left: 367px;
  top: 715px;
  width: 4px;
  height: 23px;
  background: rgba(255, 162, 83, 1);
}

.process_tilte span {
  position: absolute;
  left: 383px;
  top: 715px;
  width: 84px;
  height: 27px;
  font-size: 21px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 27px;
}

.process_subtitle span {
  position: absolute;
  left: 383px;
  top: 763px;
  width: 320px;
  height: 21px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgba(52, 52, 52, 1);
  line-height: 21px;
}

.process_figure_item {
  left: 383px;
  background: url('https://oss.my51share.com/wmss/assets/img/alibaba_rectangular_small.png');
  height: 90px;
  width: 186px;
  text-align: center;

  & p {
    float: left;
    text-align: center;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 21px;
  }
}

.item_i_1 {
  position: absolute;
  top: 877px;
  left: 370px;
}

.item_i_2 {
  position: absolute;
  top: 877px;
  left: 683px;
}

.item_i_3 {
  position: absolute;
  top: 877px;
  left: 983px;
}

.item_i_4 {
  position: absolute;
  top: 1011px;
  left: 420px;
}

.item_i_5 {
  position: absolute;
  top: 1011px;
  left: 720px;
}

.item_i_6 {
  position: absolute;
  top: 1011px;
  left: 1006px;
}

.item_i_7 {
  position: absolute;
  top: 877px;
  right: 437px;
  background: url('https://oss.my51share.com/wmss/assets/img/alibaba_rectangular_big.png');
  width: 211px;
  height: 224px;

  & p {
    margin-top: 91px;
    margin-left: 26px;
    width: 160px;
    height: 42px;
    float: left;
    text-align: center;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 21px;
  }
}
  .process_arrow_i_1 {
    position: absolute;
    top: 919px;
    left: 605px;
  }

  .process_arrow_i_2 {
    position: absolute;
    top: 919px;
    left: 916px;
  }

  .process_arrow_i_3 {
    position: absolute;
    top: 1048px;
    left: 364px;
  }

  .process_arrow_i_4 {
    position: absolute;
    top: 1048px;
    left: 644px;
  }

  .process_arrow_i_5 {
    position: absolute;
    top: 1048px;
    left: 944px;
  }

  .process_arrow_i_6 {
    position: absolute;
    top: 1033px;
    left: 1208px;
  }
</style>
