<template>
  <button
    class="rounded"
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