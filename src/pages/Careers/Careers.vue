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
          <AppTitle>{{ CAREERS_TITLE_FIRST }}</AppTitle>
          {{ CAREERS_TITLE_SECOND }}
          <br />
          {{ CAREERS_TITLE_THIRD }}
        </div>

        <div class="description">
          {{ CAREERS_DESCRIPTION }}
        </div>

        <div class="circle top">
          <img src="../../assets/pattern-circle.png" alt="" />
        </div>
      </div>

      <!-- <intersection-observer @intersect="handleIntersect(Section.Jobs, $event)"> -->
      <div class="jobs">
        <div class="jobs__title">
          {{ JOBS_TITLE }}
        </div>

        <div class="job">
          <div class="job__titles">
            <div class="job__title">{{ JOB_TITLE_ONE }}</div>
            <div class="job__sub-title">{{ JOB_SUBTITLE_ONE }}</div>
          </div>

          <div class="job__info">
            <div class="job__description">
              {{ JOB_DESCRIPTION_ONE }}
            </div>
            <a
              target="_blank"
              href="https://causalfoundry.notion.site/Machine-Learning-Scientist-91b9e5aa4e2f48b09e689ff0533f0632"
            >
              <div class="job__link">{{ LEARN_MORE }}</div>
            </a>
          </div>
        </div>

        <div class="job">
          <div class="job__titles">
            <div class="job__title">{{ JOB_TITLE_TWO }}</div>
            <div class="job__sub-title">{{ JOB_SUBTITLE_TWO }}</div>
          </div>

          <div class="job__info">
            <div class="job__description">
              {{ JOB_DESCRIPTION_TWO }}
            </div>
            <a
              target="_blank"
              href="https://causalfoundry.notion.site/Back-end-Engineer-1030c2a38a7e80c6a74efe3ac35c791a"
            >
              <div class="job__link">{{ LEARN_MORE }}</div>
            </a>
          </div>
        </div>

        <div class="job">
          <div class="job__titles">
            <div class="job__title">{{ JOB_TITLE_THREE }}</div>
            <div class="job__sub-title">{{ JOB_SUBTITLE_THREE }}</div>
          </div>

          <div class="job__info">
            <div class="job__description">
              {{ JOB_DESCRIPTION_THREE }}
            </div>
            <a
              target="_blank"
              href="https://causalfoundry.notion.site/Mobile-Engineer-React-Native-2f9bd200ae354dbabe068eae69f78f8c"
            >
              <div class="job__link">{{ LEARN_MORE }}</div>
            </a>
          </div>
        </div>
      </div>
      <!-- </intersection-observer> -->

      <div class="careers__culture">
        <div class="careers__culture__title">
          {{ CAREERS_CULTURE_TITLE }}
        </div>
        <a
          target="_blank"
          href="https://causalfoundry.notion.site/Our-Interview-Process-1040c2a38a7e8017bbc4c8fbb3d1e085"
          >{{ CAREERS_CULTURE_LINK }}</a
        >
        <div class="careers__culture__info">
          {{ CAREERS_CULTURE_INFO }}
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
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import AppTitle from "@/components/AppTitle";

import {
  CAREERS_TITLE_FIRST,
  CAREERS_TITLE_SECOND,
  CAREERS_TITLE_THIRD,
  CAREERS_DESCRIPTION,
  JOBS_TITLE,
  JOB_TITLE_ONE,
  JOB_SUBTITLE_ONE,
  JOB_DESCRIPTION_ONE,
  JOB_TITLE_TWO,
  JOB_SUBTITLE_TWO,
  JOB_DESCRIPTION_TWO,
  JOB_TITLE_THREE,
  JOB_SUBTITLE_THREE,
  JOB_DESCRIPTION_THREE,
  CAREERS_CULTURE_TITLE,
  CAREERS_CULTURE_LINK,
  CAREERS_CULTURE_INFO,
  LEARN_MORE,
} from "./constants";
import "./Careers.scss";
</script>
