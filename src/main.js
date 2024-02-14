import { createApp, h } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Landing from './pages/Landing2/Landing.vue';
import Careers from './pages/Careers/Careers.vue';
import Research from './pages/Researches/Researches.vue';
// import Job from './pages/Job/Job.vue';

import App from './App.vue';

import './styles/app.scss';

// import jobs from './data/jobs';

const routes = [
  { path: '/', component: Landing },
  { path: '/careers', component: Careers },
  { path: '/research', component: Research },
  // ...jobs.map((job) => ({
  //   path: `/careers/${job.key}`, component: Job, props: { jobDetails: job },
  // }))
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

const app = createApp({
  render: () => h(App),
});

app.use(router);
app.mount('#app');
