<script setup lang="ts">
import Cell from "~/components/inventory/field/Cell.vue";

// Between -10 and 40
const getRandomTemperature = () => Math.floor(Math.random() * 50) - 10;
// Between 0 and 100
const getRandomHumidity = () => Math.floor(Math.random() * 100);
</script>

<template>
  <div class="max-h-[600px] w-full overflow-auto lg:w-1/2">
    <UButton
      icon="i-heroicons-arrow-path-solid"
      class="mb-4 mt-2 bg-neutral-600 transition-all hover:bg-neutral-900"
    ></UButton>
    <div class="flex flex-col gap-2">
      <div v-for="i in 12" :key="i" class="flex gap-2">
        <Cell
          v-for="j in 12"
          :key="j"
          :temperature="getRandomTemperature()"
          :humidity="getRandomHumidity()"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
