<template>
  <footer class="footer">
    <div class="footer__left">
      <img class="footer__logo" src="../../assets/footer-logo.png" />
      <div class="footer__description">AI & personalization at scale</div>
      <p class="footer__copyright">© 2024 CausalFoundry, Inc.</p>
    </div>

    <div class="footer__menu">
      <div class="footer__menu__row">
        <router-link :to="`/${currentLang}/products`"
          ><div class="footer__menu__item">
            {{ messages?.common?.products }}
          </div></router-link
        >
        <router-link :to="`/${currentLang}/research`"
          ><div class="footer__menu__item">
            {{ messages?.common?.research }}
          </div></router-link
        >
        <router-link :to="`/${currentLang}/careers`"
          ><div class="footer__menu__item">
            {{ messages?.common?.careers }}
          </div></router-link
        >
        <!--        <router-link to="/cases"-->
        <!--          ><div class="footer__menu__item">Cases</div></router-link-->
        <!--        >-->
      </div>
      <div class="footer__menu__row">
        <router-link :to="`/${currentLang}/about`"
          ><div class="footer__menu__item">
            {{ messages?.common?.about }}
          </div></router-link
        >
        <a target="_blank" href="`https://docs.causalfoundry.ai/`"
          ><div class="footer__menu__item">
            {{ messages?.common?.docs }}
          </div></a
        >
      </div>
      <div class="footer__menu__row">
        <router-link :to="`/${currentLang}/privacy`"
          ><div class="footer__menu__item">
            {{ messages?.common?.privacy }}
          </div></router-link
        >
        <router-link :to="`/${currentLang}/cookies`"
          ><div class="footer__menu__item">
            {{ messages?.common?.cookies }}
          </div></router-link
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

    <p class="footer__copyright__mobile">© 2025 CausalFoundry, Inc.</p>
  </footer>
</template>

<script lang="ts" setup>
import { EMAIL } from "@/data";
import { useRoute } from "vue-router";
import { useTranslations } from "@/composables/useTranslations";

const { currentTranslations: messages } = useTranslations("");

const route = useRoute();
const currentLang = Array.isArray(route.params.lang)
  ? route.params.lang[0]
  : route.params.lang || "en"; // Default to 'en' if no lang is specified
</script>
