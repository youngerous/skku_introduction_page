<template>
<div class="text-xs-center">
  <h2 class="my-3 faq-title">자주 묻는 질문</h2>
  <v-expansion-panel popout expand>
      <v-expansion-panel-content v-for="(item, index) in items" :key="index">
        <div slot="header" class="subheading">{{item.title}}</div>
        <v-card>
          <v-card-text>{{item.content}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
</div>    
</template>

<script>
  export default {
   data () {
     return {
       items: [
         {
           title: '멋사는 어떤 동아리 인가요?',
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
         },
         {
           title: '코딩에 대한 지식 1도 없습니다.. 그래도 활동할 수 있나요?',
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
         },
         {
           title: '구체적으로 어떤 코딩을 배울 수 있나요?',
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
         },
         {
           title: '가르치는 학생분들은 어떤 학생인가요?',
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
         },
         {
           title: '일주일에 몇번 언제 어디서 어떻게 진행하나요?',
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
         },
         {
           title: '한 학기만 하고 동아리 활동을 그만두어도 괜찮나요?',
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
         },
         {
           title: '세션시간과 강의시간 하고 겹칩니다.. 그래도 활동할 수 있나요?',
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
         },
         {
           title: '고학년도 받아주나요?',
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
         },
         {
           title: '율전러도 여기서 활동하나요?',
           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
         },
       ]
     }
   }
}
      
</script>

<style>
 /* .maintitle{
  text-align: left;
  margin-left: 20px;
} */
.fqBorder{
  border: 1px solid rgb(200, 209, 200);
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
/* .tableCRUD{
  border: 1px solid rgb(200, 209, 200);
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
} */

.faq-title {

  display: inline-block;
  border-bottom: 2px solid #1976d2;
}

</style>
 