import { createApp, h } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Landing from "./pages/Landing/Landing.vue";
import Careers from "./pages/Careers/Careers.vue";
import Research from "./pages/Researches/Researches.vue";
import Product from "./pages/Product/Product.vue";
import Cases from "./pages/Cases/Cases.vue";
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
  faLinkedin,
  faXTwitter,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faXTwitter, faBluesky);

const routes = [
  {
    path: "/",
    component: CookiePageWrapper,
    children: [
      { path: "/", component: Landing },
      { path: "/careers", component: Careers },
      { path: "/research", component: Research },
      { path: "/products", component: Product },
      { path: "/cases", component: Cases },
      { path: "/privacy", component: PrivacyPolicy },
      { path: "/about", component: About },
      { path: "/cookies", component: CookiePolicy },
      { path: "/contact", component: GetInTouchPage },
    ],
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

const app = createApp({
  render: () => h(App),
});

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
// app.use(VueCarousel);
app.mount("#app");
