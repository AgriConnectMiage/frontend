<template>
  <div class="flex h-full w-full flex-col gap-4">
    <StylingTitle>📈 Basic Stats</StylingTitle>
    <div class="flex flex-wrap gap-4">
      <DashboardStatsCard
        v-for="stat in classicStats"
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
      />
    </div>
    <StylingTitle>🏭 Generator</StylingTitle>
    <div class="flex flex-wrap gap-4">
      <GeneratorCard
        v-for="generator in generators"
        :key="generator.title"
        :title="generator.title"
        @sendValue="handleEvent(generator.path, $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useFetch } from "@vueuse/core"; // Assuming you are using vueuse for data fetching
import type { Actuator, Farmer, Field, Sensor } from "~/types/types";
import { generatorService } from "~/service/generator-service";

const classicStats = ref<{ title: string; value: number }[]>([]);

const generators = [
  { title: "🧑‍🌾 Farmers", path: "farmers" },
  { title: "🌾 Fields", path: "fields" },
  { title: "📡 Sensors", path: "sensors" },
  { title: "💧 Actuators", path: "actuators" },
];

const handleEvent = (path: string, value: number) => {
  switch (path) {
    case "farmers":
      generatorService.generateFarmer();
      break;
    case "fields":
      classicStats.value[1].value += value;
      break;
    case "sensors":
      classicStats.value[2].value += value;
      break;
    case "actuators":
      classicStats.value[3].value += value;
      break;
  }
};

const fetchData = async () => {
  try {
    const responses = await Promise.all([
      useFetch<Farmer[]>("http://localhost/api/management/farmers").json(),
      useFetch<Field[]>("http://localhost/api/management/fields").json(),
      useFetch<Sensor[]>("http://localhost/api/management/sensors").json(),
      useFetch<Actuator[]>("http://localhost/api/management/actuators").json(),
    ]);

    const [farmers, fields, sensors, actuators] = responses.map(
      (response) => response.data.value,
    );

    classicStats.value = [
      {
        title: "🧑‍🌾 Farmers",
        value: farmers.length,
      },
      { title: "🌾 Fields", value: fields.length },
      { title: "📡 Sensors", value: sensors.length },
      { title: "💧 Actuators", value: actuators.length },
    ];
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>
