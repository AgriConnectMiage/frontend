<template>
  <div class="w-full h-full">
    <div class="flex flex-wrap gap-4">
      <DashboardStatsCard
        v-for="stat in classicStats"
        :title="stat.title"
        :value="stat.value"
      />
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
</script>
