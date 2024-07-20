<script lang="ts">
import { defineComponent } from 'vue';
import { useDarkMode } from '../../assets/useDarkMode';
const { isDark, toggleDarkMode } = useDarkMode();

export default defineComponent({
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      console.log('Toggling mobile menu:', this.isMobileMenuOpen); // Debugging statement
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleDarkMode() {
      toggleDarkMode();
    },
    isDarkModeActive() {
      return isDark.value;
    },
  },
});
</script>

<template>
  <header class="sticky top-4 inset-x-0 flex flex-wrap md:justify-between md:flex-nowrap z-50 w-full bg-white shadow-lg">
    <nav class="flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <!-- Logo -->
      <a href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg"
          alt="logo"
          class="w-[129px] h-[29px]"
        />
      </a>

      <!-- Navigation Links -->
      <ul class="hidden lg:flex flex-1 justify-center items-center gap-8">
        <li><a href="#home" class="font-montserrat text-lg text-slate-gray hover:text-blue-600">Home</a></li>
        <li><a href="#about-us" class="font-montserrat text-lg text-slate-gray hover:text-blue-600">About Us</a></li>
        <li><a href="#products" class="font-montserrat text-lg text-slate-gray hover:text-blue-600">Products</a></li>
        <li><a href="#contact-us" class="font-montserrat text-lg text-slate-gray hover:text-blue-600">Contact Us</a></li>
      </ul>

      <!-- Sign in and Explore Links -->
      <div class="hidden lg:flex gap-4 text-lg font-medium font-montserrat">
        <a href="/" class="text-slate-gray hover:text-blue-600">Sign in</a>
        <span>/</span>
        <a href="/" class="text-slate-gray hover:text-blue-600">Explore now</a>
      </div>

      <!-- Dark mode -->
      <div class="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">

      <button 
        @click="toggleDarkMode"
        type="button" 
        class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-red-600 font-medium dark:text-neutral-400 dark:hover:text-neutral-500"
        :class="{ hidden: isDarkModeActive() }"
      >
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </button>
      <button 
        @click="toggleDarkMode"
        type="button" 
        class="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-red-600 font-medium dark:text-neutral-400 dark:hover:text-neutral-500"
        :class="{ hidden: !isDarkModeActive() }"
      >
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      </button>
      <!-- End of Dark Mode -->


      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden flex items-center">
        <img
          src="../../assets/icons/hamburger.svg"
          alt="hamburger menu icon"
          class="w-[25px] h-[25px]"
          @click="toggleMobileMenu"
          aria-label="Toggle mobile menu"
        />
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="fixed inset-0 bg-white shadow-lg z-20 lg:hidden flex flex-col items-center py-8 space-y-4 transition-transform transform"
      :class="{'translate-x-0': isMobileMenuOpen, '-translate-x-full': !isMobileMenuOpen}"
      @click.self="toggleMobileMenu"
    >
      <nav class="flex flex-col items-center w-full space-y-4">
        <a href="#home" class="text-lg text-slate-gray py-2 w-full text-center hover:bg-gray-100">Home</a>
        <a href="#about-us" class="text-lg text-slate-gray py-2 w-full text-center hover:bg-gray-100">About Us</a>
        <a href="#products" class="text-lg text-slate-gray py-2 w-full text-center hover:bg-gray-100">Products</a>
        <a href="#contact-us" class="text-lg text-slate-gray py-2 w-full text-center hover:bg-gray-100">Contact Us</a>
        <div class="flex flex-col gap-2 mt-4 w-full px-4">
          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white w-full">
            Sign in
          </button>
          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500 w-full">
            Explore Now
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
