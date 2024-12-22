<template>
  <footer class="footer">
    <div class="footer__left">
      <img class="footer__logo" src="../../assets/footer-logo.png" />
      <div class="footer__description">
        AI & personalization to solve the most significant challenges in
        healthcare
      </div>
      <p class="footer__copyright">© 2024 CausalFoundry, Inc.</p>
    </div>

    <div class="footer__menu">
      <div class="footer__menu__row">
        <router-link to="/products"
          ><div class="footer__menu__item">Products</div></router-link
        >
        <router-link to="/research"
          ><div class="footer__menu__item">Research</div></router-link
        >
        <router-link to="/cases"
          ><div class="footer__menu__item">Cases</div></router-link
        >
      </div>
      <div class="footer__menu__row">
        <router-link to="/about"
          ><div class="footer__menu__item">About</div></router-link
        >
        <a target="_blank" href="https://docs.causalfoundry.ai/"
          ><div class="footer__menu__item">Doc</div></a
        >
        <router-link to="/careers"
          ><div class="footer__menu__item">Careers</div></router-link
        >
      </div>
      <div class="footer__menu__row">
        <router-link to="/privacy"
          ><div class="footer__menu__item">Privacy</div></router-link
        >
        <router-link to="/cookies"
          ><div class="footer__menu__item">Cookies</div></router-link
        >
      </div>
    </div>

    <div class="footer__right">
      <div class="footer__links">
        <a
          href="https://bsky.app/profile/causalfoundry.bsky.social"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'bluesky']" class="social-icon" />
        </a>

        <a href="https://twitter.com/Causal_Foundry" target="_blank">
          <font-awesome-icon :icon="['fab', 'x-twitter']" class="social-icon" />
        </a>

        <a
          href="https://www.linkedin.com/company/causal-foundry"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon" />
        </a>
      </div>
      <a class="footer__email" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
    </div>

    <p class="footer__copyright__mobile">© 2024 CausalFoundry, Inc.</p>
  </footer>
</template>

<script lang="ts" setup>
import { EMAIL } from "@/data";
</script>
