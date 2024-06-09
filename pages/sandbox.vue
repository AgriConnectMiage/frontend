<template>
  <div class="flex h-full w-full flex-col gap-4">
    <StylingTitle>📈 Basic Stats</StylingTitle>

    <div class="flex flex-wrap gap-4">
      <DashboardStatsCard
        v-for="stat in stats"
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
import { computed } from "vue";
import { generatorService } from "~/service/generator-service";
import { farmerService } from "~/service/farmer-service";
import { fieldService } from "~/service/field-service";
import { sensorService } from "~/service/sensor-service";
import { actuatorService } from "~/service/actuator-service";

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
  }
};

const { data: farmers, pending: farmersPending } = await useAsyncData(
  "farmers",
  () => farmerService.getAllFarmers(),
);

const { data: fields, pending: fieldsPending } = await useAsyncData(
  "fields",
  () => fieldService.getAllFields(),
);

const { data: sensors, pending: sensorsPending } = await useAsyncData(
  "sensors",
  () => sensorService.getAllSensors(),
);

const { data: actuators, pending: actuatorsPending } = await useAsyncData(
  "actuators",
  () => actuatorService.getAllActuators(),
);

const stats = computed(() => {
  if (
    farmersPending.value ||
    fieldsPending.value ||
    sensorsPending.value ||
    actuatorsPending.value
  ) {
    return [];
  }
  return [
    { title: "Farmers", value: farmers.value?.length ?? 0 },
    { title: "Fields", value: fields.value?.length ?? 0 },
    { title: "Sensors", value: sensors.value?.length ?? 0 },
    { title: "Actuators", value: actuators.value?.length ?? 0 },
  ];
});
</script>
