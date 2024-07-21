<script setup lang="ts">
</script>

<template>
  <section class="py-12 px-4">
    <section id="products" class="max-container max-sm:mt-12">
      <div class="flex flex-col justify-start gap-5">
        <h2 class="text-4xl font-palanquin font-bold dark:text-white">
          Our <span class="text-blue-700 dark:text-blue-400">Popular</span> Products
        </h2>
        <p class="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-slate-300">
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div class="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        <!-- Adidas Predator Cleats -->
        <div class="flex flex-1 flex-col w-full transform transition-transform duration-500 hover:scale-105 dark:hover:scale-110">
          <img src="/src/assets/images/shoe4.jpg" alt="Adidas Predator 20.1" class="w-[282px] h-[282px] mx-auto">
          <div class="mt-8 flex justify-start gap-2.5">
            <img src="/src/assets/icons/star.svg" alt="rating icon" width="24" height="24">
            <p class="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-300">(4.5)</p>
          </div>
          <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-white">Adidas Predator 20.1</h3>
          <p class="mt-2 font-semibold font-montserrat text-blue-600 dark:text-red-400 text-2xl leading-normal">$200.20</p>
        </div>
        
        <!-- Adidas Copa Mundial Cleats -->
        <div class="flex flex-1 flex-col w-full transform transition-transform duration-500 hover:scale-105 dark:hover:scale-110">
          <img src="/src/assets/images/shoe5.jpg" alt="Adidas Copa Mundial" class="w-[282px] h-[282px] mx-auto">
          <div class="mt-8 flex justify-start gap-2.5">
            <img src="/src/assets/icons/star.svg" alt="rating icon" width="24" height="24">
            <p class="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-300">(4.5)</p>
          </div>
          <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-white">Adidas Copa Mundial</h3>
          <p class="mt-2 font-semibold font-montserrat text-blue-600 dark:text-red-400 text-2xl leading-normal">$210.20</p>
        </div>

        <!-- Adidas X Ghosted Cleats -->
        <div class="flex flex-1 flex-col w-full transform transition-transform duration-500 hover:scale-105 dark:hover:scale-110">
          <img src="/src/assets/images/shoe6.jpg" alt="Adidas X Ghosted" class="w-[282px] h-[282px] mx-auto">
          <div class="mt-8 flex justify-start gap-2.5">
            <img src="/src/assets/icons/star.svg" alt="rating icon" width="24" height="24">
            <p class="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-300">(4.5)</p>
          </div>
          <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-white">Adidas X Ghosted</h3>
          <p class="mt-2 font-semibold font-montserrat text-blue-600 dark:text-red-400 text-2xl leading-normal">$220.20</p>
        </div>

        <!-- Adidas Nemeziz Cleats -->
        <div class="flex flex-1 flex-col w-full transform transition-transform duration-500 hover:scale-105 dark:hover:scale-110">
          <img src="/src/assets/images/shoe7.jpg" alt="Adidas Nemeziz" class="w-[282px] h-[282px] mx-auto">
          <div class="mt-8 flex justify-start gap-2.5">
            <img src="/src/assets/icons/star.svg" alt="rating icon" width="24" height="24">
            <p class="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-300">(4.5)</p>
          </div>
          <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-white">Adidas Nemeziz</h3>
          <p class="mt-2 font-semibold font-montserrat text-blue-600 dark:text-red-400 text-2xl leading-normal">$230.20</p>
        </div>
      </div>
    </section>
  </section>
</template>
