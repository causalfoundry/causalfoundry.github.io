<template>
  <div :class="['cookie-popup', { 'show-cookie': show }]">
    <div class="container">
      <div class="info">
        We utilize cookies on our website to optimize your browsing experience
        and to analyze our website traffic. By clicking “Accept”, you agree to
        the storing of cookies on yur device to enhance site navigation and
        analyze site usage.
        <a href="/cookies" target="_blank">View our cookie policy.</a>
      </div>
      <div class="buttons">
        <button class="accept" @click="onAccepted">Accept</button>
        <button class="decline" @click="onDeclined">Decline</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import "./CookiePopup.scss";

const show = ref(false);

declare var gtag: (...args: any[]) => void;

function initGA() {
  gtag("js", new Date());
  gtag("config", "G-YS5BMJCPR8");
}

function onAccepted() {
  localStorage.setItem("cookie:accepted", "true");
  initGA();
  show.value = false;
}

function onDeclined() {
  localStorage.setItem("cookie:accepted", "false");
  show.value = false;
}

onMounted(() => {
  setTimeout(() => {
    const cookieConsent = localStorage.getItem("cookie:accepted");

    if (!cookieConsent) {
      show.value = true;
    }

    if (cookieConsent === "true") {
      initGA();
    }
  }, 1000);
});
</script>
