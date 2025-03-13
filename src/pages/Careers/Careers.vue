<template>
  <div class="careers">
    <div class="container">
      <img
        src="../../assets/gradient-top-yellow.png"
        class="app__gradient-top-yellow"
      />
      <img
        src="../../assets/gradient-top-blue.png"
        class="app__gradient-top-blue"
      />

      <AppHeader current-page="careers">
        <AppMenu />
      </AppHeader>

      <div class="jumbotron">
        <div class="title">
          <AppTitle>
            {{ messages?.careers?.title_first }}
          </AppTitle>

          {{ messages?.careers?.title_second }}
        </div>

        <div class="description">
          {{ messages?.careers?.description }}
        </div>

        <div class="circle top">
          <img src="../../assets/pattern-circle.png" alt="" />
        </div>
      </div>

      <!-- <intersection-observer @intersect="handleIntersect(Section.Jobs, $event)"> -->
      <div class="jobs">
        <div class="jobs__title">
          {{ messages?.careers?.jobsTitle }}
        </div>

        <div
          v-for="(job, index) in messages?.careers?.jobs"
          :key="index"
          class="job"
        >
          <div class="job__titles">
            <div class="job__title">{{ job.title }}</div>
            <div class="job__sub-title">{{ job.subtitle }}</div>
          </div>

          <div class="job__info">
            <div class="job__description">
              {{ job.description }}
            </div>
            <a target="_blank" :href="job.link">
              <div class="job__link">{{ messages?.careers?.learnMore }}</div>
            </a>
          </div>
        </div>
      </div>
      <!-- </intersection-observer> -->

      <div class="careers__culture">
        <div class="careers__culture__title">
          {{ messages?.careers?.cultureTitle }}
        </div>
        <a
          target="_blank"
          href="https://causalfoundry.notion.site/Our-Interview-Process-1040c2a38a7e8017bbc4c8fbb3d1e085"
          >{{ messages?.careers?.cultureLink }}</a
        >
        <div class="careers__culture__info">
          {{ messages?.careers?.cultureInfo }}
          <a href="mailto:hello@causalfoundry.ai">hello@causalfoundry.ai</a>
        </div>
      </div>

      <div class="pattern-wave">
        <img src="../../assets/pattern-wave.png" />
      </div>

      <img
        src="/src/assets/pattern-wave.png"
        class="careers__pattern-wave"
        alt="Wave Pattern"
      />

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

<script lang="ts" setup>
import { useTranslations } from "@/composables/useTranslations";
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";

import "./Careers.scss";

const { currentTranslations: messages } = useTranslations("../pages/Careers");
</script>
