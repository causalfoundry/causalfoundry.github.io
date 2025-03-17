<template>
  <div class="get-in-touch-page">
    <img
      src="../../assets/gradient-top-yellow.png"
      class="app__gradient-top-yellow"
    />
    <img
      src="../../assets/gradient-top-blue.png"
      class="app__gradient-top-blue"
    />

    <AppHeader><AppMenu /></AppHeader>

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
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              placeholder="Enter Name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              placeholder="Enter Email"
            />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number (optional)</label>
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
              placeholder="Enter Phone Number"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              placeholder="Type your message here..."
            ></textarea>
          </div>
        </div>
        <div class="form-container__send_button">
          <Button value="SEND MESSAGE" />
        </div>
      </form>
    </div>

    <div class="hex">
      <img src="../../assets/pattern-hex.png" alt="" />
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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Reset form values after successful submission
      form.value = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
      submitted.value = true;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>
