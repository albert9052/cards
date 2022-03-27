import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import AllCards from "@/views/AllCards.vue";

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
    component: AllCards,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
