<template>
  <v-footer
    class="mp-footer"
    height="auto"
    color="#0c8040"
  >
    <v-layout justify-center row wrap>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
        :to="link.link"
      >
        {{ link.text }}
      </v-btn>

      <v-btn color="white" flat round target="_blank"
      href="https://www.facebook.com/likelionskku">
          Facebook
      </v-btn>

    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {text : 'Home', link: '/'},
        {text : 'Notice', link: '/notice'},
        {text : 'Projects', link: '/projects'},
        {text : 'Gallery', link: '/gallery'},
        {text : 'Q&A', link: '/qna'}
      ]
    })
  }
</script>

<style scoped>
    .mp-footer{
        opacity: 0.8;
    }
</style>
