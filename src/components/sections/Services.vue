<script setup lang="ts">
</script>

<template>
  <section class="px-4 py-10 sm:px-6 lg:px-8">
    <div class="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-9">
      <!-- Free Shipping Card -->
      <div class="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-2xl shadow-3xl px-10 py-16 bg-white">
        <div class="w-11 h-11 flex justify-center items-center bg-blue-500 rounded-full">
          <img src="/src/assets/icons/truck-fast.svg" alt="Free shipping" width="24" height="24">
        </div>
        <h3 class="mt-5 text-3xl font-bold leading-normal font-palanquin">Free Shipping</h3>
        <p class="mt-3 text-lg leading-normal font-montserrat text-slate-gray">
          Enjoy seamless shopping with our complimentary shipping service.
        </p>
      </div>
      
      <!-- Secure Payment Card -->
      <div class="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-2xl shadow-3xl px-10 py-16 bg-white">
        <div class="w-11 h-11 flex justify-center items-center bg-green-500 rounded-full">
          <img src="/src/assets/icons/shield-tick.svg" alt="Secure Payment" width="24" height="24">
        </div>
        <h3 class="mt-5 text-3xl font-bold leading-normal font-palanquin">Secure Payment</h3>
        <p class="mt-3 text-lg leading-normal font-montserrat text-slate-gray">
          Experience worry-free transactions with our secure payment options.
        </p>
      </div>
      
      <!-- Love to Help You Card -->
      <div class="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-2xl shadow-3xl px-10 py-16 bg-white">
        <div class="w-11 h-11 flex justify-center items-center bg-red-500 rounded-full">
          <img src="/src/assets/icons/support.svg" alt="Love to help you" width="24" height="24">
        </div>
        <h3 class="mt-5 text-3xl font-bold leading-normal font-palanquin">Love to Help You</h3>
        <p class="mt-3 text-lg leading-normal font-montserrat text-slate-gray">
          Our dedicated team is here to assist you every step of the way.
        </p>
      </div>
    </div>
  </section>
</template>
