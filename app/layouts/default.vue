<template>
  <div class="flex flex-col relative min-h-[100vh] s-layout">
    <SHeader />
    <main class="flex-1 main">
      <slot />
      <p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/><p>cs</p><br/>
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