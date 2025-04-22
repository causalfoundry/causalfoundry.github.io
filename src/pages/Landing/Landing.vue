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
            <AppTitle>{{ messages?.landing?.titles?.main_first }} </AppTitle>
            {{ messages?.landing?.titles?.main_second }} <br />
          </div>

          <div class="title__item">
            {{ messages?.landing?.titles?.main_third }}
          </div>

          <div class="title__item">
            <DynamicText :values="dynamicTitles" />
          </div>
        </div>

        <div class="description">
          {{ messages?.landing?.landingDescription }}
        </div>

        <Button
          :value="messages?.common?.getInTouch"
          highlighted
          @click="handleRedirect"
        />
        <div class="circle top">
          <img src="../../assets/pattern-circle.png" alt="" />
        </div>

        <div class="dashboard-view">
          <img
            class="dashboard"
            :src="`/images/landing/${messages?.landing?.images?.dashboard}.png`"
            alt=""
          />
        </div>
      </div>
    </IntersectionObserver>

    <div class="summaries">
      <ShortDescriptionList :items="summaries" />
    </div>

    <IntersectionObserver
      @intersect="handleIntersect(Section.Applications, $event)"
    >
      <div
        class="personalized applications landing-section"
        :id="Section.Applications"
      >
        <div class="title">
          <AppTitle>{{ messages?.landing?.titles?.adaptiveAi }}</AppTitle>
        </div>

        <div class="paragraph">
          {{ messages?.landing?.adaptiveAi }}
        </div>

        <div class="small-title">
          <AppTitle>{{ messages?.landing?.titles?.healthcare }}</AppTitle>
        </div>
        <div class="small-paragraph">
          <BreakableText :text="messages?.landing?.healthcare" />
          <Link
            to="/cases/healthcare-landing"
            :text="messages?.common?.exploreText"
          />
        </div>

        <div class="small-title">
          <AppTitle>{{ messages?.landing?.titles?.ecommerce }}</AppTitle>
        </div>
        <div class="small-paragraph">
          <BreakableText :text="messages?.landing?.ecommerce" />
          <Link
            to="/cases/ecommerce-landing"
            :text="messages?.common?.exploreText"
          />
        </div>

        <div class="small-title">
          <AppTitle>{{ messages?.landing?.titles?.elearning }}</AppTitle>
        </div>
        <div class="small-paragraph">
          <BreakableText :text="messages?.landing?.elearning" />
        </div>

        <div class="small-title">
          <AppTitle>{{ messages?.landing?.titles?.videogames }}</AppTitle>
        </div>
        <div class="small-paragraph">
          <BreakableText :text="messages?.landing?.videogames" />
          <Link to="/cases/gaming" :text="messages?.common?.exploreText" />
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
      :title="messages?.landing?.achievements?.title"
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
import { useTranslations } from "@/composables/useTranslations";
import { ref, computed, watch } from "vue";
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

import "./Landing.scss";

const { currentTranslations: messages, currentLang } =
  useTranslations("landing");

const router = useRouter();

const dynamicTitles = ref([]);
const summaries = ref([]);
const achievements = ref([]);

watch(
  () => messages.value,
  (newMessages) => {
    if (newMessages) {
      dynamicTitles.value = [
        newMessages.landing?.titles?.main_dynamic_healthcare,
        newMessages.landing?.titles?.main_dynamic_ecommerce,
        newMessages.landing?.titles?.main_dynamic_elearning,
        newMessages.landing?.titles?.main_dynamic_videogames,
      ];

      summaries.value = [
        {
          title: newMessages.landing?.summaries?.predictions?.title,
          text: newMessages.landing?.summaries?.predictions?.text,
        },
        {
          title: newMessages.landing?.summaries?.recommendations?.title,
          text: newMessages.landing?.summaries?.recommendations?.text,
        },
        {
          title: newMessages.landing?.summaries?.adaptiveInterventions?.title,
          text: newMessages.landing?.summaries?.adaptiveInterventions?.text,
        },
        {
          title: newMessages.landing?.summaries?.resourceAllocation?.title,
          text: newMessages.landing?.summaries?.resourceAllocation?.text,
        },
      ];

      achievements.value = [
        {
          title: "$ 1M+",
          text: newMessages.landing?.achievements?.revenue,
        },
        {
          title: "60K",
          text: newMessages.landing?.achievements?.nudges,
        },
        {
          title: "24%",
          text: newMessages.landing?.achievements?.revenueIncrease,
        },
        {
          title: "6.4%",
          text: newMessages.landing?.achievements?.engagementIncrease,
        },
      ];
    }
  },
  { immediate: true }
);

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
