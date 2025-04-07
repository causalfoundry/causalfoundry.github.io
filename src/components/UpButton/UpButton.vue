<template>
  <div
    v-if="isVisible"
    :class="['up-button', { visible: isVisible }]"
    @click="scrollToTop"
  >
    <span class="up-button__text">Up</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import "./up-button.scss";

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>
