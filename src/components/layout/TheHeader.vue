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
  <header :class="{'bg-white dark:bg-gray-800': true}" class="absolute z-10 w-full py-8 transition-colors duration-300">
    <nav class="flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-0">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg"
          alt="logo"
          class="w-[129px] h-[29px] transition-transform duration-300"
        />
        <h2 class="ml-2 font-bold text-blue-500 text-2xl">ADIDAS</h2>
      </RouterLink>

      <!-- Navigation Links -->
      <ul class="hidden lg:flex flex-1 justify-center items-center gap-8">
        <li><RouterLink to="#home" class="text-lg text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Home</RouterLink></li>
        <li><RouterLink to="#about-us" class="text-lg text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About Us</RouterLink></li>
        <li><RouterLink to="#products" class="text-lg text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Products</RouterLink></li>
        <li><RouterLink to="#contact-us" class="text-lg text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact Us</RouterLink></li>
      </ul>

      <!-- Sign in and Explore Links -->
      <div class="hidden lg:flex gap-4 text-lg font-medium">
        <RouterLink to="/" class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Sign in</RouterLink>
        <span>/</span>
        <RouterLink to="/" class="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Explore now</RouterLink>
      </div>

      <!-- Dark mode and Mobile Menu Button -->
      <div class="flex items-center gap-x-4">
        <!-- Horizontal Line -->
        <hr class="hidden lg:block border-gray-300 dark:border-gray-700 mx-4 transition-colors duration-300" />

        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDarkMode"
          type="button"
          class="hidden hs-dark-mode-active:block text-gray-600 hover:text-red-600 dark:text-neutral-400 dark:hover:text-neutral-500 transition-colors duration-300"
          :class="{ hidden: !isDarkModeActive() }"
        >
          <svg class="w-6 h-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
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
        <button
          @click="toggleDarkMode"
          type="button"
          class="block hs-dark-mode-active:hidden text-gray-600 hover:text-red-600 dark:text-neutral-400 dark:hover:text-neutral-500 transition-colors duration-300"
          :class="{ hidden: isDarkModeActive() }"
        >
          <svg class="w-6 h-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </button>
        <button
          class="lg:hidden flex items-center"
          @click="toggleMobileMenu"
          aria-label="Toggle mobile menu"
        >
          <img
            src="../../assets/icons/hamburger.svg"
            alt="hamburger menu icon"
            class="w-6 h-6 transition-transform duration-300"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-opacity duration-500 ease-out"
      enter-class="opacity-0 -translate-x-10"
      leave-active-class="transition-opacity duration-500 ease-in"
      leave-to-class="opacity-0 translate-x-10"
    >
      <div
        v-show="isMobileMenuOpen"
        class="fixed inset-0 bg-white shadow-lg dark:bg-gray-800 z-20 lg:hidden flex flex-col items-center py-8 space-y-4 transform transition-transform"
        @click.self="toggleMobileMenu"
      >
        <nav class="flex flex-col items-center w-full space-y-4">
          <RouterLink to="#home" class="text-lg text-gray-700 py-2 w-full text-center hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">Home</RouterLink>
          <RouterLink to="#about-us" class="text-lg text-gray-700 py-2 w-full text-center hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">About Us</RouterLink>
          <RouterLink to="#products" class="text-lg text-gray-700 py-2 w-full text-center hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">Products</RouterLink>
          <RouterLink to="#contact-us" class="text-lg text-gray-700 py-2 w-full text-center hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">Contact Us</RouterLink>
          <div class="flex flex-col gap-2 mt-4 w-full px-4">
            <RouterLink to="/signin" class="py-2 px-3 inline-flex items-center text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white w-full transition-transform duration-300">
              Sign in
            </RouterLink>
            <RouterLink to="/products" class="py-2 px-3 inline-flex items-center text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition-transform duration-300 focus:outline-none focus:bg-lime-500 w-full">
              Explore Now
            </RouterLink>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>