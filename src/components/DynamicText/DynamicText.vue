<template>
  <div class="dynamic-text">
    <span>{{ currentText }}</span>
    <span class="cursor" v-if="isCursorVisible">|</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Recibimos las propiedades directamente usando defineProps
const props = defineProps<{
  values: string[];
}>();

const currentText = ref("");
const currentIndex = ref(0);
const isCursorVisible = ref(true);
const typingSpeed = 200;
const eraseSpeed = 50;
const delayBeforeErase = 1000;

// Función para alternar entre los valores
const typeAndEraseText = () => {
  const value = props.values[currentIndex.value];
  let charIndex = 0;

  // Escribir el texto
  const typeInterval = setInterval(() => {
    currentText.value += value[charIndex];
    charIndex++;

    if (charIndex === value.length) {
      clearInterval(typeInterval);

      // Esperar un tiempo antes de borrar el texto
      setTimeout(() => {
        eraseText();
      }, delayBeforeErase);
    }
  }, typingSpeed);
};

// Función para borrar el texto
const eraseText = () => {
  let charIndex = currentText.value.length;

  const eraseInterval = setInterval(() => {
    currentText.value = currentText.value.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      clearInterval(eraseInterval);

      // Cambiar al siguiente valor y empezar de nuevo
      currentIndex.value = (currentIndex.value + 1) % props.values.length;
      typeAndEraseText();
    }
  }, eraseSpeed);
};

// Iniciar el efecto de escritura
onMounted(() => {
  typeAndEraseText();
});
</script>
