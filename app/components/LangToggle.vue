<template>
  <div class="flex gap-2 items-center">
    <button
      :class="locale === 'en' ? activeClass : baseClass"
      @click="changeLanguage('en')"
    >
      EN
    </button>

    <button
      :class="locale === 'ru' ? activeClass : baseClass"
      @click="changeLanguage('ru')"
    >
      RU
    </button>
  </div>
</template>
<script setup>
const { locale, setLocale } = useI18n()

const baseClass = 'px-3 py-1 border rounded text-sm'
const activeClass = 'px-3 py-1 border rounded text-sm bg-black text-white'

const changeLanguage = async (code) => {
  await setLocale(code)
}
</script>