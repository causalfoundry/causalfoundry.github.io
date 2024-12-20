<template>
  <div class="get-in-touch-page">
    <AppHeader>
      <AppMenu />
    </AppHeader>

    <div class="get-in-touch-page__title">
      <AppTitle>Get in Touch</AppTitle>
    </div>
    <div class="get-in-touch-page__subtitle">
      Talk to our experts and explore how AI can transform your services
    </div>

    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-container__elements">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number (optional):</label>
            <input type="tel" id="phone" v-model="form.phone" />
          </div>

          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
            ></textarea>
          </div>
        </div>
        <div class="form-container__button">
          <Button value="SEND MESSAGE" />
        </div>
      </form>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppMenu from "@/components/AppMenu";

import AppTitle from "@/components/AppTitle";

import Button from "@/ui-components/button";

import "./get-in-touch-page.scss";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const submitted = ref(false);

const handleSubmit = () => {
  // Reset the form after submission (optional)

  fetch(
    `https://hooks.slack.com/services/T04AWARHR1A/${
      import.meta.env.VITE_SLACK_WEBHOOK
    }`,
    {
      method: "POST",
      body: JSON.stringify({
        text: `New demo request: ${form.value.name} (${form.value.email}, ${
          form.value.phone || "<no phone>"
        }): ${form.value.message}`,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>
