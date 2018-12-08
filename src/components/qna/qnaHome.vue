<template>
  <v-container>

    <v-layout wrap>
      <v-flex>

        <qna-faq/>
        <qna-container/>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import qnaFaq from './qnaFaq';
import qnaContainer from './qnaContainer';

export default {
  components:{
    qnaFaq,
    qnaContainer
  }
}
</script>

<style scoped>
  .fq-btn-link{
    color: gold;
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
