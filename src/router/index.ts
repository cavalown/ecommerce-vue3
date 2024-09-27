import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Products from "../Pages/Products.vue";
import About from "../Pages/About.vue";
import FAQ from "../Pages/FAQ.vue";
import ProductDetail from "../Pages/ProductDetail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products, children: [{ path: ":id", component: ProductDetail }] },
  { path: "/about", component: About },
  { path: "/faq", component: FAQ },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
