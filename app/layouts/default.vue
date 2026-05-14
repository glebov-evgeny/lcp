<template>
  <div 
    class="flex flex-col relative min-h-[100vh]" 
    :class="['s-layout', { 'themes-dark': isDarkTheme }]">
    <!-- <header /> -->
    <main class="flex-1 main">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useAppStore } from '~/stores/app';
const authStore = useAppStore();
const isDarkTheme = computed(() => authStore.siteTheme === 'night');
if (process.client) {
  watchEffect(() => {
    document.documentElement.classList.toggle(
      'themes-dark',
      authStore.siteTheme === 'night'
    );
  });
}
</script>

<style scoped></style>
