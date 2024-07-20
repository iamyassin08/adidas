<script setup lang="ts">
import ServiceCard from '../cards/ServiceCard.vue';
import { services } from "../../constants"; // Import services data from index.js

// Use the imported services data
const serviceData = services;
</script>

<template>
  <section class="w-full flex flex-col justify-center items-center py-16 bg-light-gray">
    <h2 class="text-4xl font-bold mb-10">Our Services</h2>
    <div class="flex flex-wrap gap-8 justify-center">
      <ServiceCard
        v-for="(service, index) in serviceData"
        :key="index"
        :imgURL="service.imgURL"
        :label="service.label"
        :subtext="service.subtext"
      />
    </div>
  </section>
</template>
