import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => {
    const langCookie = useCookie('siteLang');
    const themeCookie = useCookie('siteTheme');
    const tabCookie = useCookie('siteTab');

    return {
      siteLang: langCookie.value || 'ru',
      siteTheme: themeCookie.value || 'day',
      siteTab: tabCookie.value || 'main',
    };
  },

  actions: {
    setLang(lang) {
      const localeCookie = useCookie('siteLang');
      localeCookie.value = lang;
      this.siteLang = lang;
    },

    setTab(tab) {
      const tabCookie = useCookie('siteTab');
      tabCookie.value = tab;
      this.siteTab = tab;
    },

    setTheme(theme) {
      const themeCookie = useCookie('siteTheme');
      themeCookie.value = theme;
      this.siteTheme = theme;
    },
  },
});