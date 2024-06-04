<script setup lang="ts">
import Cell from "~/components/inventory/field/Cell.vue";
</script>

<template>
  <div class="flex flex-col gap-2 w-1/2 overflow-auto">
    <div v-for="i in 8" :key="i" class="flex gap-2">
      <Cell v-for="j in 8" :key="j" />
    </div>
  </div>
</template>

<style scoped></style>
