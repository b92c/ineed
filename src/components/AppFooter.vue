<template>
    <footer class=" footer bg-light text-center py-4">
      <a href="/about" class="px-3">Quem Somos</a>
      <a href="/advertising" class="px-3">Publicidade</a>
      <br />
      &copy; {{ new Date().getFullYear() }} Built with pride by
      <a href="https://github.com/b92c" target="_blank" class="text-primary">b92c</a>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
  };
  </script>
  
  <style scoped>
  .footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
  </style>