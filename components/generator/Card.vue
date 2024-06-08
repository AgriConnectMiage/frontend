<script setup lang="ts">
const props = defineProps({
  title: String,
});

const value = ref();
</script>

<template>
  <UCard>
    <template #header>
      <div class="text-xl truncate">{{ props.title }}</div>
    </template>
    <UButtonGroup size="md" orientation="horizontal">
      <UInput placeholder="0" v-model="value" />
      <UButton
        icon="i-heroicons-arrow-right-circle-16-solid"
        color="gray"
        @click="$emit('sendValue', value)"
      />
    </UButtonGroup>
  </UCard>
</template>

<style scoped></style>
