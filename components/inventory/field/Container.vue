<script setup lang="ts">
import Cell from "~/components/inventory/field/Cell.vue";

// Between -10 and 40
const getRandomTemperature = () => Math.floor(Math.random() * 50) - 10;
// Between 0 and 100
const getRandomHumidity = () => Math.floor(Math.random() * 100);
</script>

<template>
  <div class="w-full h-[600px] lg:w-1/2">
    <UButton
      icon="i-heroicons-arrow-path-solid"
      class="mt-2 mb-4 bg-neutral-600 hover:bg-neutral-900 transition-all"
    ></UButton>
    <div class="flex flex-col gap-2 overflow-auto">
      <div v-for="i in 8" :key="i" class="flex gap-2">
        <Cell
          v-for="j in 8"
          :key="j"
          :temperature="getRandomTemperature()"
          :humidity="getRandomHumidity()"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
