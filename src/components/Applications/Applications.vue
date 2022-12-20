<template>
  <section class="applications">
    <section-header>Adaptive Interventions</section-header>
    <div class="applications__wrapper">
      <img src="../../assets/pattern-hex.png" class="applications__pattern-hex" />
      <img src="../../assets/gradient-left-blue.png" class="applications__gradient" />
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
    description: 'With clinical trial decentralization, the trials move the research into patients\' homes and real-world medical settings \n \n Clinical studies can engage patients to have meaningful participation and improve retention rates, significantly reducing trial costs and the robustness of the study'
  },
  {
    title: 'Mobile health',
    description: 'The availability of wearables, mobile applications, and portable devices is opening up new opportunities for daily self-management of our own health and well-being and are key technologies to promote public health \n \n AI technology can assist physicians in diagnosis, decision-making, and treatment personalization, as well as help individuals, make informed decisions'
  },
  {
    title: 'Global health',
    description: 'Improving the engagement of patients and providers with AI-based products and digital apps by putting the patient and the data in the center \n \n Delivering personalized recommendations and adaptive interventions to improve adherence to treatment, increase testing and surveillance, measure provider skills, manage chronic diseases, and reduce drug stockouts in pharmacies and clinics'
  }
]
</script>