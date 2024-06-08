<template>
  <div class="flex h-screen w-screen bg-green-100">
    <div
      class="hidden h-full flex-col items-center overflow-hidden bg-white md:flex md:w-56"
    >
      <img src="/assets/logo.svg" alt="logo" class="h-24 w-24" />
      <div class="mt-4 flex flex-col gap-4">
        <UButton
          v-for="button in BUTTONS"
          color="gray"
          :key="button.label"
          size="xl"
          :to="button.to"
          :icon="button.icon"
          variant="ghost"
          class="w-full text-center"
          :active-class="'bg-green-100'"
        >
          {{ button.label }}
        </UButton>
      </div>
    </div>
    <div class="flex flex-1 overflow-auto bg-[#E4E9E4] p-8">
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
  { label: "Sandbox", to: "/sandbox", icon: "i-heroicons-play-circle" },
  { label: "Settings", to: "/settings", icon: "i-heroicons-cog-solid" },
];
</script>
