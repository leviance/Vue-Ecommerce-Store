import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import Other from "../views/Other.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:type",
    name: "Product",
    component: Product,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/other",
    name: "Other",
    component: Other,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
