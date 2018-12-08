<template>
  <v-footer
    class="mp-footer"
    height="auto"
    color="#0c8040"
    fixed
  >
    <v-layout justify-center row wrap>
      <v-btn
        v-for="(link,index) in links"
        :key="index"
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

    <v-tooltip top>
      <v-btn slot="activator" color="white" flat light round>
        LikeLion 6th
      </v-btn>
      <span>강동헌 김동민 김병헌 김보민 김탁영 김태우 문미현 박성우 배경훈 손은호 송영민 이선경 이소윤 이찬종 최준혁</span>
    </v-tooltip>
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
