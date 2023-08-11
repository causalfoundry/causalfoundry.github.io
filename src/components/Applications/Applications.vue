<template>
  <section class="applications">
    <section-header>Precision Nudging</section-header>
    <div class="applications__wrapper">
      <div class="applications__patterns">
        <img
          src="../../assets/pattern-hex.png"
          class="applications__pattern-hex parallax parallax--applications"
        />
        <img
          src="../../assets/gradient-left-blue.png"
          class="applications__gradient"
        />
      </div>

      <div class="applications__content">
        <div class="application__content__summary">
          Human behavior constitutes the primary mode for activating health
          improvements, including decisions made by clinicians and their
          patients. We build software to provide medical care teams and patients
          with personalized AI support
        </div>
        <div
          class="applications__content__item"
          v-for="(application, index) in applications"
          :key="index"
        >
          <h3 class="applications__title">
            <app-title>{{ application.title.toUpperCase() }}</app-title>
          </h3>
          <p class="applications__desc">{{ application.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from "@/components/SectionHeader";
import AppTitle from "@/components/AppTitle";

const applications = [
  {
    title: "Global health",
    description:
      "Our machine learning platform and AI products support equitable access to healthcare by using mobile health-based adaptive interventions explicitly designed to support health workers and patients in resource-poor settings. Increase testing and surveillance, improve treatment adherence and chronic disease management, boost provider skills and quality of care, and prevent drug stockouts in pharmacies and clinics",
  },
  {
    title: "Clinical trials",
    description:
      "Our goal is to increase the participation of underrepresented populations in clinical trials with decentralized and adaptive designs. We build AI products that bring the studies closer to real-world situations, and make them safer and more robust. Recruit participants based on the likelihood of completing the study, increase their diversity, and keep them meaningfully engaged with personalized incentives and gamification elements",
  },
  {
    title: "Mobile health",
    description:
      "Our software organizes data from wearables, mobile applications, and other portable devices, turning it into actionable insights through statistical and machine learning. Promote an adequate level of engagement of healthcare professionals and their patients with tailored recommendations and incentives to support their decision-making, condition management, treatment adherence, and capacity building",
  },
];
</script>
