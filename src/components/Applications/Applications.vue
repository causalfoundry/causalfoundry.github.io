<template>
  <section class="applications">
    <section-header>Personalized Interventions</section-header>
    <div class="applications__wrapper">
      <div class="applications__patterns">
        <img src="../../assets/pattern-hex.png" class="applications__pattern-hex parallax parallax--applications" />
        <img src="../../assets/gradient-left-blue.png" class="applications__gradient" />
      </div>
      <div class="applications__content">
        <div v-for="(application, index) in applications" :key="index">
          <h3 class="applications__title"><app-title>{{ application.title.toUpperCase() }}</app-title></h3>
          <p class="applications__desc">{{ application.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from '@/components/SectionHeader'
import AppTitle from '@/components/AppTitle'

const applications = [
  {
    title: 'Clinical trials',
    description: 'We build products that make better clinical trials. Engaging patients to have meaningful participation, improving retention rates, making them closer to real-world situations, with recruitment based on the likelihood of ending the clinical trial and improving the robustness of the study'
  },
  {
    title: 'Mobile health',
    description: 'Our software predicts behaviors to deploy interventions to improve engagement elements through tailor-made recommendations and incentives. Organizing and using data from wearables, mobile applications, and portable devices to personalize daily self-management of our health and well-being. AI technology assists physicians in diagnosis, decision-making, and treatment personalization, as well as helps individuals make informed decisions'
  },
  {
    title: 'Global health',
    description: 'Delivering personalized recommendations and adaptive interventions through mobile applications to improve adherence to treatment, increase testing and surveillance, measure provider skills, manage chronic diseases, and reduce drug stockouts in pharmacies and clinics'
  }
]
</script>