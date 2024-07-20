<script setup lang="ts">
import ShoeCard from '../cards/ShoeCard.vue';
import Button from '../Button.vue';

const shoeCards = [
  {
    imgURL: {
      bigShoe: '/assets/images/big-shoe1.png',
      thumbnail: '/assets/images/thumbnail1.png'
    },
    changeBigShoeImage: (url: string) => { console.log('Change to:', url); },
    bigShoeImg: '/assets/images/big-shoe1.png'
  }
];

const bigShoeImage = '/assets/images/big-shoe1.png';
</script>

<template>
  <section
    id="home"
    class="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
  >
    <div class="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p class="text-xl font-montserrat text-coral-red">
        Our Summer collections
      </p>

      <h1 class="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span class="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          The New Arrival
        </span>
        <br />
        <span class="text-coral-red inline-block mt-3">Adidas</span> Shoes
      </h1>
      <p class="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Discover stylish Adidas arrivals, quality comfort, and innovation for
        your active life.
      </p>

      <Button
        label="Shop now"
        iconURL="/assets/icons/arrow-right.svg"
      />

      <div class="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        <p class="text-4xl font-palanquin font-bold">10</p>
        <p class="leading-7 font-montserrat text-slate-gray">Collections</p>
      </div>
    </div>

    <div class="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img
        :src="bigShoeImage"
        alt="shoe collection"
        width="610"
        height="502"
        class="object-contain relative z-10"
      />

      <div class="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        <ShoeCard
          v-for="(card, index) in shoeCards"
          :key="index"
          :imgURL="card.imgURL"
          :changeBigShoeImage="card.changeBigShoeImage"
          :bigShoeImg="card.bigShoeImg"
        />
      </div>
    </div>
  </section>
</template>
