<script setup lang="ts">
</script>

<template>
  <section class="bg-pale-blue dark:bg-gray-800 px-4 py-10 sm:px-6 lg:px-8">
    <section class="max-container mx-auto">
      <h3 class="font-palanquin text-center text-4xl font-bold text-gray-900 dark:text-gray-100 transition-transform duration-500 hover:translate-y-1">
        What Our <span class="text-blue-700">Customers</span> Say?
      </h3>
      <p class="m-auto mt-4 max-w-lg text-center text-gray-700 dark:text-gray-300 transition-opacity duration-500 hover:opacity-80">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div class="mt-24 flex flex-wrap justify-evenly items-center gap-14">
        <div class="flex justify-center items-center flex-col transition-transform duration-500 hover:scale-105">
          <img src="/src/assets/images/customer1.jpeg" alt="customer" class="rounded-full object-cover w-[120px] h-[120px] border-2 border-gray-300 dark:border-gray-700">
          <p class="mt-6 max-w-sm text-center text-gray-700 dark:text-gray-300 transition-opacity duration-500 hover:opacity-80">
            The attention to detail and the quality of the product exceeded my expectations. Highly recommended!
          </p>
          <div class="mt-3 flex justify-center items-center gap-2.5">
            <img src="/src/assets/icons/star.svg" width="24" height="24" alt="rating star" class="object-contain m-0">
            <p class="text-xl font-montserrat text-gray-800 dark:text-gray-200">(4.5)</p>
          </div>
          <h3 class="mt-1 font-palanquin text-3xl text-center font-bold text-gray-900 dark:text-gray-100 transition-transform duration-500 hover:translate-y-1">
            Robin Van Persie
          </h3>
        </div>
        <div class="flex justify-center items-center flex-col transition-transform duration-500 hover:scale-105">
          <img src="/src/assets/images/customer2.svg" alt="customer" class="rounded-full object-cover w-[120px] h-[120px] border-2 border-gray-300 dark:border-gray-700">
          <p class="mt-6 max-w-sm text-center text-gray-700 dark:text-gray-300 transition-opacity duration-500 hover:opacity-80">
            The product not only met but exceeded my expectations. I'll definitely be a returning customer!
          </p>
          <div class="mt-3 flex justify-center items-center gap-2.5">
            <img src="/src/assets/icons/star.svg" width="24" height="24" alt="rating star" class="object-contain m-0">
            <p class="text-xl font-montserrat text-gray-800 dark:text-gray-200">(4.5)</p>
          </div>
          <h3 class="mt-1 font-palanquin text-3xl text-center font-bold text-gray-900 dark:text-gray-100 transition-transform duration-500 hover:translate-y-1">
            Alex Morgan
          </h3>
        </div>
      </div>
    </section>
  </section>
</template>
