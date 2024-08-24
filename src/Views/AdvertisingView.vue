<template>
    <div>
      <AppHeader />
      <main class="container d-flex flex-column align-items-center">
        <h1 class="text-3xl font-bold mb-5 pt-4">Anuncie conosco</h1>
        
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'AboutView',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      showHeader: true,
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: 'AdvertisingView',
      });
    },
  },
};
</script>

<style scoped>
main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home-view {
  display: flex;
  flex-direction: column;
  min-height: 50vh;
}

.logo {
  max-height: 10rem;
  max-width: 10rem;
}
</style>
