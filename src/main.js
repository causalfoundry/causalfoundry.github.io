import {createApp, h} from "vue";
import {createRouter, createWebHistory} from "vue-router";

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

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {faBluesky, faLinkedin, faXTwitter,} from "@fortawesome/free-brands-svg-icons";
import HealthcareCases from "@/pages/Cases/HealthcareCases.vue";
import EcommerceCases from "@/pages/Cases/EcommerceCases.vue";

library.add(faLinkedin, faXTwitter, faBluesky);

const routes = [
    {
        path: "/",
        component: CookiePageWrapper,
        children: [
            {path: "/", component: Landing},
            {path: "/careers", component: Careers},
            {path: "/research", component: Research},
            {path: "/products", component: Product},
            {path: "/cases/healthcare", component: HealthcareCases},
            {path: "/cases/e-commerce", component: EcommerceCases},
            {path: "/privacy", component: PrivacyPolicy},
            {path: "/about", component: About},
            {path: "/cookies", component: CookiePolicy},
            {path: "/contact", component: GetInTouchPage},
        ],
    },
    {
        path: "/:catchAll(.*)", // Catch all undefined routes
        redirect: "/", // Redirect to home page
    }
    // ...jobs.map((job) => ({
    //   path: `/careers/${job.key}`, component: Job, props: { jobDetails: job },
    // }))
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return {top: 0};
    },
});

const app = createApp({
    render: () => h(App),
});

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
// app.use(VueCarousel);
app.mount("#app");
