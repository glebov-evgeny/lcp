<template>
  <div data-layout="authorization" class="w-full h-screen flex items-center justify-center">
    <main class="flex w-full h-full">
      <div class="authtorization__aside hidden md:flex md:w-1/2 lg:flex-1 p-16">
        <div class="w-full h-full rounded-[1rem] overflow-hidden relative">
          <NuxtImg
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/auth/bg.webp"
            alt="authorization-image"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-purple-300 to-purple-500 opacity-70 pointer-events-none"></div>
        </div>
      </div>

      <div class="authtorization__main relative w-full md:w-1/2 lg:w-[390px] flex flex-col h-screen justify-between p-16">
        <!-- <NuxtImg
          class="absolute inset-0 w-full h-full object-cover object-center z-0 md:hidden"
          src="/images/auth/mob.webp"
          alt="authorization-image"
          loading="lazy"
        /> -->

        <div class="relative z-10 authtorization__main-header flex justify-end gap-4">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>

        <div class="relative z-10">
          <slot />
        </div>

        <div class="relative z-10 authtorization__main-footer flex justify-center">
          <IconLogoArtRussiaFull class="w-80 text-[var(--logo-color)]"/>
        </div>

      </div>
    </main>
  </div>
</template>
<script setup>
const { t, locale } = useI18n()
import IconLogoArtRussiaFull from '~/components/atoms/icons/IconLogoArtRussiaFull.vue';
import LocaleSwitcher from '~/components/atoms/LocaleSwitcher.vue'
import ThemeSwitcher from '~/components/atoms/ThemeSwitcher.vue'
useHead({
  title: 'Авторизация | Арт Россия',
  meta: [
    {
      name: 'description',
      content: 'Войдите в личный кабинет на Art Russia Fair для доступа к персональным данным и формам.',
    },
  ],
})
</script>