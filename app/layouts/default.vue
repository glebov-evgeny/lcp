<template>
  <div class="flex flex-col relative min-h-[100vh] s-layout">
    <div class="headerex">
      <div class="headerex__content">
        <div class="headerex__item">ru</div>
        <div class="headerex__item">ru</div>
      </div>
    </div>
    <main class="flex-1 main">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAppStore } from '~/stores/app';

const appStore = useAppStore();

onMounted(() => {
  appStore.initTheme();
});
</script>