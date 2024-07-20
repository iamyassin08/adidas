<script setup lang="ts">
import { defineProps } from 'vue';

// Define component props
const props = defineProps<{
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}>();
</script>

<template>
  <div class="flex justify-center items-center flex-col text-center p-4">
    <img
      :src="imgURL"
      alt="customer"
      class="rounded-full object-cover w-[120px] h-[120px]"
    />
    <p class="mt-6 max-w-sm info-text">
      {{ feedback }}
    </p>
    <div class="mt-3 flex justify-center items-center gap-2.5">
      <img
        src="../assets/icons/star.svg"
        width="24"
        height="24"
        alt="rating star"
        class="object-contain m-0"
      />
      <p class="text-xl font-montserrat text-slate-gray">
        ({{ rating }})
      </p>
    </div>
    <h3 class="mt-1 font-palanquin text-3xl font-bold">
      {{ customerName }}
    </h3>
  </div>
</template>




