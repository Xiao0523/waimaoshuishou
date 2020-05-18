import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// import style
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'e3e30593eb10d4a237f224c85f111e27',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require('./assets/img/error.png'),
  //加载时显示的GIF图
  loading: require('./assets/img/loading.gif'),
  //尝试加载几次
  attempt: 1
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
