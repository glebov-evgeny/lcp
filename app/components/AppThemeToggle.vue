<template>
  <button
    class="px-4 py-2 rounded border"
    @click="toggleTheme"
  >
    Тема: {{ appStore.siteTheme }}
  </button>
</template>

<script setup>
import { useAppStore } from '~/stores/app';

const appStore = useAppStore();

function toggleTheme() {
  const nextTheme =
    appStore.siteTheme === 'day'
      ? 'night'
      : 'day';

  appStore.setTheme(nextTheme);
}
</script>