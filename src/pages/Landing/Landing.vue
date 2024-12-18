<template>
  <div class="landing2">
    <div class="container">
      <img
        src="../../assets/gradient-top-yellow.png"
        class="app__gradient-top-yellow"
      />
      <img
        src="../../assets/gradient-top-blue.png"
        class="app__gradient-top-blue"
      />
      <AppHeader current-page="landing"><AppMenu /></AppHeader>

      <IntersectionObserver
        @intersect="handleIntersect(Section.Landing, $event)"
      >
        <div class="jumbotron landing" :id="Section.Landing">
          <div class="title">
            <AppTitle>Personalized </AppTitle>

            interventions to revolutionize
            <DynamicText
              :values="[
                'healthcare',
                'global health',
                'insurance',
                'e-commerce',
                'education',
                'videogames',
              ]"
            />
          </div>

          <div class="description">
            {{ LANDING_DESCRIPTION }}
          </div>
          <div class="circle top">
            <img src="../../assets/pattern-circle.png" alt="" />
          </div>

          <div class="dashboard-view">
            <img
              class="dashboard"
              :src="`/images/landing/dashboard.png`"
              alt=""
            />
          </div>
        </div>
      </IntersectionObserver>

      <ShortDescriptionList :items="summaries" />

      <IntersectionObserver
        @intersect="handleIntersect(Section.Problem, $event)"
      >
        <div class="mission problem" :id="Section.Problem">
          <div class="title">Mission</div>
          <div class="paragraph">
            {{ MISSION }}
          </div>
        </div>
      </IntersectionObserver>

      <IntersectionObserver
        @intersect="handleIntersect(Section.Applications, $event)"
      >
        <div class="personalized applications" :id="Section.Applications">
          <div class="title">Precision Nudging</div>

          <div class="paragraph">
            {{ PRECISION_NUDGING }}
          </div>

          <div class="small-title"><AppTitle>Global health</AppTitle></div>
          <div class="small-paragraph">
            {{ GLOBAL_HEALTH }}
          </div>

          <div class="small-title"><AppTitle>Clinical trials</AppTitle></div>
          <div class="small-paragraph">
            {{ CLINICAL_TRIALS }}
          </div>

          <div class="small-title"><AppTitle>Mobile health</AppTitle></div>
          <div class="small-paragraph">
            {{ MOBILE_HEALTH }}
          </div>

          <div class="gradient-blue">
            <img src="../../assets/gradient-left-blue.png" alt="" />
          </div>
          <div class="hex">
            <img src="../../assets/pattern-hex.png" alt="" />
          </div>
        </div>
      </IntersectionObserver>

      <IntersectionObserver @intersect="handleIntersect(Section.News, $event)">
        <div class="news-land" :id="Section.News">
          <News />
        </div>
      </IntersectionObserver>

      <IntersectionObserver
        @intersect="handleIntersect(Section.FundedBy, $event)"
      >
        <div class="funded-land" :id="Section.FundedBy">
          <FundedBy />
        </div>
      </IntersectionObserver>

      <AppFooter />

      <img
        src="../../assets/gradient-bottom-yellow.png"
        class="app__gradient-bottom-yellow"
      />
      <img
        src="../../assets/gradient-bottom-blue.png"
        class="app__gradient-bottom-blue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import AppMenu from "@/components/AppMenu";
import AppTitle from "@/components/AppTitle";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import News from "@/components/News";
import FundedBy from "@/components/FundedBy";
import DynamicText from "@/components/DynamicText";
import ShortDescriptionList from "@/components/ShortDescriptionList";
import IntersectionObserver from "@/components/IntersectionObserver";

import { Section } from "@/typings/section";

import { LANDING_DESCRIPTION } from "./constants";
import { MISSION } from "./constants";
import { PRECISION_NUDGING } from "./constants";
import { GLOBAL_HEALTH } from "./constants";
import { CLINICAL_TRIALS } from "./constants";
import { MOBILE_HEALTH } from "./constants";
import { PRECISION_MEDICINE } from "./constants";

import "./Landing.scss";

const summaries = [
  {
    title: "Predictions",
    text: "Predict patient behaviors to influence outcomes",
  },
  {
    title: "Recommendations",
    text: "Drive patients and providers to the right content",
  },
  {
    title: "Adaptive interventions",
    text: "Increase treatment adherence with personalized, just-in-time nudges",
  },
  {
    title: "Resource allocation",
    text: "Optimize visits & calls to reach the right patients s one is left behind",
  },
];

const isSectionVisible = ref({
  [Section.Landing]: true,
  [Section.Problem]: false,
  [Section.Applications]: false,
  [Section.Proposal]: false,
  [Section.News]: false,
  [Section.FundedBy]: false,
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
