<template>
  <header class="header">
    <a href="/">
      <img src="../../assets/logo.png" class="header__logo" />
    </a>
    <div class="header__links">
      <router-link to="/research"><div :class="`header__item ${active === 'research' ? 'active' : ''}`">Research</div></router-link>
      <a target="_blank" href="https://docs.causalfoundry.ai/"><div class="header__item">Docs</div></a>
      <router-link to="/careers"><div :class="`header__item ${active === 'careers' ? 'active' : ''}`">Careers</div></router-link>
    </div>
    <div class="header__slot">
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage: 'careers' | 'main' | 'research';
}>();

const active = props.currentPage;
</script>
