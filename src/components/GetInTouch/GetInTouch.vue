<template>
  <div class="get-in-touch" :class="{ highlighted: highlighted }">
    <div>Want to Know More?</div>
    <div>
      Talk to our experts and explore how AI can transform your services
    </div>
    <Button value="GET IN TOUCH" @click="handleButtonClick" />
  </div>
</template>

<script setup lang="ts">
import "./get-in-touch.scss";

import { useRouter } from "vue-router";
import Button from "@/ui-components/button";

const router = useRouter();

function handleButtonClick(event: MouseEvent) {
  router.push("/contact");
}

const props = defineProps<{
  highlighted?: boolean;
}>();
</script>
