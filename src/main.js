import { createApp, h } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Landing from "./pages/Landing/Landing.vue";
import Careers from "./pages/Careers/Careers.vue";
import Research from "./pages/Researches/Researches.vue";
import Product from "./pages/Product/Product.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.vue";
import About from "./pages/About/About.vue";
import CookiePolicy from "./pages/CookiePolicy/CookiePolicy.vue";
import GetInTouchPage from "./pages/GetInTouch/GetInTouchPage.vue";

import CookiePageWrapper from "./components/CookiePageWrapper/CookiePageWrapper.vue";

import "vue3-carousel/dist/carousel.css";

import App from "./App.vue";

import "./styles/app.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBluesky,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import HealthcareCases from "@/pages/Cases/HealthcareCases.vue";
import EcommerceCases from "@/pages/Cases/EcommerceCases.vue";
import GovernmentCases from "@/pages/Cases/GovernmentCases.vue";
import GamingCases from "@/pages/Cases/GamingCases.vue";
import HealthcareLanding from "@/pages/Cases/HealthcareLanding.vue";
import EcommerceLanding from "@/pages/Cases/EcommerceLanding.vue";
import i18n from "./locales";

library.add(faLinkedin, faXTwitter, faBluesky);

const routes = [
  {
    path: "/:lang(en|es|jp)?",
    component: CookiePageWrapper,
    children: [
      { path: "", component: Landing },
      { path: "careers", component: Careers },
      { path: "research", component: Research },
      { path: "products", component: Product },
      { path: "cases/healthcare", component: HealthcareCases },
      { path: "cases/e-commerce", component: EcommerceCases },
      { path: "cases/government", component: GovernmentCases },
      { path: "cases/gaming", component: GamingCases },
      { path: "cases/healthcare-landing", component: HealthcareLanding },
      { path: "cases/ecommerce-landing", component: EcommerceLanding },
      { path: "privacy", component: PrivacyPolicy },
      { path: "about", component: About },
      { path: "cookies", component: CookiePolicy },
      { path: "contact", component: GetInTouchPage },
    ],
  },
  {
    path: "/",
    redirect: "/en",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/en",
  },
  // ...jobs.map((job) => ({
  //   path: `/careers/${job.key}`, component: Job, props: { jobDetails: job },
  // }))
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

// Añadir un guard de navegación global
router.beforeEach((to, from, next) => {
  const langPattern = /^\/(en|es|jp)/;
  if (!langPattern.test(to.path)) {
    // Si la ruta no tiene un prefijo de idioma, redirigir a la misma ruta con "en"
    next({ path: `/en${to.path}` });
  } else {
    next();
  }
});

const app = createApp({
  render: () => h(App),
});

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(i18n);
// app.use(VueCarousel);
app.mount("#app");
