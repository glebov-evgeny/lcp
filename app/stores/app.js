// stores/app.js
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    siteLang: 'ru',
    siteTheme: 'day',
    siteTab: 'main',
  }),

  actions: {
    initTheme() {
      const themeCookie = useCookie('siteTheme');

      if (themeCookie.value) {
        this.siteTheme = themeCookie.value;
      }

      this.applyTheme();
    },

    applyTheme() {
      if (!process.client) return;

      document.documentElement.classList.toggle(
        'themes-dark',
        this.siteTheme === 'night'
      );
    },

    setTheme(theme) {
      const themeCookie = useCookie('siteTheme');

      themeCookie.value = theme;
      this.siteTheme = theme;

      this.applyTheme();
    },
  },
});