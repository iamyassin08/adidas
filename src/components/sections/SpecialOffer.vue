<script setup lang="ts">
</script>

<template>
  <section class="px-4 py-10 bg-white dark:bg-gray-900">
    <section class="flex flex-wrap justify-between items-center gap-10 max-container mx-auto max-xl:flex-col-reverse">
      <div class="flex-1 transition-transform duration-500 hover:scale-105">
        <img src="/src/assets/images/offer.png" alt="Shoe Promotion" width="773" height="687" class="object-cover w-full rounded-lg">
      </div>
      
      <div class="flex flex-1 flex-col">
        <h2 class="text-4xl font-palanquin font-bold text-gray-900 dark:text-gray-100 transition-transform duration-500 hover:translate-x-2">
          <span class="text-blue-600 dark:text-blue-400">Special </span>
          Offer
        </h2>
        <p class="mt-4 text-lg font-montserrat text-slate-gray dark:text-gray-300 leading-relaxed transition-opacity duration-500 hover:opacity-80">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p class="mt-6 text-lg font-montserrat text-slate-gray dark:text-gray-300 leading-relaxed transition-opacity duration-500 hover:opacity-80">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div class="mt-11 flex flex-wrap gap-4">
          <button class="flex justify-center items-center gap-2 px-7 py-4 bg-blue-600 text-white font-montserrat text-lg leading-none border border-blue-600 rounded-full hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
            Shop now
            <img src="/src/assets/icons/arrow-right.svg" alt="arrow right icon" class="ml-2 w-5 h-5 transition-transform duration-300 hover:translate-x-1">
          </button>
          <button class="flex justify-center items-center gap-2 px-7 py-4 bg-white text-slate-gray font-montserrat text-lg leading-none border border-slate-gray rounded-full hover:bg-slate-gray hover:text-white transition-transform duration-300 hover:scale-105">
            Learn more
          </button>
        </div>
      </div>
    </section>
  </section>
</template>
