<template>
  <div ref="targetEl">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, Ref } from 'vue'

const targetEl = ref()

const emit = defineEmits(['intersect'])
const props = defineProps({
  threshold: { type: Number, default: 0.2 }
})

const observer: Ref<IntersectionObserver | undefined> = ref(undefined)

const unobserve = () => {
  if (observer.value) {
    observer.value.unobserve(targetEl.value)
    observer.value = undefined
  }
}
onMounted(() => {
  observer.value = new IntersectionObserver(
    entries => {
      emit('intersect', entries[0])
    },
    {
      root: null,
      rootMargin: '30px',
      threshold: props.threshold
    })

  if (targetEl.value) {
    observer.value.observe(targetEl.value)
  }
})

onBeforeUnmount(() => {
  unobserve()
})
</script>