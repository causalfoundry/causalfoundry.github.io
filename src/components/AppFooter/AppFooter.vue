<template>
  <footer class="footer">
    <div class="footer__left">
      <img class="footer__logo" src="../../assets/footer-logo.png"/>
      <div class="footer__description">AI & personalization to solve the most significant challenges in healthcare</div>
      <p class="footer__copyright">© 2023 CausalFoundry, Inc.</p>
    </div>
   
    <div class="footer__right">
      <div class="footer__links">
        <a href="https://twitter.com/Causal_Foundry" target="_blank"><img src="../../assets/twitter-logo.png" /></a>
        <a href="https://www.linkedin.com/company/causal-foundry" target="_blank"><img src="../../assets/linkedin-logo.png" /></a>
      </div>
      <a class="footer__email" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
    </div>

    <p class="footer__copyright__mobile">© 2024 CausalFoundry, Inc.</p>
  </footer>
</template>

<script lang="ts" setup>
import { EMAIL } from '@/data'
</script>
