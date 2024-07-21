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

  <header
  class="fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
  <TheHeader />
</header>
<main id="content" role="main" class="pt-[59px]">
  <HomeHero />
    
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </main>


</template>


