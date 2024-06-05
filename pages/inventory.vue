<template>
  <div class="w-full h-full">
    <UButton icon="i-heroicons-question-mark-circle" class="mt-2 mb-4"
      >How does it work?</UButton
    >
    <div class="flex flex-col gap-4 lg:flex-row">
      <InventoryFieldContainer />
      <InventoryDeviceContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import InventoryFieldContainer from "~/components/inventory/field/Container.vue";
import InventoryDeviceContainer from "~/components/inventory/device/Container.vue";
</script>
