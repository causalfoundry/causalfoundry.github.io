<template>
  <section class="proposal">
    <section-header>Personalized Medicine</section-header>
    <div class="proposal__content">
      <p>Our vision is to tailor early interventions — whether treatment or preventative in nature—to each individual patient.</p>

      <div>
        <h3><app-title>Immunotherapy</app-title></h3>
        <h4>Genomic and molecular profiling</h4>
        <p>Every patient has an individual mutational signature, with only a small fraction of mutations shared between patients. Only by a personalized approach, the full spectrum of mutations displayed by the tumor of a given patient can be leveraged to mobilize broad anti-tumor immunity.</p>
     </div>
    </div>
    <!-- <div class="proposal__methods">
      <ul v-for="method in methods" :key="method">
        <li>{{ method }}</li>
      </ul>
    </div> -->
    <img src="../../assets/pattern-wave.png" class="proposal__pattern-wave" />
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from '@/components/SectionHeader'
import AppTitle from '@/components/AppTitle'

const methods = ['Development of data-centric mobile health apps and companion apps for clinical trials', 'Server-side experimentation', 'SDK and API integration']
</script>