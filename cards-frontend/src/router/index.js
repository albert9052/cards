import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import CardsPage from "@/views/CardsPage.vue";
import SignInPage from "@/views/SignInPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import AdminPage from "@/views/AdminPage.vue";

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
  {
    path: "/settings",
    name: "SettingsPage",
    component: SettingsPage,
  },
  {
    path: "/supersecretpage",
    name: "AdminPage",
    component: AdminPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
