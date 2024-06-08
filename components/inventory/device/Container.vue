<template>
  <div class="flex flex-1 flex-col gap-2">
    <UCard class="h-fit" v-for="card in cards">
      <template #header>
        <span class="text-lg font-bold">{{ card.title }}</span>
      </template>
      {{ card.content }}
    </UCard>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Global stats",
    content: "Summary of your fields",
  },
  {
    title: "Weather",
    content: "Current weather in your fields",
  },
  {
    title: "°C",
    content: "Temperature in your fields",
  },
  {
    title: "Issues",
    content: "Issues in your fields",
  },
];
</script>
