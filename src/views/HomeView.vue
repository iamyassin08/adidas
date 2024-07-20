<script setup lang="ts">
import HomeHero from "../components/sections/HomeHero.vue";
import CustomerReviews from "../components/sections/CustomerReviews.vue";
import PopularProducts from "../components/sections/PopularProducts.vue";
import Services from "../components/sections/Services.vue";
import SpecialOffer from "../components/sections/SpecialOffer.vue";
import Subscribe from "../components/sections/Subscribe.vue";
import SuperQuality from "../components/sections/SuperQuality.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <!-- <TheHeader /> -->
    </header>

    <!-- Main Content -->
    <main id="content" role="main" class="flex-1 pt-[59px] bg-gray-100 dark:bg-neutral-900">
      <HomeHero />
      <CustomerReviews />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <Subscribe />
    </main>

  </div>
</template>


