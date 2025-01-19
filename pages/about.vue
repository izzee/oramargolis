<template>
  <ContentDoc v-slot="{ doc }">
    <Main>
      <p v-for="paragraph in doc.bio">
        {{paragraph.paragraph}}
      </p>
    </Main>
  </ContentDoc>
</template>