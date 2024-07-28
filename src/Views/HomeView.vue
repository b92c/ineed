<template>
  <div class="home-view">
    <AppHeader v-if="!showHeader" />
    <main class="container d-flex flex-column align-items-center mt-5">
      <div class="text-center mb-5">
        <figure>
          <img src="../assets/ineed-logo.png" alt="Ineed logo" class="logo" />
        </figure>
      </div>
      <form @submit.prevent="search" class="d-flex flex-column align-items-center">
        <div class="input-group mb-3">
          <input type="text" v-model="profession" class="form-control" placeholder="Serviço ou profissional" />
        </div>
        <div class="input-group mb-3">
          <input type="text" v-model="city" class="form-control" placeholder="Sua cidade" />
        </div>
        <button type="submit" class="btn btn-primary">Pesquisar</button>
      </form>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      profession: '',
      city: '',
      showHeader: true,
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: 'SearchView',
        query: {
          profession: this.profession,
          city: this.city,
        },
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
