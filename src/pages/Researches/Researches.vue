<template>
  <div class="research">
    <div class="container">
    <img
      src="../../assets/gradient-top-yellow.png"
      class="app__gradient-top-yellow"
    />
    <img src="../../assets/gradient-top-blue.png" class="app__gradient-top-blue" />

    <app-header current-page="research">
      <app-menu />
    </app-header>

    <div class="jumbotron">
      <div class="jumbotron__title">We research and build AI products and deploy them reliably</div>
      <div class="jumbotron__description">
        We develop AI systems and technology to move healthcare to the next frontier.
        Robust data is the core of the products we build. We organize data
        to be AI-ready and deploy Models and AI systems safely.
      </div>
    </div>

    <div class="diagram">
      <div class="diagram__title">Causality and Reinforcement Learning as a Service</div>
      <div class="paragraph">
        We focus on advancing artificial intelligence through Causal Inference and Reinforcement
        Learning research. Through our work in Causality, we enable AI systems not just to predict outcomes,
        but to understand the underlying reasons behind these outcomes, paving the way for more
        accurate and reliable predictions in complex environments. In Reinforcement Learning, we
        are pioneering methods for AI to learn and adapt from environmental interactions,
        enhancing decision-making processes.
      </div>
      <div class="paragraph">
        Our research is not just theoretical but is readily available as a service,
        enabling our partners to harness data-driven insights and optimize operations.
      </div>
      <div class="diagram__image">
        <img src="../../assets/research_diagram.png" />
      </div>

      <div class="paragraph">
        The application of AI methodologies to extract and predict valuable information to inform
        intervention design lies at the core of the software we build. As is generally the case,
        no single model is best across all datasets and use cases, and frequently, no single
        model is best across all time horizons within a single dataset. This presents a
        challenge to standard methods of model selection or ensemble creation. Our team has a broad
        knowledge of AI techniques, bringing extensive expertise around the cornerstones of our
        research and development, illustrated above.
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
import { computed, ref, watch } from 'vue';

import AppHeader from "@/components/AppHeader";
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import ResearchCard from '@/components/ResearchCard';

import data from '@/data/researchPapers';

import './Researches.scss';

const searchQuery = ref('');

const listView = ref(false);

function toggleView() {
  listView.value = !listView.value;
}

const filtered = computed(() => 
  data.filter(({ title }) => title.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase())));
const total = computed(() => filtered.value.length);
const currentPage = ref(0);
const pageSize = computed(() => listView.value ? 4 : 3);
const startRange = computed(() => currentPage.value * pageSize.value + 1);
const endRange = computed(() => Math.min(currentPage.value * pageSize.value + pageSize.value, total.value));
const toRender = computed(() => filtered.value.slice(
  currentPage.value * pageSize.value,
  currentPage.value * pageSize.value + pageSize.value
));
const maxPage = computed(() => Math.ceil(total.value / pageSize.value - 1));

watch(listView, () => {
  currentPage.value = 0;
});

watch(searchQuery, () => {
  currentPage.value = 0;
});

function nextPage() {
  if (currentPage.value < maxPage.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
}

</script>
