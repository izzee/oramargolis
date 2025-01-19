<template>
  <main class="pill">
    <slot />
  </main>
</template>

<script lang="ts" setup>

</script>

<style lang="css" scoped>
  main {
    color: #333;
    text-shadow: none;
    overflow: scroll;
    flex: 1;
    align-self: stretch;
    border: 2px solid #fff;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px 24px;
    border-radius: 32px;

    @media (min-width: 768px) {
      padding: 64px 40px;
      gap: 40px;
      border: 4px solid #fff;

    }


  }


</style>