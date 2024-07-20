<script setup lang="ts">
import { ref } from 'vue';

// Ensure `arrowRight2` is properly initialized
const arrowRight2 = '/assets/icons/arrow-right.svg'; // Example path

// Optionally, you can define other reactive properties or methods here
</script>

<template>
  <section class="special-offer-section">
    <h2 class="text-3xl font-bold mb-4">Special Offer</h2>
    <p class="text-lg mb-6">Don't miss out on our exclusive offers and discounts!</p>
    <button class="btn">
      <span>Learn More</span>
      <img :src="arrowRight2" alt="arrow right icon" class="ml-2" />
    </button>
  </section>
</template>

<style scoped>
.special-offer-section {
  padding: 20px;
  background-color: #f9f9f9;
}
.btn {
  display: flex;
  align-items: center;
  background-color: #c0392b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
