<script setup lang="ts">
</script>

<template>
  <section id="products" class="max-container max-sm:mt-12">
    <!-- Wrapper for centering content -->
    <div class="px-4 sm:px-6 lg:px-8">
      <!-- Centered content -->
      <div class="flex flex-col justify-start gap-5 mx-auto max-w-screen-xl">
        <h2 class="text-4xl font-palanquin font-bold">
          Our <span class="text-blue-700">Popular</span> Products
        </h2>
        <p class="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div class="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        <!-- Product Item with Background Image -->
        <div class="relative flex flex-1 flex-col w-full max-sm:w-full rounded-lg overflow-hidden">
          <div class="absolute inset-0 bg-[url('/src/assets/images/thumbnail-background.svg')] bg-cover bg-center"></div>
          <img src="/src/assets/images/shoe4.jpg" alt="Adidas Predator Edge" class="relative z-10 w-[282px] h-[282px] mx-auto mt-8">
          <div class="relative z-10 mt-8 flex justify-start gap-2.5">
            <img src="/src/assets/icons/star.svg" alt="rating icon" width="24" height="24">
            <p class="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
          </div>
          <h3 class="relative z-10 mt-2 text-2xl leading-normal font-semibold font-palanquin">Adidas Predator Edge</h3>
          <p class="relative z-10 mt-2 font-semibold font-montserrat text-blue-700 text-2xl leading-normal">$200.20</p>
        </div>

        <!-- Repeat for other product items -->
        <div class="relative flex flex-1 flex-col w-full max-sm:w-full rounded-lg overflow-hidden">
          <div class="absolute inset-0 bg-[url('/src/assets/images/thumbnail-background.svg')] bg-cover bg-center"></div>
          <img src="/src/assets/images/shoe5.jpg" alt="Adidas X Speedportal" class="relative z-10 w-[282px] h-[282px] mx-auto mt-8">
          <div class="relative z-10 mt-8 flex justify-start gap-2.5">
            <img src="/src/assets/icons/star.svg" alt="rating icon" width="24" height="24">
            <p class="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
          </div>
          <h3 class="relative z-10 mt-2 text-2xl leading-normal font-semibold font-palanquin">Adidas X Speedportal</h3>
          <p class="relative z-10 mt-2 font-semibold font-montserrat text-blue-700 text-2xl leading-normal">$210.20</p>
        </div>

        <div class="relative flex flex-1 flex-col w-full max-sm:w-full rounded-lg overflow-hidden">
          <div class="absolute inset-0 bg-[url('/src/assets/images/thumbnail-background.svg')] bg-cover bg-center"></div>
          <img src="/src/assets/images/shoe6.jpg" alt="Adidas Copa Sense" class="relative z-10 w-[282px] h-[282px] mx-auto mt-8">
          <div class="relative z-10 mt-8 flex justify-start gap-2.5">
            <img src="/src/assets/icons/star.svg" alt="rating icon" width="24" height="24">
            <p class="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
          </div>
          <h3 class="relative z-10 mt-2 text-2xl leading-normal font-semibold font-palanquin">Adidas Copa Sense</h3>
          <p class="relative z-10 mt-2 font-semibold font-montserrat text-blue-700 text-2xl leading-normal">$220.20</p>
        </div>

        <div class="relative flex flex-1 flex-col w-full max-sm:w-full rounded-lg overflow-hidden">
          <div class="absolute inset-0 bg-[url('/src/assets/images/thumbnail-background.svg')] bg-cover bg-center"></div>
          <img src="/src/assets/images/shoe7.jpg" alt="Adidas Nemeziz" class="relative z-10 w-[282px] h-[282px] mx-auto mt-8">
          <div class="relative z-10 mt-8 flex justify-start gap-2.5">
            <img src="/src/assets/icons/star.svg" alt="rating icon" width="24" height="24">
            <p class="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
          </div>
          <h3 class="relative z-10 mt-2 text-2xl leading-normal font-semibold font-palanquin">Adidas Nemeziz</h3>
          <p class="relative z-10 mt-2 font-semibold font-montserrat text-blue-700 text-2xl leading-normal">$230.20</p>
        </div>
      </div>
    </div>
  </section>
</template>
