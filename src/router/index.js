import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    //component: Home
    component: () =>
      import("@/views/home/Home.vue")
  },
  {
    path: "/Company",
    name: "Company",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/company/Company.vue")
  },
  {
    path: "/News",
    name: "News",
    component: () =>
      import("@/views/news/News.vue"),
    // children: [
    //   {
    //   path: 'NewsDetails/:id',
    //   name: 'NewsDetails',
    //   component: () => import('@/views/news/NewsDetails.vue'),
    //   meta: { title: '详细' },
    // }
    // ]
  },
  {
    path: "/News/NewsDetails/:id",
    name: "NewsDetails",
    component: () =>
      import("@/views/news/NewsDetails.vue"),
      meta: { title: '详细' },
   },
   {
    path: "/case",
    name: "Case",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/case/Case.vue")
  },
  {
    path: "/product",
    name: "Product",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/product/Product.vue")
  },
  {
    path: "/goin",
    name: "Goin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/goin/Goin.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
