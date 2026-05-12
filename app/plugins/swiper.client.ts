import { register } from 'swiper/element/bundle';

export default defineNuxtPlugin(() => {
  register();
  console.log('Swiper registered!'); // Для проверки в консоли браузера
});