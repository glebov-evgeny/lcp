// stores/content.js
import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
  state: () => ({
    headerMenu: [
      {
        id: 1,
        label: 'menu.home',
        to: '/',
      },
      {
        id: 2,
        label: 'menu.about',
        to: '/about',
      },
      {
        id: 3,
        label: 'menu.projects',
        to: '/projects',
      },
      {
        id: 4,
        label: 'menu.contacts',
        to: '/contacts',
      },
    ],
  }),

  getters: {
    getHeaderMenu: (state) => state.headerMenu,
  },
});