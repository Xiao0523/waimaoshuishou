<template>
  <div>
    <div class="head">
      <div class="head_title">
        <span>阿里巴巴国际站代运营</span>
        <div class="head_title_background"></div>
      </div>
      <div class="head_cost">
        <span>合作费用：19800/年</span>
      </div>
      <div class="head_equal">
        <span>
          约等于 &nbsp;
          <b>&nbsp; ¥ 54 /天</b>
        </span>
      </div>
      <div class="demand">
        <div class="demand_title">
          <img src="@img/alibaba_demand_title.png" alt />
          <span>企业面临的B2B平台运营挑战及需求</span>
        </div>
        <div class="demand_item_i_1">
          <img src="@img/alibaba_demand_1.png" alt />
          <span>缺少专业的运营团队（有限的管理经验与精力，有限的成本预算）</span>
          <span>VS项目式运营，成熟团队（专业团队安排，高效流程化，成本低）</span>
        </div>
        <div class="demand_item_i_2">
          <img src="@img/alibaba_demand_2.png" alt />
          <span>缺少创意发挥，团队受限（单个运营人员只能实现基本的维护更</span>
          <span>新）VS提供完善的运营维护（保持与最新资讯和技术同步）</span>
        </div>
        <div class="demand_item_i_3">
          <img src="@img/alibaba_demand_3.png" alt />
          <span>运营需要整体的把控（个人的专业度不够，专业性低）VS活动策</span>
          <span>划，专业性高（专业营销运营，有丰富的经验和创意积累）</span>
        </div>
        <div class="demand_item_i_4">
          <img src="@img/alibaba_demand_4.png" alt />
          <span>缺少企业推广资源（没有丰富的资源推广，需要尝试摸索，见效</span>
          <span>慢）VS整合多家运营渠道资源（形成异业传播的效果，见效快）</span>
        </div>
      </div>
      <div class="plan">
        <div class="plan_title">
          <div class="plan_title_img"></div>
          <span>外贸水手提供一站式B2B平台运营解决方案</span>
        </div>
        <div class="plan_item_i_1">
          <img src="@img/alibaba_plan_1.png" alt />
          <span>市场分析（数据调研，精准选品，全球商机分析，蓝海市场定位，建及入仓、补仓跟进）</span>
        </div>
        <div class="plan_item_i_2">
          <img src="@img/alibaba_plan_2.png" alt />
          <span>店铺建设（账户申请、店铺排版，产品、品牌VIS设计，商标注册、品牌备案）</span>
        </div>
        <div class="plan_item_i_3">
          <img src="@img/alibaba_plan_3.png" alt />
          <span>店铺运营（产品上架、产品优化，店铺内促销方案策划及执行）</span>
        </div>
        <div class="plan_item_i_4">
          <img src="@img/alibaba_plan_4.png" alt />
          <span>缺少企业推广资源（没有丰富的资源推广，需要尝试摸索，见效慢）</span>
          <span>VS整合多家运营渠道资源（形成异业传播的效果，见效快）</span>
        </div>
        <div class="plan_item_i_5">
          <img src="@img/alibaba_plan_5.png" alt />
          <span>数据分析（海外市场及行业竞争分析，运营数据及客户行为分析，提高销量、好评）</span>
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
.head {
  margin: 0 360px;
  position: relative;
  overflow: hidden;
  height: 1000px;
  //width: 1920px;

  &_title {
    position: absolute;
    top: 47px;
    left: 420px;
    width: 360px;
    height: 47px;
    font-size: 36px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 47px;

    &_background {
      text-align: center;
      margin: -10px auto;
      width: 190px;
      height: 8px;
      background: rgba(255, 162, 83, 1);
    }
  }

  &_cost {
    position: absolute;
    margin: 144px 503px;
    width: 210px;
    height: 27px;
    font-size: 21px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }

  &_equal {
    position: absolute;
    margin: 186px 528px;
    width: 155px;
    height: 37px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 21px;
  }

  &_equal b {
    padding-left: 10px;
    font-weight: normal;
    color: #FA6400;
    font-size: 24px;
  }
}

.demand_title {
  position: absolute;
  top: 375px;
  width: 350px;
  height: 28px;

  & img {
    width: 5px;
    height: 24px;
  }

  & span {
    padding-left: 10px;
    padding-top: -5px;
    width: 333px;
    height: 27px;
    font-size: 21px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }
}

.demand_item_i_1 {
  position: absolute;
  top: 454px;
  width: 498px;
  height: 97px;

  & img {
    width: 27px;
    height: 31px;
  }

  & span {
    width: 498px;
    height: 97px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }
}

.demand_item_i_2 {
  position: absolute;
  top: 550px;
  width: 498px;
  height: 97px;

  & img {
    width: 27px;
    height: 31px;
  }

  & span {
    width: 498px;
    height: 97px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }
}

.demand_item_i_3 {
  position: absolute;
  top: 658px;
  width: 498px;
  height: 97px;

  & img {
    width: 27px;
    height: 31px;
  }

  & span {
    width: 498px;
    height: 61px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }
}

.demand_item_i_4 {
  position: absolute;
  top: 769px;
  width: 498px;
  height: 61px;

  & img {
    width: 27px;
    height: 31px;
  }

  & span {
    width: 498px;
    height: 97px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(52, 52, 52, 1);
    line-height: 27px;
  }
}

.plan {
  position: absolute;
  top: 328px;
  left: 620px;
  width: 580px;
  height: 582px;
  background: rgba(255, 162, 83, 1);
  border-radius: 10px;

  &_title_img {
    position: absolute;
    top: 47px;
    left: 44px;
    width: 4px;
    height: 23px;
    background: rgba(255, 255, 255, 1);
  }

  &_title span {
    position: absolute;
    top: 42px;
    left: 60px;
    width: 399px;
    height: 27px;
    font-size: 21px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 27px;
  }

  .plan_item_i_1 {
    position: absolute;
    top: 125px;
    left: 47px;
    width: 498px;
    height: 97px;

    & img {
      width: 27px;
      height: 31px;
    }

    & span {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(255, 255, 255, 1);
      line-height: 27px;
    }
  }

  .plan_item_i_2 {
    position: absolute;
    top: 217px;
    left: 47px;
    width: 498px;
    height: 97px;

    & img {
      width: 27px;
      height: 31px;
    }

    & span {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(255, 255, 255, 1);
      line-height: 27px;
    }
  }

  .plan_item_i_3 {
    position: absolute;
    top: 308px;
    left: 47px;
    width: 498px;
    height: 97px;

    & img {
      width: 27px;
      height: 31px;
    }

    & span {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(255, 255, 255, 1);
      line-height: 27px;
    }
  }

  .plan_item_i_4 {
    position: absolute;
    top: 380px;
    left: 47px;
    width: 498px;
    height: 97px;

    & img {
      width: 27px;
      height: 31px;
    }

    & span {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(255, 255, 255, 1);
      line-height: 27px;
    }
  }

  .plan_item_i_5 {
    position: absolute;
    bottom: 20px;
    left: 47px;
    width: 498px;
    height: 97px;

    & img {
      width: 27px;
      height: 31px;
    }

    & span {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(255, 255, 255, 1);
      line-height: 27px;
    }
  }
}
</style>
