<script setup lang="ts">
</script>

<template>
  <section class="xl:py-4 wide:py-4 py-4">
    <section id="home" class="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div class="relative xl:w-2/5 flex flex-col justify-center items-start w-full xl:px-12 pt-28">
        <p class="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 class="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span class="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br>
          <span class="text-blue-600 inline-block mt-3">Adidas</span> Shoes
        </h1>
        <p class="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Adidas arrivals, quality comfort, and innovation for your active life.
        </p>
        <button class="flex justify-center items-center gap-2 px-7 py-4 bg-blue-600 text-white border border-blue-600 rounded-full">
          Shop Now
          <img src="/src/assets/icons/arrow-right.svg" alt="arrow right icon" class="ml-2 rounded-full bg-white w-5 h-5">
        </button>
        <div class="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          <div>
            <p class="text-4xl font-palanquin font-bold">1k+</p>
            <p class="leading-7 font-montserrat text-slate-gray">Brands</p>
          </div>
          <div>
            <p class="text-4xl font-palanquin font-bold">500+</p>
            <p class="leading-7 font-montserrat text-slate-gray">Shops</p>
          </div>
          <div>
            <p class="text-4xl font-palanquin font-bold">250k+</p>
            <p class="leading-7 font-montserrat text-slate-gray">Customers</p>
          </div>
        </div>
      </div>
      <div class="relative flex-1 flex justify-center items-center xl:min-h-screen xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src="/src/assets/images/big-shoe1.png" alt="shoe collection" width="610" height="502" class="object-contain relative z-10">
        <div class="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          <div>
            <div class="border-2 rounded-xl border-coral-red cursor-pointer max-sm:flex-1">
              <div class="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img src="/src/assets/images/thumbnail-shoe1.svg" alt="shoe collection" width="127" height="103.34" class="object-contain">
              </div>
            </div>
          </div>
          <div>
            <div class="border-2 rounded-xl border-transparent cursor-pointer max-sm:flex-1">
              <div class="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img src="/src/assets/images/thumbnail-shoe2.svg" alt="shoe collection" width="127" height="103.34" class="object-contain">
              </div>
            </div>
          </div>
          <div>
            <div class="border-2 rounded-xl border-transparent cursor-pointer max-sm:flex-1">
              <div class="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img src="/src/assets/images/thumbnail-shoe3.svg" alt="shoe collection" width="127" height="103.34" class="object-contain">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
