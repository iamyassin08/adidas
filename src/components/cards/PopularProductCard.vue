<script setup lang="ts">
import { defineProps } from 'vue';

// Define component props
const props = defineProps<{
  imgURL: string;
  name: string;
  price: string;
}>();
</script>

<template>
  <div class="flex flex-1 flex-col items-center w-full max-sm:w-full p-4">
    <img :src="imgURL" :alt="name" class="w-full max-w-[282px] h-auto" />
    <div class="mt-8 flex justify-center gap-2.5">
      <img src="../assets/icons/star.svg" alt="rating icon" class="w-6 h-6" />
      <p class="font-montserrat text-xl leading-normal text-slate-gray">
        (4.5)
      </p>
    </div>
    <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin text-center">
      {{ name }}
    </h3>
    <p class="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal text-center">
      {{ price }}
    </p>
  </div>
</template>


