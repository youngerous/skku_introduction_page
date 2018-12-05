<template>
  <v-container>

    <v-layout wrap>
      <v-flex>

        <qna-faq/>
        <v-btn :to="{name: 'QnANew'}" class="primary">질문하기</v-btn>
        <!-- TODO: Container 고치기 -->
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
