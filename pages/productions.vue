<template>
  <ContentDoc v-slot="{ doc }">
    <Main v-if="activeIndex === null">
      <h2>Productions</h2>
      <div class="productions">
        <div class="production" v-for="(production, index) in doc.productions">
          <NuxtImg src="./images/folder.png"/>
          <p @click="() => setActiveIndex(index)">{{production.title}}</p>
        </div>
      </div>


    </Main>

    <Main v-if="activeIndex !== null" class="productions-media-window">
      <div class="production-media" v-for="(production, index) in doc.productions">
        <div class="production-media-content" v-if="activeIndex === index">
          <div class="topbar">
            <button class="close-btn" @click="() => setActiveIndex(null)">
              <NuxtImg src="/images/close.svg"/>
            </button>
            <p class="title">{{ production.title }}</p>
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

    img {
      max-width: 100px;
    }

    p {
      padding: 4px 8px;
      border-radius: 4px;
      line-height: 1;
      cursor: pointer;
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

</style>