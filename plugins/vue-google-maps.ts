import VueGoogleMaps from '@fawmi/vue-google-maps';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      //   key: 'AIzaSyB33KxZK5XS66anT1AmdH2EDTz1YDnJDKE',
      key: config.GOOGLE_MAPS_API_KEY,
    },
  });
});
