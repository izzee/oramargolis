<template>
  <footer class="pill">
    <p>© {{currentYear}}</p>
    <p>
      <a href="mailto:avamelia@gmail.com">avamelia@gmail.com</a>
    </p>
  </footer>
</template>

<script setup>
  import { computed } from 'vue'
  const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="css" scoped>
footer {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;

  p,
  a {
    color: #ffffff;
  }
}
</style>