<template>
  <!-- Application -->
  <div p="4">
    <span un-text="white">Hello</span>
    <UiButton @click="app.toggleRunning()" w="xl:400px 50px">Exit App</UiButton>
  </div>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});
</script>
