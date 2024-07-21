<script setup lang="ts">
import NoRoute from "../components/NoRoute.vue"


</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
    </header>

    <main id="content" role="main" class="flex-1 pt-[59px] bg-gray-100 dark:bg-neutral-900">
      <NoRoute />
    
 
    </main>

  </div>
</template>