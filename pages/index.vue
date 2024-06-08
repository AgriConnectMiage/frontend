<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-6">
      <div class="flex flex-col items-center gap-2">
        <span class="text-4xl font-bold">AgriConnectMiage</span>
        <span class="text-xl font-light">Vive la MIAGE</span>
      </div>
      <div class="flex gap-4">
        <UButton to="/inventory" class="w-fit">Login</UButton>
        <UButton variant="outline" class="w-fit">Learn more</UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
</script>
