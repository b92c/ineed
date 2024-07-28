<template>
  <div>
    <AppHeader />
    <main class="container d-flex flex-column align-items-center">
      <h1 class="text-3xl font-bold mb-8">Resultado da Busca</h1>

      <div v-if="professionals.length === 0" class="mx-auto flex flex-col items-center">
        <p><strong>Por enquanto não encontramo</strong></p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="professional in professionals"
          :key="professional.id"
          class="bg-white shadow-md rounded-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <h2 class="text-xl font-semibold mb-2">{{ professional.name }}</h2>
          <p><strong>Profissão:</strong> {{ professional.profession }}</p>
          <p><strong>Preço do Serviço:</strong> R$ {{ professional.service_price.toFixed(2).replace('.', ',') }}</p>
          <p><strong>Cobra por:</strong> {{ professional.charges_by }}</p>
          <p><strong>Telefone:</strong> {{ professional.phone }}</p>
          <p><strong>Email:</strong> {{ professional.email }}</p>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <nav class="flex" aria-label="Pagination">
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-l-md focus:z-10 focus:outline-none focus:ring ring-indigo-500 focus:border-indigo-500 disabled:opacity-25 transition ease-in-out duration-150"
            aria-label="Previous"
          >
            Anterior
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="{
              'bg-sky-500 text-white hover:bg-sky-700': page === currentPage,
              'bg-white text-gray-700 hover:bg-gray-200': page !== currentPage
            }"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
          >
            {{ page }}
          </button>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-r-md focus:z-10 focus:outline-none focus:ring ring-indigo-500 focus:border-indigo-500 disabled:opacity-25 transition ease-in-out duration-150"
            aria-label="Next"
          >
            Próximo
          </button>
        </nav>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'SearchView',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      professionals: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  created() {
    this.search();
  },
  watch: {
    '$route.query': 'search'
  },
  methods: {
    search() {
      const params = {
        profession: this.$route.query.profession || '',
        city: this.$route.query.city || '',
        page: this.currentPage,
      };

      axios.get(`${process.env.INEED_ENGINE_URL}/search`, { params })
        .then(response => {
          this.professionals = response.data.professionals;
          this.totalPages = response.data.totalPages;
        })
        .catch(error => {
          console.error(error);
        });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.search();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.search();
      }
    },
    goToPage(page) {
      this.currentPage = page;
      this.search();
    },
  },
};
</script>

<style scoped>
main {
  margin-top: 5rem;
}

.logo {
  max-height: 10rem;
  max-width: 10rem;
}
</style>
