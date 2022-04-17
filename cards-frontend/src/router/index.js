import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import CardsPage from "@/views/CardsPage.vue";
import SignInPage from "@/views/SignInPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";

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
  {
    path: "/signin",
    name: "SignInPage",
    component: SignInPage,
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
