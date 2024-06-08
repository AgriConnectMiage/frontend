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
      class="min-w-16 min-h-16 rounded-lg transition-all flex items-center justify-center hover:opacity-50 hover:cursor-pointer"
      :style="getTemperatureStyle"
    >
      {{ getHumidity }}
    </div>
  </ClientOnly>
</template>

<style scoped></style>
