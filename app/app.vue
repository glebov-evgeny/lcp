<template>
  <div>
    <div class="bg-pink-300 mb-2">dddd</div>
    {{ t('status.Revision') }}
    <LangToggle />
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>
<script setup>
const { t } = useI18n();
</script>