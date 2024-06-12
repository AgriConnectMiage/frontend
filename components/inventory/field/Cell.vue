<script setup lang="ts">
import { colorToCss, interpolateColor } from "~/utils/colors";

const props = defineProps({
  humidity: Number,
  temperature: Number,
  hasActionner: Boolean,
});

import { computed } from "vue";

const red = [255, 0, 0];
const green = [0, 255, 0];

const MIN_TEMP = -20;
const MAX_TEMP = 50;

const getTemperatureStyle = computed(() => {
  if (props.temperature !== undefined) {
    const factor = (props.temperature - MIN_TEMP) / (MAX_TEMP - MIN_TEMP);
    const color = interpolateColor(red, green, factor);
    return { backgroundColor: colorToCss(color) };
  }
  return {};
});

const getHumidity = computed(() => {
  if (props.humidity) {
    return props.humidity >= 50 ? "💧💧💧" : "💧";
  }
  return "";
});
</script>

<template>
  <ClientOnly>
    <div
      class="flex min-h-16 min-w-16 items-center justify-center rounded-lg transition-all hover:cursor-pointer hover:opacity-50"
      :style="getTemperatureStyle"
    >
      {{ getHumidity }}
    </div>
  </ClientOnly>
</template>

<style scoped></style>
