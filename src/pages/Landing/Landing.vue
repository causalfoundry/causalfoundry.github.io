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
            <AppTitle>{{ $t("landing.titles.main_first") }} </AppTitle>
            {{ $t("landing.titles.main_second") }} <br />
          </div>

          <div class="title__item">{{ $t("landing.titles.main_third") }}</div>
          <div class="title__item">
            <DynamicText
              v-if="dynamicTitles.length > 0"
              :values="dynamicTitles"
            />
          </div>
        </div>

        <div class="description">
          {{ $t("landing.landingDescription") }}
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

    <IntersectionObserver
      @intersect="handleIntersect(Section.Applications, $event)"
    >
      <div
        class="personalized applications landing-section"
        :id="Section.Applications"
      >
        <div class="title">
          <AppTitle>{{ $t("landing.titles.adaptiveAi") }}</AppTitle>
        </div>

        <div class="paragraph">
          {{ $t("landing.adaptiveAi") }}
        </div>

        <div class="small-title">
          <AppTitle>{{ $t("landing.titles.healthcare") }}</AppTitle>
        </div>
        <div class="small-paragraph">
          <BreakableText :text="$t('landing.healthcare')" />
          <Link to="/cases/healthcare" text="Explore" />
        </div>

        <div class="small-title">
          <AppTitle>{{ $t("landing.titles.ecommerce") }}</AppTitle>
        </div>
        <div class="small-paragraph">
          <BreakableText :text="$t('landing.ecommerce')" />
          <Link to="/cases/e-commerce" text="Explore" />
        </div>

        <div class="small-title">
          <AppTitle>{{ $t("landing.titles.elearning") }}</AppTitle>
        </div>
        <div class="small-paragraph">
          <BreakableText :text="$t('landing.elearning')" />
        </div>

        <div class="small-title">
          <AppTitle>{{ $t("landing.titles.videogames") }}</AppTitle>
        </div>
        <div class="small-paragraph">
          <BreakableText :text="$t('landing.videogames')" />
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
      :title="$t('landing.achievements.title')"
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

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

const router = useRouter();

const { locale, messages, t } = useI18n();

const translationsLoaded = ref(false);

async function loadTranslations() {
  const lang = locale.value;
  try {
    const translations = await import(`./locales/${lang}.ts`);
    messages.value[lang] = { ...messages.value[lang], ...translations.default };
    translationsLoaded.value = true;
  } catch (error) {
    console.error(
      `Failed to load translations for ${lang}, falling back to English:`,
      error
    );
    try {
      const fallbackTranslations = await import(`./locales/en.ts`);
      messages.value[lang] = {
        ...messages.value[lang],
        ...fallbackTranslations.default,
      };
      translationsLoaded.value = true;
    } catch (fallbackError) {
      console.error(`Failed to load fallback translations:`, fallbackError);
    }
  }
}

onMounted(loadTranslations);

const dynamicTitles = computed(() => {
  if (!translationsLoaded.value) return [];

  return [
    t("landing.titles.main_dynamic_healthcare"),
    t("landing.titles.main_dynamic_ecommerce"),
    t("landing.titles.main_dynamic_elearning"),
    t("landing.titles.main_dynamic_videogames"),
  ];
});

const summaries = computed(() => {
  if (!translationsLoaded.value) return [];

  return [
    {
      title: t("landing.summaries.predictions.title"),
      text: t("landing.summaries.predictions.text"),
    },
    {
      title: t("landing.summaries.recommendations.title"),
      text: t("landing.summaries.recommendations.text"),
    },
    {
      title: t("landing.summaries.adaptiveInterventions.title"),
      text: t("landing.summaries.adaptiveInterventions.text"),
    },
    {
      title: t("landing.summaries.resourceAllocation.title"),
      text: t("landing.summaries.resourceAllocation.text"),
    },
  ];
});

const achievements = computed(() => {
  if (!translationsLoaded.value) return [];

  return [
    {
      title: "$ 1M+",
      text: t("landing.achievements.revenue"),
    },
    {
      title: "60K",
      text: t("landing.achievements.nudges"),
    },
    {
      title: "24%",
      text: t("landing.achievements.revenueIncrease"),
    },
    {
      title: "6.4%",
      text: t("landing.achievements.engagementIncrease"),
    },
  ];
});

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
