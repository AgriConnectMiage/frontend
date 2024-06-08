<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <UCard>
    <template #header>
      <div class="text-xl truncate">{{ props.title }}</div>
    </template>
    <UButtonGroup size="md" orientation="horizontal">
      <UInput placeholder="0" />
      <UButton icon="i-heroicons-arrow-right-circle-16-solid" color="gray" />
    </UButtonGroup>
  </UCard>
</template>

<style scoped></style>
