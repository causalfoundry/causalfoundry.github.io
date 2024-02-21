<template>
  <div class="research">
    <div class="container">
      <img
        src="../../assets/gradient-top-yellow.png"
        class="app__gradient-top-yellow"
      />
      <img
        src="../../assets/gradient-top-blue.png"
        class="app__gradient-top-blue"
      />

      <app-header current-page="research">
        <app-menu />
      </app-header>

      <div class="jumbotron">
        <div class="jumbotron__title">
          We research and build AI products and deploy them reliably
        </div>
        <div class="jumbotron__description">
          We develop AI systems and technology to move healthcare to the next
          frontier. Robust data is the core of the products we build. We
          organize data to be AI-ready and deploy Models and AI systems safely
        </div>
        <div class="hex">
          <img src="../../assets/pattern-hex.png" alt="" />
        </div>
      </div>

      <div class="diagram">
        <div class="diagram__title">Reinforcement Learning</div>
        <div class="paragraph">
          We focus on advancing artificial intelligence through causal inference
          and reinforcement learning. Through our work in Causality, we enableAI
          systems not just to predict outcomes, but to understand the underlying
          reasons behind these outcomes, paving the way for more accurate and
          reliable predictions in complex environments.Reinforcement learning is
          a computational approach to understanding and automating goal-directed
          learning and decision-making without requiring exemplary supervision
          or complete models of an environment in order to achieve long-term
          goals. We implemented in-production methods like linear or neural
          (subspace bandits or limited memory neural linear) bandits or restless
          bandits (for resource allocation) to learn and adapt to environmental
          interactions.
        </div>
        <div class="diagram__image">
          <img src="../../assets/research_diagram.png" />
        </div>
      </div>

      <div class="diagram">
        <div class="diagram__title">Embeddings</div>

        <div class="paragraph">
          Embeddings are numerical representations of items, users, or behaviors
          in a high-dimensional space. These representations capture the
          essential characteristics and relationships of the data. They can be
          used to profile the clinical and behavioral aspects of users and help
          with personalized predictions and tailored recommendations.
        </div>
      </div>

      <div class="diagram">
        <div class="diagram__title">Large Language Models</div>

        <div class="paragraph">
          Deeper analytics insights can be extracted with LLMs. They can help to
          communicate prediction results or the status of recommendations
          directly to users in their applications or in the Causal Foundry
          outcomes. We research and implement LLMs in our products to facilitate
          access to the information.
        </div>

        <div class="diagram__image">
          <img src="../../assets/research_diagram_2.png" />
        </div>
      </div>

      <div class="diagram">
        <div class="diagram__title">Survival Analysis</div>

        <div class="paragraph">
          Survival analysis, often referred to as time-to-event analysis, is
          dedicated to studying the time period leading up to the occurrence of
          certain events. Our research is centered on merging individual-level
          survival analysis predictions with reinforcement learning algorithms
          as contextual information, including the uncertainty associated with
          these survival predictions. Other research areas lie in understanding
          how these event times are influenced by different covariates, such as
          individual patient characteristics. This approach is instrumental in
          identifying risk factors that impact survival or engagement, comparing
          risks among different individuals at specific times, and making
          informed decisions about cost-effective information gathering, like
          cancer screening.
        </div>

        <div class="diagram__image">
          <img src="../../assets/research_diagram_3.png" />
        </div>
      </div>

      <!-- <div class="posts">
      <div class="controls">
        <input v-model="searchQuery" placeholder="Search" type="text" class="search-field">
        <div class="control filter">Filter</div>
        <div class="control view" @click="toggleView">View</div>
      </div>

      <div class="title">Research Papers</div>

      <div v-if="listView" class="view-list">
        <div v-for="post of toRender" class="post">
          <div class="date">{{ post.date }}</div>
          <div class="title">{{ post.title }}</div>
        </div>
      </div>

      <div v-if="!listView" class="view-cards">
        <research-card
          v-for="card of toRender"
          :imageUrl="card.imageUrl" 
          :title="card.title"
          :description="card.description"
          :tags="card.tags"
          :date="card.date"
        />
      </div>

      <div v-if="filtered.length === 0" class="no-results">No items found</div>

      <div class="pagination">
        <div class="info">{{ startRange }}-{{ endRange }} of {{ total }}</div>
        <div :class="`prev ${currentPage === 0  ? 'disabled' : ''}`" @click="prevPage">Previous page</div>
        <div :class="`next ${currentPage >= maxPage  ? 'disabled' : ''}`" @click="nextPage">Next page</div>
      </div>
    </div> -->

      <app-footer />

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
// import { computed, ref, watch } from 'vue';

import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
// import ResearchCard from '@/components/ResearchCard';

// import data from '@/data/researchPapers';

import "./Researches.scss";

// const searchQuery = ref('');

// const listView = ref(false);

// function toggleView() {
//   listView.value = !listView.value;
// }

// const filtered = computed(() =>
//   data.filter(({ title }) => title.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase())));
// const total = computed(() => filtered.value.length);
// const currentPage = ref(0);
// const pageSize = computed(() => listView.value ? 4 : 3);
// const startRange = computed(() => currentPage.value * pageSize.value + 1);
// const endRange = computed(() => Math.min(currentPage.value * pageSize.value + pageSize.value, total.value));
// const toRender = computed(() => filtered.value.slice(
//   currentPage.value * pageSize.value,
//   currentPage.value * pageSize.value + pageSize.value
// ));
// const maxPage = computed(() => Math.ceil(total.value / pageSize.value - 1));

// watch(listView, () => {
//   currentPage.value = 0;
// });

// watch(searchQuery, () => {
//   currentPage.value = 0;
// });

// function nextPage() {
//   if (currentPage.value < maxPage.value) {
//     currentPage.value++;
//   }
// }

// function prevPage() {
//   if (currentPage.value > 0) {
//     currentPage.value--;
//   }
// }
</script>
