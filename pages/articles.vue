<template>
  <ContentDoc v-slot="{ doc }">
      <Main>
        <div class="articles">
          <section v-for="section in doc.sections">
            <h2>{{ section.title }}</h2>
            <ul>
              <li v-for="link in section.links">
                <NuxtLink :to="link.link" target="_blank">{{ link.title }}</NuxtLink>
              </li>
            </ul>
          </section>
        </div>
        <!-- <div class="images">
          <NuxtImg class="image" src="./images/folder.png"/>
        </div> -->
      </Main>
  </ContentDoc>
</template>

<script lang="ts" setup>

</script>

<style lang="css" scoped>
  main {
    
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
  }
  .articles {
    display: flex;
    flex-direction: column;
    gap: inherit;
    flex: 3;
  }

  .images {
    display: none;
    border: 1px solid white;
  }
  .image {
    position: sticky;
    top: 0;
    flex: 1;
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: top;
  }
  section {
  }
</style>