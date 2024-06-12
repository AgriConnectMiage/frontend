<template>
  <div class="h-full w-full">
    <UButton
      icon="i-heroicons-question-mark-circle"
      class="my-2"
      @click="isOpen = true"
      >How does it work?</UButton
    >
    <UModal v-model="isOpen" prevent-close>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              How does it work?
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>
        <template #default> Some explanations about the screen. </template>
      </UCard>
    </UModal>
    <div class="flex flex-col gap-2 lg:flex-row">
      <InventoryFieldContainer />
      <InventoryDeviceContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import InventoryFieldContainer from "~/components/inventory/field/Container.vue";
import InventoryDeviceContainer from "~/components/inventory/device/Container.vue";

const isOpen = ref(false);
</script>
