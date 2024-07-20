<template>
    <header class="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav class="flex justify-between items-center max-container mx-auto">
        <!-- Logo -->
        <a href="/">
          <img
            src="../../assets/images/header-logo.svg"
            alt="logo"
            class="w-[129px] h-[29px]"
          />
        </a>
  
        <!-- Navigation Links -->
        <ul class="hidden lg:flex flex-1 justify-center items-center gap-16">
          <li><a href="#home" class="font-montserrat text-lg text-slate-gray">Home</a></li>
          <li><a href="#about-us" class="font-montserrat text-lg text-slate-gray">About Us</a></li>
          <li><a href="#products" class="font-montserrat text-lg text-slate-gray">Products</a></li>
          <li><a href="#contact-us" class="font-montserrat text-lg text-slate-gray">Contact Us</a></li>
        </ul>
  
        <!-- Sign in and Explore Links -->
        <div class="hidden lg:flex gap-4 text-lg font-medium font-montserrat">
          <a href="/" class="text-slate-gray hover:text-blue-600">Sign in</a>
          <span>/</span>
          <a href="/" class="text-slate-gray hover:text-blue-600">Explore now</a>
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
      <transition name="fade">
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-white shadow-lg z-20 lg:hidden"
        >
          <nav class="flex flex-col items-center py-8">
            <a href="#home" class="text-lg text-slate-gray py-2">Home</a>
            <a href="#about-us" class="text-lg text-slate-gray py-2">About Us</a>
            <a href="#products" class="text-lg text-slate-gray py-2">Products</a>
            <a href="#contact-us" class="text-lg text-slate-gray py-2">Contact Us</a>
            <div class="flex flex-col gap-2 mt-4">
              <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                Sign in
              </button>
              <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500">
                Explore Now
              </button>
            </div>
          </nav>
        </div>
      </transition>
    </header>
  </template>
  