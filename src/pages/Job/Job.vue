<template>
  <div class="job-page">
    <app-header>
      <app-menu />
    </app-header>

    <main>
      <div class="job-page__header">
        <div class="job-page__titles">
          <div class="job-page__title">{{ job.title }}</div>
          <div class="job-page__sub-title">{{ job.subTitle }}</div>
        </div>
        <div class="job-page__socials">
          <a v-if="job.links?.linkedin" :href="job.links?.linkedin">
            <div class="job-page__social"><img src="../../assets/LinkedIn.png"/></div>
          </a>
          <a v-if="job.links?.facebook" :href="job.links?.facebook">
            <div class="job-page__social"><img src="../../assets/Facebook.png"/></div>
          </a>
          <a v-if="job.links?.twitter" :href="job.links?.twitter">
            <div class="job-page__social"><img src="../../assets/TwitterX.png"/></div>
          </a>
        </div>
      </div>

      <div class="job-page__sections">
        <div class="job-page__section">
          <div class="job-page__section__title">Description</div>
          <div class="job-page__section__text">{{ job.description }}</div>
        </div>

        <div class="job-page__section">
          <div class="job-page__section__title">Responsibilities</div>
          <div class="job-page__section__points">
            <div v-for="[title, points] in Object.entries(job.responsibilities)" class="job-page__point">
              <div class="job-page__point__title">{{ title }}</div>
              <ul class="job-page__point__items">
                <li v-for="item in points" class="job-page__point__item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="job-page__section">
          <div class="job-page__section__title">Qualifications</div>
          <div class="job-page__section__points">
            <ul class="job-page__point__items">
              <li v-for="item in job.qualifications" class="job-page__point__item">{{ item }}</li>
            </ul>
          </div>
        </div>


        <div class="job-page__section">
          <div class="job-page__section__title">How to apply</div>
          <div class="job-page__section__text">
            <div>Send an email with your CV and a link to your linkedin page to admin@causalfoundry.ai</div>
            <a class="job-page__link" href="mailto:admin@causalfoundry.ai">Send Application</a>
          </div>
        </div>
      </div>
    </main>

    <app-footer />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";

import jobs from '../../jobs';

import './Job.scss';

const props = defineProps<{
  jobDetails: typeof jobs[number];
}>();

const job = props.jobDetails; 
</script>
