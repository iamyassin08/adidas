<script setup lang="ts">
import { ref } from 'vue';

const bigShoeImg = ref('/src/assets/images/big-shoe1.png');
const shoes = [
  "/src/assets/images/thumbnail-shoe1.png",
  '/src/assets/images/thumbnail-shoe2.png',
  '/src/assets/images/thumbnail-shoe3.png'
];

const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' }
];

const changeBigShoeImage = (shoe) => {
  bigShoeImg.value = shoe;
};
</script>

<template>
  <section class="py-4 xl:py-4 wide:py-4 dark:bg-gray-900">
    <section id="home" class="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container dark:text-white">
      <div class="relative flex flex-col justify-center items-start w-full xl:w-2/5 xl:px-12 pt-28">
        <p class="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 class="mt-10 text-8xl font-bold font-palanquin max-sm:text-[72px] max-sm:leading-[82px]">
          <span class="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap dark:bg-gray-800">The New Arrival</span><br>
          <span class="inline-block mt-3 text-blue-600">Adidas</span> Shoes
        </h1>
        <p class="mt-6 mb-14 text-lg leading-8 font-montserrat text-slate-gray sm:max-w-sm dark:text-gray-300">
          Discover stylish Adidas arrivals, quality comfort, and innovation for your active life.
        </p>
        <button class="flex items-center justify-center gap-2 px-7 py-4 text-white bg-blue-600 border border-blue-600 rounded-full">
          Shop Now
          <img src="/src/assets/icons/arrow-right.svg" alt="arrow right icon" class="w-5 h-5 ml-2 bg-white rounded-full">
        </button>
        <div class="flex flex-wrap justify-start w-full mt-20 gap-16">
          <div v-for="(stat, index) in statistics" :key="index">
            <p class="text-4xl font-bold font-palanquin">{{ stat.value }}</p>
            <p class="leading-7 font-montserrat text-slate-gray dark:text-gray-300">{{ stat.label }}</p>
          </div>
        </div>
      </div>
      <div class="relative flex items-center justify-center flex-1 py-40 bg-cover bg-center bg-primary bg-hero xl:min-h-screen">
        <img :src="bigShoeImg" alt="shoe collection" width="610" height="502" class="relative z-10 object-contain">
        <div class="absolute flex gap-4 -bottom-[5%] sm:gap-6 sm:left-[10%] max-sm:px-6">
          <div v-for="(image, index) in shoes" :key="index" @click="changeBigShoeImage(image)">
            <div class="cursor-pointer border-2 border-transparent rounded-xl max-sm:flex-1" :class="{'border-coral-red': bigShoeImg === image}">
              <div class="flex items-center justify-center w-40 h-40 bg-cover bg-center rounded-xl sm:w-40 sm:h-40 bg-card max-sm:p-4">
                <img :src="image" alt="shoe collection" width="127" height="103.34" class="object-contain">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
