import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import CardsPage from "@/views/CardsPage.vue";

const routes = [
  {
    path: "",
    name: "Root",
    redirect: "landingpage",
  },
  {
    path: "/landingpage",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/allcards",
    name: "AllCards",
    component: CardsPage,
  },
  {
    path: "/mycards",
    name: "MyCards",
    component: CardsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
