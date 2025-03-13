<template>
  <div class="dynamic-text">
    <span>{{ currentText }}</span>
    <span class="cursor" v-if="isCursorVisible">|</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  values: string[];
}>();

const currentText = ref("");
const currentIndex = ref(0);
const isCursorVisible = ref(true);
const typingSpeed = 200;
const eraseSpeed = 50;
const delayBeforeErase = 1000;

const typeInterval = ref<number | null>(null);

const typeAndEraseText = () => {
  const value = props.values[currentIndex.value];
  let charIndex = 0;
  clearInterval(typeInterval.value!);

  typeInterval.value = setInterval(() => {
    if (!value) {
      return;
    }

    currentText.value += value[charIndex];
    charIndex++;

    if (charIndex === value.length) {
      clearInterval(typeInterval.value!);
      typeInterval.value = null;

      setTimeout(() => {
        eraseText();
      }, delayBeforeErase);
    }
  }, typingSpeed);
};

const eraseText = () => {
  let charIndex = currentText.value.length;

  const eraseInterval = setInterval(() => {
    currentText.value = currentText.value.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      clearInterval(eraseInterval);

      currentIndex.value = (currentIndex.value + 1) % props.values.length;
      typeAndEraseText();
    }
  }, eraseSpeed);
};

const clearTypeInterval = () => {
  if (typeInterval.value !== null) {
    clearInterval(typeInterval.value);
    typeInterval.value = null;
  }
};

watch(
  () => props.values,
  (newValues) => {
    if (newValues && newValues.every((value) => value !== undefined)) {
      typeAndEraseText();
    }
  }
);
</script>
