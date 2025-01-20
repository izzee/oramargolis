<template>
  <header>
      
    <NuxtLink class="pill" to="/">
      <NuxtImg src="/images/star.svg"/>
      ORA MARGOLIS
      <NuxtImg src="/images/star.svg"/>

    </NuxtLink>
    <nav>
      <NuxtLink class="pill" to="/productions" disabled="true">PRODUCTIONS</NuxtLink>
      <NuxtLink class="pill" to="/about">ABOUT</NuxtLink>
      <NuxtLink class="pill" to="/articles">ARTICLES/SNS</NuxtLink>
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
    gap: inherit;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: inherit;
    a {
      padding: 16px 32px;
    }
  }
</style>