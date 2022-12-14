<template>
  <footer>
    <p>© 2023 CausalFoundry, Inc.</p>
    <a :href="`mailto:${email}`">{{ email }}</a>
  </footer>
</template>

<script lang="ts" setup>
const email = 'hello@causalfoundry.ai'
</script>