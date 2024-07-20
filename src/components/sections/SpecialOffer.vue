<script setup lang="ts">
import { ref } from 'vue';

// Ensure `arrowRight2` is properly initialized
const arrowRight2 = '/assets/icons/arrow-right.svg'; // Example path

// Optionally, you can define other reactive properties or methods here
</script>

<template>
  <section class="padding"><section class="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"><div class="flex-1"><img src="/src/assets/images/offer.svg" alt="Shoe Promotion" width="773" height="687" class="object-contain w-full"></div><div class="flex flex-1 flex-col"><h2 class="text-4xl font-palanquin font-bold"><span class="text-coral-red">Special </span>Offer</h2><p class="mt-4 info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p><p class="mt-6 info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p><div class="mt-11 flex flex-wrap gap-4"><button class="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    bg-coral-red text-white border-coral-red rounded-full undefined">Shop now<img src="/src/assets/icons/arrow-right.svg" alt="arrow right icon" class="ml-2 rounded-full bg-white w-5 h-5"></button><button class="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    bg-white text-slate-gray border-slate-gray rounded-full undefined">Learn more</button></div></div></section></section>
  </template>
