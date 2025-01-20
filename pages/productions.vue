<template>
  <ContentDoc v-slot="{ doc }">
    <Main v-if="activeIndex === null">
      <h2>Productions</h2>
      <div class="productions">
        <div class="production" v-for="(production, index) in doc.productions" @click="() => setActiveIndex(index)">
          <NuxtImg src="/images/folder.png"/>
          <p>{{production.title}}</p>
        </div>
      </div>


    </Main>
    <Main v-if="activeIndex !== null" class="productions-media-window">
      <div v-for="(production, index) in doc.productions">
        <div v-if="activeIndex === index">
          <div class="topbar">
            <button class="close-btn" @click="() => setActiveIndex(null)">
              <NuxtImg src="/images/close.svg"/>
            </button>
            <p class="title">{{ production.title }}</p>

          </div>
          <div class="window-body">
            <p v-if="production.description" v-html="production.description"/>
            <NuxtLink v-if="production.link" :to="production.link.src" >{{production.link.title}}</NuxtLink>

            <div class="media-grid" v-if="production.media">
              <div class="media-item" v-for="media in production.media" >
                <NuxtImg :src="media.src" v-if="media.type==='image'"/>
              </div>
            </div>

            <ul class="links" v-if="production.links">
              <li v-for="link in production.links">
                <NuxtLink :to="link.src">{{ link.title }}</NuxtLink>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </Main>
  </ContentDoc>
</template>

<script setup>
  const activeIndex = ref(null);

  const setActiveIndex = (index) => {
    activeIndex.value = index;
  }
</script>

<style lang="css" scoped>
  h2 {
    text-align: center;
  }
  main {
    position: relative;

  }
  .productions {
    display: grid;
    gap: inherit;
    align-self: center;
    height: 100%;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .production {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    gap: 8px;
    cursor: pointer;
    img {
      max-width: 100px;
    }

    p {
      padding: 4px 8px;
      border-radius: 4px;
      line-height: 1;
    }

    &:hover {
      p {
        color: #fff;
        background-color: #0044ff;
      }
    }
  }

  .productions-media-window {
    display: block;
    padding: 0;
    border: 0;
  }

  .topbar {
    background: linear-gradient(#ffffff, #acacac);
    padding: 16px 0;
    width: 100%;
    position: relative;
    position: sticky;
    top: 0;
  }

  .title {
    text-align: center;
  }

  .close-btn {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 16px;
    left: 24px;
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff3f3f;
    box-shadow: 0px 0px 8px #00000099 inset;

    img {
      width: 50%;
      height: 50%;
    }
    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
      top: 16px;
    }
  }

  .window-body {
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (min-width: 768px) {
      padding: 48px 40px;
    }

    a {
      text-align: center;
    }
  }
  .media-grid {
    display: grid;
    flex-direction: column;
    gap: 8px;
    img {
      width: 100%;
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

  }

</style>