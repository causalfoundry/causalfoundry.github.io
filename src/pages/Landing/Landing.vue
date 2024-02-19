<template>
  <div class="landing2">
    <div class="container">
      <img
        src="../../assets/gradient-top-yellow.png"
        class="app__gradient-top-yellow"
      />
      <img
        src="../../assets/gradient-top-blue.png"
        class="app__gradient-top-blue"
      />
      <AppHeader current-page="landing"><AppMenu /></AppHeader>

      <IntersectionObserver
        @intersect="handleIntersect(Section.Landing, $event)"
      >
        <div class="jumbotron landing" :id="Section.Landing">
          <div class="title">
            <AppTitle>Personalization</AppTitle>
            to solve the greatest <br />challenges in healthcare
          </div>
          <div class="description">
            Democratizing reinforcement learning and adaptive interventions to
            personalize medicine, healthcare delivery, and patient support for
            improved health outcomes
          </div>
          <div class="circle top">
            <img src="../../assets/pattern-circle.png" alt="" />
          </div>
        </div>
      </IntersectionObserver>

      <IntersectionObserver
        @intersect="handleIntersect(Section.Problem, $event)"
      >
        <div class="mission problem" :id="Section.Problem">
          <div class="title">Mission</div>
          <div class="paragraph">
            We believe in personalized clinical and behavioral interventions
            adapted to each individual over generalizable interventions. We
            build AI products to deliver interventions adapted to the
            individual’s genes, environment, and habits to ensure each person
            lives their healthiest possible life. We are committed to making AI
            technologies available to everyone
          </div>
        </div>
      </IntersectionObserver>

      <IntersectionObserver
        @intersect="handleIntersect(Section.Applications, $event)"
      >
        <div class="personalized hex applications" :id="Section.Applications">
          <div class="title">Precision Nudging</div>

          <div class="paragraph">
            Human behavior constitutes the primary mode for activating health
            improvements, including decisions made by clinicians and their
            patients. We build software to provide medical care teams and
            patients with personalized AI support
          </div>

          <div class="small-title"><AppTitle>Global health</AppTitle></div>
          <div class="small-paragraph">
            Our machine learning platform and AI products support equitable
            access to healthcare by using mobile health-based adaptive
            interventions explicitly designed to support health workers and
            patients in resource-poor settings. Increase testing and
            surveillance, improve treatment adherence and chronic disease
            management, boost provider skills and quality of care, and prevent
            drug stockouts in pharmacies and clinics
          </div>

          <div class="small-title"><AppTitle>Clinical trials</AppTitle></div>
          <div class="small-paragraph">
            Our goal is to increase the participation of underrepresented
            populations in clinical trials with decentralized and adaptive
            designs. We build AI products that bring the studies closer to
            real-world situations, and make them safer and more robust. Recruit
            participants based on the likelihood of completing the study,
            increase their diversity, and keep them meaningfully engaged with
            personalized incentives and gamification elements
          </div>

          <div class="small-title"><AppTitle>Mobile health</AppTitle></div>
          <div class="small-paragraph">
            Our software organizes data from wearables, mobile applications, and
            other portable devices, turning it into actionable insights through
            statistical and machine learning. Promote an adequate level of
            engagement of healthcare professionals and their patients with
            tailored recommendations and incentives to support their
            decision-making, condition management, treatment adherence, and
            capacity building
          </div>

          <div class="gradient-blue">
            <img src="../../assets/gradient-left-blue.png" alt="" />
          </div>
          <div class="hex">
            <img src="../../assets/pattern-hex.png" alt="" />
          </div>
        </div>
      </IntersectionObserver>

      <IntersectionObserver
        @intersect="handleIntersect(Section.Proposal, $event)"
      >
        <div class="personalized proposal" :id="Section.Proposal">
          <div class="title">Precision Medicine</div>

          <div class="paragraph">
            The ambition of personalized medicine is to design and optimize the
            pathway for diagnosis, therapeutic intervention, and prognosis by
            using large multidimensional biological datasets that capture
            individual variability in genes, function, and environment. We
            develop software that reconciles multiple different data sources to
            personalize diagnosis and treatment, improve prognosis, and open the
            door to a new era of evidence-based, individualized clinical
            practice
          </div>

          <div class="small-title"><AppTitle>Clinician software</AppTitle></div>
          <div class="small-paragraph">
            Our products connect to medical equipment and patient management
            software to provide clinicians with decision architectures in which
            optimal clinical actions for each patient at each time are
            suggested. Recommendations are based on their history of clinical
            manifestations and treatment, genome, epigenome, microbiome,
            exposome, and other contextual and healthcare information. We use
            deep reinforcement learning to optimize sequential decision-making
            and dynamic treatment regimes
          </div>

          <div class="small-title">
            <AppTitle
              >FROM BIOMARKER DISCOVERY TO PERSONALIZED DRUG
              DEVELOPMENT</AppTitle
            >
          </div>
          <div class="small-paragraph">
            Our software uses AI to uncover previously undetected patterns in
            very large multidimensional datasets, making new biomarkers
            available for diagnosis, treatment personalization, and risk
            stratification. We develop AI products to provide each patient with
            the best existing therapeutical option for them and, beyond that,
            aspire to become the supporting software for patient-specific drug
            development
          </div>
        </div>
      </IntersectionObserver>

      <IntersectionObserver @intersect="handleIntersect(Section.News, $event)">
        <div class="news-land" :id="Section.News">
          <News />
        </div>
      </IntersectionObserver>

      <IntersectionObserver
        @intersect="handleIntersect(Section.FundedBy, $event)"
      >
        <div class="funded-land" :id="Section.FundedBy">
          <FundedBy />
        </div>
      </IntersectionObserver>

      <div class="bottom-gradients"></div>

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

<script setup lang="ts">
import { ref } from "vue";

import AppMenu from "@/components/AppMenu";
import AppTitle from "@/components/AppTitle";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import News from "@/components/News";
import FundedBy from "@/components/FundedBy";
import IntersectionObserver from "@/components/IntersectionObserver";

import { Section } from "@/typings/section";

import "./Landing.scss";

const isSectionVisible = ref({
  [Section.Landing]: true,
  [Section.Problem]: false,
  [Section.Applications]: false,
  [Section.Proposal]: false,
  [Section.News]: false,
  [Section.FundedBy]: false,
});

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
