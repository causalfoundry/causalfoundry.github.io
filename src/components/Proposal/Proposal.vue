<template>
  <section class="proposal">
    <section-header>Precision Medicine</section-header>
    <div class="proposal__content">
      <div>
        <p>
          The ambition of personalized medicine is to design and optimize the
          pathway for diagnosis, therapeutic intervention, and prognosis by
          using large multidimensional biological datasets that capture
          individual variability in genes, function, and environment. We develop
          software that reconciles multiple different data sources to
          personalize diagnosis and treatment, improve prognosis, and open the
          door to a new era of evidence-based, individualized clinical practice
        </p>
      </div>
      <div
        v-for="(application, index) in applications"
        :key="index"
        class="proposal__content__item"
      >
        <h3 class="applications__title">
          <app-title>{{ application.title.toUpperCase() }}</app-title>
        </h3>
        <p class="proposal__desc">{{ application.description }}</p>
      </div>
    </div>
    <img src="../../assets/pattern-wave.png" class="proposal__pattern-wave" />
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from "@/components/SectionHeader";
import AppTitle from "@/components/AppTitle";

const applications = [
  {
    title: "Clinician software",
    description:
      "Our products connect to medical equipment and triage and patient management software to provide clinicians with decision architectures in which optimal clinical actions for each patient at each time are suggested based on their history of clinical manifestations and treatment, genome, epigenome, microbiome, exposome, and other contextual and healthcare information. We use deep reinforcement learning to optimize sequential decision-making and dynamic treatment regimes",
  },
  {
    title: "FROM BIOMARKER DISCOVERY TO PERSONALIZED DRUG DEVELOPMENT",
    description:
      "Our software uses AI to uncover previously undetected patterns in very large multidimensional datasets, making new biomarkers available for diagnosis, treatment personalization, and risk stratification. We develop AI products to provide each patient with the best existing therapeutical option for them and, beyond that, aspire to become the supporting software for patient-specific drug development",
  },
];
</script>
