<template>
  <ContentDoc v-slot="{ doc }">
      <Main>
        <section v-for="section in doc.sections">
          <h2>{{ section.title }}</h2>
          <ul>
            <li v-for="link in section.links">
              <NuxtLink :to="link.link">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </section>
      </Main>
  </ContentDoc>
</template>

<script lang="ts" setup>

</script>

<style lang="css" scoped>
  section {
    color: #333;
    list-style: inside;
    a { color: #333;}
  }
</style>