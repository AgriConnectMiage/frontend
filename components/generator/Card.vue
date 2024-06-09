<script setup lang="ts">
const props = defineProps({
  title: String,
});

const value = ref();
</script>

<template>
  <UCard>
    <template #header>
      <div class="truncate text-xl">{{ props.title }}</div>
    </template>
    <div class="flex items-center justify-center">
      <UButton
        size="xl"
        icon="i-heroicons-plus-circle-16-solid"
        color="gray"
        @click="$emit('sendValue', value)"
      />
    </div>
  </UCard>
</template>

<style scoped></style>
