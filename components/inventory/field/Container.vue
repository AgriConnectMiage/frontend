<script setup lang="ts">
import Cell from "~/components/inventory/field/Cell.vue";
</script>

<template>
  <div class="flex flex-col w-full h-[600px] gap-2 overflow-auto lg:w-1/2">
    <div v-for="i in 14" :key="i" class="flex gap-2">
      <Cell v-for="j in 12" :key="j" />
    </div>
  </div>
</template>

<style scoped></style>
