<script setup lang="ts">
import AppFooter from "@/components/layout/Footer.vue";
import AppHeader from "@/components/layout/TheHeader.vue";


</script>
<template>
    
    <AppHeader />
    <main id="content" role="main">
        <slot></slot>
    </main>
    <AppFooter />
</template>