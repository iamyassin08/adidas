<!-- components/Services.vue -->
<template>
    <section class="max-container flex justify-center flex-wrap gap-9">
      <ServiceCard
        v-for="service in services"
        :key="service.label"
        v-bind="service"
      />
    </section>
  </template>
  
  <script setup lang="ts">
  import { services } from '@/router/constants';
  import ServiceCard from '@/components/ServiceCard.vue';
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  