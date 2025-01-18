<template>
  <footer class="pill">
    <p>© {{currentYear}}</p>
    <a href="mailto:contact@oramargolis.xyz">contact@oramargolis.xyz</a>
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

  a {
    color: white;
  }
}
</style>