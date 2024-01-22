<template>
  <div class="careers">
    <img
      src="../../assets/gradient-top-yellow.png"
      class="app__gradient-top-yellow"
    />
    <img src="../../assets/gradient-top-blue.png" class="app__gradient-top-blue" />

    <app-header current-page="careers">
      <app-menu />
    </app-header>

      <div class="jumbotron">
        <div class="jumbotron__title">AI for Equity: Build the Unbuilt with Us</div>
        <div class="jumbotron__description">
          We are at the forefront of crafting advanced machine learning software
          to reshape global equity. Join us to pioneer new frontiers and shape
          a future where technology empowers all.
        </div>
        <div class="careers__culture">
          Discover Our <a target="_blank" href="https://candy-silica-cf0.notion.site/Our-Interview-Process-1e8f13ac941043e59dd28506712a967f">Interview Approach and Culture Overview</a>
        </div>
      </div>

      <div class="jobs">
        <div class="jobs__title">Current Job Openings</div>

        <!-- <div class="job" v-for="job in jobs">
          <div class="job__titles">
            <div class="job__title">{{ job.title }}</div>
            <div class="job__sub-title">{{ job.subTitle }}</div>
          </div>
          
          <div class="job__info">
            <div class="job__description">{{ job.description }}</div>
            <router-link :to="`/careers/${job.key}`"><div class="job__link">Learn more</div></router-link>
          </div>
        </div> -->

        <div class="job">
          <div class="job__titles">
            <div class="job__title">Senior Software Engineer (Data/ML)</div>
            <div class="job__sub-title">Barcelona, Full-time</div>
          </div>
          
          <div class="job__info">
            <div class="job__description">
              We are looking for software engineers with a solid Go/SQL/Python background to
              join our engineering team to build our data infrastructure. You will have
              the rare opportunity to build resilient and scalable machine learning products
              from scratch, together with other talented engineers, to achieve equity in
              health for all people worldwide via cutting-edge ML algorithms.
            </div>
            <a target="_blank" href="https://candy-silica-cf0.notion.site/Senior-Software-Engineer-Data-ML-c25aa672855c42c7b079f938d0a8fd11"><div class="job__link">Learn more</div></a>
          </div>
        </div>
      </div>
    <app-footer />

    <img
      src="../../assets/gradient-bottom-yellow.png"
      class="app__gradient-bottom-yellow"
    />
    <img
      src="../../assets/gradient-bottom-blue.png"
      class="app__gradient-bottom-blue"
    />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
// import jobs from '../../data/jobs';

import './Careers.scss';

// enum Section {
//   Jumbotron = "jumbotron",
//   Jobs = "jobs",
// }

// const isSectionVisible = ref({
//   [Section.Jumbotron]: true,
//   [Section.Jobs]: false,
// });

// const handleIntersect = (
//   section: Section,
//   intersectEvent: IntersectionObserverEntry
// ) => {
//   if (intersectEvent.isIntersecting) {
//     document.querySelector(`.${section}`)?.classList.add("show");
//     document.querySelector(`.${section}`)?.classList.remove("hide");

//     isSectionVisible.value[section] = true;
//     return;
//   }

//   document.querySelector(`.${section}`)?.classList.add("hide");
//   document.querySelector(`.${section}`)?.classList.remove("show");

//   isSectionVisible.value[section] = false;
// };
</script>
