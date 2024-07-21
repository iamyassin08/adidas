<script setup lang="ts">
import { ref } from 'vue';

// Define an array of images
const images = [
  '/src/assets/images/thumbnail-shoe1.png',
  '/src/assets/images/thumbnail-shoe2.png',
  '/src/assets/images/thumbnail-shoe3.png'
];

// Define the current image to be displayed
const currentImage = ref('/src/assets/images/big-shoe1.jpg');

// Method to switch the main image based on the thumbnail clicked
function switchImage(image: string) {
  currentImage.value = image;
}
</script>

<template>
  <section class="xl:pl-12 xl:pr-12 pb-12 dark:bg-gray-800 dark:text-white transition-all duration-300">
    <section id="home" class="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div class="relative xl:w-2/5 flex flex-col justify-center items-start w-full xl:px-10 pt-28">
        <p class="text-xl font-montserrat text-blue-700 dark:text-coral-light transition-all duration-300">Our Summer collections</p>
        <h1 class="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold transition-all duration-300 dark:text-white">
          <span class="xl:bg-white xl:whitespace-nowrap relative z-10 pr-28 dark:text-black">The New Arrival</span><br>
          <span class="text-blue-700 inline-block mt-3 dark:text-coral-light">Adidas</span> Cleats
        </h1>
        <p class="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-gray-400 transition-all duration-300">
          Discover stylish Adidas arrivals, quality comfort, and innovation for your active life.
        </p>
        <button class="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
          bg-blue-700 text-white border-blue-700 rounded-full hover:bg-coral-light transition-all duration-300 dark:bg-coral-dark dark:border-coral-dark">
          Shop now
          <img src="/src/assets/icons/arrow-right.svg" alt="arrow right icon" class="ml-2 rounded-full bg-white w-5 h-5 transition-transform duration-300 hover:translate-x-1">
        </button>
        <div class="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          <div class="transition-transform duration-300 transform hover:scale-105">
            <p class="text-4xl font-palanquin font-bold dark:text-white">1k+</p>
            <p class="leading-7 font-montserrat text-slate-gray dark:text-gray-400">Brands</p>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-105">
            <p class="text-4xl font-palanquin font-bold dark:text-white">500+</p>
            <p class="leading-7 font-montserrat text-slate-gray dark:text-gray-400">Shops</p>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-105">
            <p class="text-4xl font-palanquin font-bold dark:text-white">250k+</p>
            <p class="leading-7 font-montserrat text-slate-gray dark:text-gray-400">Customers</p>
          </div>
        </div>
      </div>
      <div class="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center dark:bg-primary-dark transition-all duration-300">
        <!-- Main Image Display -->
        <img :src="currentImage" alt="shoe collection" width="610" height="502" class="object-contain relative z-10 transition-transform duration-300 hover:scale-105">
        <div class="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          <div v-for="image in images" :key="image">
            <div class="border-2 rounded-xl border-blue-700 cursor-pointer max-sm:flex-1 transition-transform duration-300 hover:scale-105"
              @click="switchImage(image)">
              <div class="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img :src="image" alt="shoe collection thumbnail" width="127" height="103.34" class="object-contain">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
