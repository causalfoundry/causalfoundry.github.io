<template>
  <div class="get-in-touch" :class="{ highlighted: highlighted }">
    <div>Want to Know More?</div>
    <div>
      Talk to our experts and explore how AI can transform your services
    </div>
    <Button value="GET IN TOUCH" />
  </div>
</template>

<script setup lang="ts">
import "./get-in-touch.scss";

import Button from "@/ui-components/button";

const props = defineProps<{
  highlighted?: boolean;
}>();
</script>
