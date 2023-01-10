<template>
  <footer class="footer">
    <p class="footer__copyright">© 2023 CausalFoundry, Inc.</p>
    <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
  </footer>
</template>

<script lang="ts" setup>
import { EMAIL } from '@/data'
</script>