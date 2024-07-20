<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}>();
</script>

<template>
  <button
    :class="[
      'flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full',
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red',
      { 'w-full': fullWidth }
    ]"
  >
    {{ label }}
    <img
      v-if="iconURL"
      :src="iconURL"
      alt="icon"
      class="ml-2 rounded-full bg-white w-5 h-5"
    />
  </button>
</template>




