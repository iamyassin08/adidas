<!-- components/CustomerReviews.vue -->
<template>
    <section class="max-container">
      <h3 class="font-palanquin text-center text-4xl font-bold">
        What Our
        <span class="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p class="m-auto mt-4 max-w-lg text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
  
      <div class="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        <ReviewCard
          v-for="(review, index) in reviews"
          :key="index"
          :imgURL="review.imgURL"
          :customerName="review.customerName"
          :rating="review.rating"
          :feedback="review.feedback"
        />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { reviews } from '../constants';
  import ReviewCard from './ReviewCard.vue';
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  