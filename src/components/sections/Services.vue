<script setup lang="ts">
import ServiceCard from '../cards/ServiceCard.vue';


// Define the services data
const services = [
  {
    imgURL: '/assets/images/service1.png',
    label: 'Service One',
    subtext: 'Description for service one'
  },
  {
    imgURL: '/assets/images/service2.png',
    label: 'Service Two',
    subtext: 'Description for service two'
  },
  {
    imgURL: '/assets/images/service3.png',
    label: 'Service Three',
    subtext: 'Description for service three'
  }
];
</script>

<template>
  <section class="padding-x py-10"><section class="max-container flex justify-center flex-wrap gap-9"><div class="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"><div class="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full"><img src="/src/assets/icons/truck-fast.svg" alt="Free shipping" width="24" height="24"></div><h3 class="mt-5 font-palanquin text-3xl leading-normal font-bold">Free shipping</h3><p class="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">Enjoy seamless shopping with our complimentary shipping service.</p></div><div class="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"><div class="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full"><img src="/src/assets/icons/shield-tick.svg" alt="Secure Payment" width="24" height="24"></div><h3 class="mt-5 font-palanquin text-3xl leading-normal font-bold">Secure Payment</h3><p class="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">Experience worry-free transactions with our secure payment options.</p></div><div class="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"><div class="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full"><img src="/src/assets/icons/support.svg" alt="Love to help you" width="24" height="24"></div><h3 class="mt-5 font-palanquin text-3xl leading-normal font-bold">Love to help you</h3><p class="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">Our dedicated team is here to assist you every step of the way.</p></div></section></section>

</template>
