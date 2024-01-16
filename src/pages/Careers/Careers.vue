<template>
  <div class="careers">
    <app-header>
      <app-menu />
    </app-header>

    <intersection-observer @intersect="handleIntersect(Section.Jumbotron, $event)">
      <div class="jumbotron">
        <div class="jumbotron__title">Join our team</div>
        <div class="jumbotron__description">
          Join our mission of democratizing adaptive interventions and experimentation
          for all. We research and build ML software to advance global equity.
        </div>
      </div>
    </intersection-observer>

    <intersection-observer @intersect="handleIntersect(Section.Jobs, $event)">
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
    </intersection-observer>
    <app-footer />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import IntersectionObserver from "@/components/IntersectionObserver";

// import jobs from '../../data/jobs';

import './Careers.scss';

enum Section {
  Jumbotron = "jumbotron",
  Jobs = "jobs",
}

const isSectionVisible = ref({
  [Section.Jumbotron]: true,
  [Section.Jobs]: false,
});

const handleIntersect = (
  section: Section,
  intersectEvent: IntersectionObserverEntry
) => {
  if (intersectEvent.isIntersecting) {
    document.querySelector(`.${section}`)?.classList.add("show");
    document.querySelector(`.${section}`)?.classList.remove("hide");

    isSectionVisible.value[section] = true;
    return;
  }

  document.querySelector(`.${section}`)?.classList.add("hide");
  document.querySelector(`.${section}`)?.classList.remove("show");

  isSectionVisible.value[section] = false;
};
</script>
