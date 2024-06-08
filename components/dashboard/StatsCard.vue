<script setup lang="ts">
const props = defineProps({
  title: String,
  value: Number,
});
</script>

<template>
  <UCard
    :ui="{
      base: 'min-w-[200px]',
      ring: '',
      divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      body: {
        base: '',
        background: '',
        padding: 'p-4 sm:p-4',
      },
      header: {
        base: '',
        background: '',
        padding: 'p-4 sm:p-4',
      },
    }"
    class="w-fit"
  >
    <template #header>
      <div class="truncate text-xl">
        {{ props.title }}
      </div></template
    >
    <div class="p-0 text-2xl font-bold">
      {{ props.value }}
    </div>
  </UCard>
</template>

<style scoped></style>
