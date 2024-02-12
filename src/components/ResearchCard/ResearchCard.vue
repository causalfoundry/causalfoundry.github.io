<template>
  <div class="research-card">
    <div class="research-card__image">
      <img :src="props.imageUrl" alt="research image">
    </div>
    <div class="research-card__body">
      <div class="research-card__tags">
        <div v-for="tag of props.tags" :class="`research-card__tag ${tag}`">{{ tagsMap[tag] }}</div>
      </div>
      <div class="research-card__title">{{ props.title }}</div>
      <div class="research-card__description">{{ props.description }}</div>
      <div class="research-card__date">{{ props.date }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tags } from '@/typings/research';

const tagsMap = {
  [Tags.AI]: 'AI',
  [Tags.DataScience]: 'Data Science',
};

const props = defineProps<{
  tags: Tags[];
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}>();
</script>
