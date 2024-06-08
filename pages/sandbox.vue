<template>
  <div class="w-full h-full flex flex-col gap-4">
    <StylingTitle>📈 Basic Stats</StylingTitle>
    <div class="flex flex-wrap gap-4">
      <DashboardStatsCard
        v-for="stat in classicStats"
        :title="stat.title"
        :value="stat.value"
      />
    </div>
    <StylingTitle>🏭 Generator</StylingTitle>
    <div class="flex flex-wrap gap-4">
      <GeneratorCard v-for="generator in generators" :title="generator.title" />
    </div>
  </div>
</template>
<script setup lang="ts">
const classicStats = [
  { title: "🧑‍🌾 Farmers", value: 12 },
  { title: "🌾 Fields", value: 12 },
  { title: "📡 Sensors", value: 28 },
  { title: "💧 Actuators", value: 25 },
];

const generators = [
  { title: "🧑‍🌾 Farmers" },
  { title: "🌾 Fields" },
  { title: "📡 Sensors" },
  { title: "💧 Actuators" },
];
</script>
