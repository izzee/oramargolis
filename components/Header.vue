<template>
  <header>
    <h1 class="pill">ORA MARGOLIS</h1>
    <nav>
      <NuxtLink class="pill" to="/productions" disabled="true">PRODUCTIONS</NuxtLink>
      <NuxtLink class="pill" to="/about">ABOUT</NuxtLink>
      <NuxtLink class="pill" to="/articles" >ARTICLES/SNS</NuxtLink>
    </nav>
  </header>

</template>

<script lang="ts" setup>

</script>

<style lang="css" scoped>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  h1 {

  }
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    a {
      padding: 16px 32px;
      background: linear-gradient(#ffffff, #acacac);
    }
  }
</style>