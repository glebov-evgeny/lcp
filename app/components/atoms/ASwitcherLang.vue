<template>
  <button
    class="flex items-center justify-center w-8 h-8 cursor-pointer font-semibold"
    @click="toggleLang"
  >
    <span class="text-xs">{{ switchLabel.toUpperCase() }}</span>
  </button>
</template>

<script setup>
const { locale, setLocale } = useI18n()

const switchLabel = computed(() => (
  locale.value === 'ru'
    ? 'en'
    : 'ru'
))

const toggleLang = async () => {
  await setLocale(switchLabel.value)
}
</script>