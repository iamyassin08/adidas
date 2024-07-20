<script setup lang="ts">
</script>

<template>
  <section class="px-4 py-10">
    <section class="flex flex-wrap justify-between items-center gap-10 max-container max-xl:flex-col-reverse">
      <div class="flex-1">
        <img src="/src/assets/images/offer.svg" alt="Shoe Promotion" width="773" height="687" class="object-contain w-full">
      </div>
      <div class="flex flex-1 flex-col">
        <h2 class="text-4xl font-palanquin font-bold">
          <span class="text-coral-red">Special </span>Offer
        </h2>
        <p class="mt-4 text-lg font-montserrat text-slate-gray leading-relaxed">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p class="mt-6 text-lg font-montserrat text-slate-gray leading-relaxed">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div class="mt-11 flex flex-wrap gap-4">
          <button class="flex justify-center items-center gap-2 px-7 py-4 bg-blue-600 text-white font-montserrat text-lg leading-none border border-blue-600 rounded-full hover:bg-blue-700">
            Shop now
            <img src="/src/assets/icons/arrow-right.svg" alt="arrow right icon" class="ml-2 w-5 h-5">
          </button>
          <button class="flex justify-center items-center gap-2 px-7 py-4 bg-white text-slate-gray font-montserrat text-lg leading-none border border-slate-gray rounded-full hover:bg-slate-gray hover:text-white">
            Learn more
          </button>
        </div>
      </div>
    </section>
  </section>
</template>
