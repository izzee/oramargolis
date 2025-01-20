<template>
  <main>
    <slot />
  </main>
</template>

<script lang="ts" setup>

</script>

<style lang="css" scoped>
  main {
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
    align-self: stretch;
    border: 2px solid #fff;
    border-radius: 32px;
    box-shadow: 0 0 24px #00000088, 0 0 24px #00000033 inset;
    background-color: #fff;
    color: #333;
    overflow: scroll;

    @media (min-width: 768px) {
      padding: 48px 40px;
      gap: 40px;
      border: 4px solid #fff;
    }
  }
</style>