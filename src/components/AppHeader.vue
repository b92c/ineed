<template>
  <header class="header bg-light">
    <div class="container d-flex justify-content-between align-items-center py-1">
      <a href="/">
        <figure>
          <img src="../assets/ineed-logo.png" alt="Ineed logo" class="logo" />
        </figure>
      </a>
      <a href="/" class="btn btn-primary">Voltar</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  width: 100%;
}

.logo {
  max-height: 5rem;
  max-width: 5rem;
}
</style>