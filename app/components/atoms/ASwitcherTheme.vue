<template>
  <button
    class="flex items-center justify-center w-8 h-8 cursor-pointer"
    @click="toggleTheme"
  >
    <Icon name="tabler:sun" v-if="appStore.siteTheme === 'day'"  />
    <Icon name="tabler:moon" v-else  />
  </button>
</template>

<script setup>
import { useAppStore } from '~/stores/app';

const appStore = useAppStore();

function toggleTheme() {
  appStore.setTheme(
    appStore.siteTheme === 'day'
      ? 'night'
      : 'day'
  );
}
</script>