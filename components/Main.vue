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
    border: 4px solid #fff;
    background-color: #fff;
    box-shadow: 0 0 24px #00000033, 0 0 24px #00000033 inset, -8px 0 24px #00000033 inset;

    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 64px 40px;
    font-size: 26px;
    
  }
</style>