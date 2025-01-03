<template>
  <div class="landing2">
    <img
      src="../../assets/gradient-top-yellow.png"
      class="app__gradient-top-yellow"
    />
    <img
      src="../../assets/gradient-top-blue.png"
      class="app__gradient-top-blue"
    />
    <AppHeader current-page="landing"><AppMenu /></AppHeader>

    <IntersectionObserver @intersect="handleIntersect(Section.Landing, $event)">
      <div class="jumbotron landing" :id="Section.Landing">
        <div class="title">
          <div class="title__item">
            <AppTitle>Personalized </AppTitle> interventions <br />
          </div>

          <div class="title__item">to revolutionize</div>
          <div class="title__item">
            <DynamicText
              :values="['healthcare', 'e-commerce', 'e-learning', 'videogames']"
            />
          </div>
        </div>

        <div class="description">
          {{ LANDING_DESCRIPTION }}
        </div>

        <Button value="GET IN TOUCH" highlighted @click="handleRedirect" />
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

    <div class="summaries">
      <ShortDescriptionList :items="summaries" />
    </div>

    <IntersectionObserver @intersect="handleIntersect(Section.Problem, $event)">
      <div class="mission problem landing-section" :id="Section.Problem">
        <div class="title">Mission</div>
        <div class="paragraph">
          {{ MISSION }}
        </div>
      </div>
    </IntersectionObserver>

    <IntersectionObserver
      @intersect="handleIntersect(Section.Applications, $event)"
    >
      <div
        class="personalized applications landing-section"
        :id="Section.Applications"
      >
        <div class="title">Adaptive AI</div>

        <div class="paragraph">
          {{ ADAPTIVE_AI }}
        </div>

        <div class="small-title"><AppTitle>Healthcare</AppTitle></div>
        <div class="small-paragraph">
          <BreakableText :text="HEALTHCARE" />
          <Link to="/cases/healthcare" text="Explore" />
        </div>

        <div class="small-title"><AppTitle>E-Commerce</AppTitle></div>
        <div class="small-paragraph">
          <BreakableText :text="ECOMMERCE" />
          <Link to="/cases/e-commerce" text="Explore" />
        </div>

        <div class="small-title"><AppTitle>E-Learning</AppTitle></div>
        <div class="small-paragraph">
          <BreakableText :text="ELEARNING" />
        </div>

        <div class="small-title"><AppTitle>Videogames</AppTitle></div>
        <div class="small-paragraph">
          <BreakableText :text="VIDEOGAMES" />
        </div>

        <div class="gradient-blue">
          <img src="../../assets/gradient-left-blue.png" alt="" />
        </div>
        <div class="hex">
          <img src="../../assets/pattern-hex.png" alt="" />
        </div>
      </div>
    </IntersectionObserver>

    <ShortDescriptionList
      title="Our achievements in 2024"
      :items="achievements"
      highlighted
    />

    <GetInTouch />

<!--    <IntersectionObserver @intersect="handleIntersect(Section.News, $event)">-->
      <div class="news-land" :id="Section.News">
        <News />
      </div>
<!--    </IntersectionObserver>-->

    <div class="funded-land" :id="Section.FundedBy">
      <FundedBy />
    </div>

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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import AppMenu from "@/components/AppMenu";
import AppTitle from "@/components/AppTitle";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import News from "@/components/News";
import FundedBy from "@/components/FundedBy";
import DynamicText from "@/components/DynamicText";
import ShortDescriptionList from "@/components/ShortDescriptionList";
import BreakableText from "@/components/BreakableText";
import IntersectionObserver from "@/components/IntersectionObserver";
import GetInTouch from "@/components/GetInTouch";

import Button from "@/ui-components/button";
import Link from "@/ui-components/Link";

import { Section } from "@/typings/section";

import { LANDING_DESCRIPTION } from "./constants";
import { MISSION } from "./constants";
import { ADAPTIVE_AI } from "./constants";
import { HEALTHCARE } from "./constants";
import { ECOMMERCE } from "./constants";
import { ELEARNING } from "./constants";
import { VIDEOGAMES } from "./constants";

import "./Landing.scss";

const router = useRouter();

const summaries = [
  {
    title: "Predictions",
    text: "Predict user behaviors and target interventions",
  },
  {
    title: "Recommendations",
    text: "Enhance the user experience through personalized content",
  },
  {
    title: "Adaptive interventions",
    text: "Increase user engagement and drive behaviors",
  },
  {
    title: "Resource allocation",
    text: "Optimize incentives & budgeted interventions to maximize their effectiveness",
  },
];

const achievements = [
  { title: "$ 1M+", text: `Revenue generated across all e-commerce partners` },
  { title: "60K", text: `Personalized nudges sent across all partners` },
  { title: "24%", text: `Revenue increase per intervention` },
  { title: "6.4%", text: `Engagement increase with our partner’s app` },
];

const isSectionVisible = ref({
  [Section.Landing]: true,
  [Section.Problem]: false,
  [Section.Applications]: false,
  [Section.Proposal]: false,
  [Section.News]: false,
  [Section.FundedBy]: false,
});

function handleRedirect(event: MouseEvent) {
  router.push("/contact");
}

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
