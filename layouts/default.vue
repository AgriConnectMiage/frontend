<template>
  <div class="flex h-screen w-screen bg-green-100">
    <div
      class="w-56 h-full bg-white flex flex-col items-center overflow-hidden"
    >
      <img src="/logo.svg" alt="logo" class="w-24 h-24" />
      <div class="flex flex-col gap-4 mt-4">
        <UButton
          v-for="button in BUTTONS"
          color="gray"
          :key="button.label"
          size="xl"
          :to="button.to"
          :icon="button.icon"
          variant="ghost"
          class="w-full text-center"
          :active-class="'bg-[#E4E9E4]'"
        >
          {{ button.label }}
        </UButton>
      </div>
    </div>
    <div class="flex flex-1 p-4 bg-[#E4E9E4] overflow-auto">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const BUTTONS = [
  {
    label: "Inventory",
    to: "/inventory",
    icon: "i-heroicons-archive-box-solid",
  },
  { label: "Dashboard", to: "/dashboard", icon: "i-heroicons-chart-pie-solid" },
  { label: "Settings", to: "/settings", icon: "i-heroicons-cog-solid" },
];
</script>
