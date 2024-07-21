<template>
  <!-- ========== FOOTER ========== -->
  <section class="bg-black px-4 py-16 dark:bg-gray-900">
    <footer class="max-w-screen-xl mx-auto flex flex-col gap-10 lg:gap-20">
      <div class="flex flex-wrap lg:flex-nowrap justify-between items-start gap-10 lg:gap-20">
        <!-- Logo and Description -->
        <div class="flex flex-col items-start max-w-xs lg:max-w-sm">
          <RouterLink to="/">
            <img src="/src/assets/images/footer-logo.svg" alt="logo" width="150" height="46" class="mb-6 transition-transform duration-500 hover:scale-105">
          </RouterLink>
          <p class="text-base leading-7 font-montserrat text-white-400 dark:text-gray-300 transition-colors duration-300">
            Get shoes ready for the new term at your nearest Adidas store. Find your perfect size in-store. Get rewards.
          </p>
          <div class="flex gap-4 mt-8">
            <RouterLink to="/" class="flex justify-center items-center w-12 h-12 bg-white rounded-full dark:bg-gray-800 transition-transform duration-300 hover:scale-110" aria-label="Facebook">
              <img src="/src/assets/icons/facebook.svg" alt="Facebook logo" width="24" height="24" class="transition-transform duration-300 hover:scale-110">
            </RouterLink>
            <RouterLink to="/" class="flex justify-center items-center w-12 h-12 bg-white rounded-full dark:bg-gray-800 transition-transform duration-300 hover:scale-110" aria-label="Twitter">
              <img src="/src/assets/icons/twitter.svg" alt="Twitter logo" width="24" height="24" class="transition-transform duration-300 hover:scale-110">
            </RouterLink>
            <RouterLink to="/" class="flex justify-center items-center w-12 h-12 bg-white rounded-full dark:bg-gray-800 transition-transform duration-300 hover:scale-110" aria-label="Instagram">
              <img src="/src/assets/icons/instagram.svg" alt="Instagram logo" width="24" height="24" class="transition-transform duration-300 hover:scale-110">
            </RouterLink>
          </div>
        </div>

        <!-- Footer Links -->
        <div class="flex flex-wrap gap-10 lg:gap-20">
          <!-- Products -->
          <div class="flex-1">
            <h4 class="text-2xl font-montserrat font-medium mb-6 text-white dark:text-gray-100">
              Adidas Soccer Cleats
            </h4>
            <ul>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">Adidas Predator Edge</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">Adidas Copa Mundial</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">Adidas X Speedportal</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">Adidas Nemeziz</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">Adidas Predator LZ</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">Adidas Performance adiZero</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Help -->
          <div class="flex-1">
            <h4 class="text-2xl font-montserrat font-medium mb-6 text-white dark:text-gray-100">
              Help
            </h4>
            <ul>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">About us</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">FAQs</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">How it works</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">Privacy policy</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="/">Payment policy</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Get in Touch -->
          <div class="flex-1">
            <h4 class="text-2xl font-montserrat font-medium mb-6 text-white dark:text-gray-100">
              Get in touch
            </h4>
            <ul>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="mailto:customer@adidas.com">customer@adidas.com</RouterLink>
              </li>
              <li class="mt-3 text-base leading-normal text-white-400 dark:text-gray-300 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">
                <RouterLink to="tel:+92554862354">+1 1234567</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="flex flex-col sm:flex-row justify-between items-center text-white-400 dark:text-gray-500 mt-12">
        <div class="flex items-center gap-2 font-montserrat">
          <img src="/src/assets/icons/copyright-sign.svg" alt="copyright sign" width="20" height="20" class="rounded-full transition-transform duration-500 hover:scale-110">
          <p>Copyright. All rights reserved.</p>
        </div>
        <p class="font-montserrat cursor-pointer mt-4 sm:mt-0 hover:text-slate-gray dark:hover:text-slate-300 transition-colors duration-300">Terms &amp; Conditions</p>
      </div>
    </footer>
  </section>
</template>
