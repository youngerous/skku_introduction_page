<template>
<div class="text-xs-center">
  <h2 class="my-3 qa-faq-title" style=" font-family: 'Do Hyeon', sans-serif;">자주 묻는 질문</h2>
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
           title: '멋쟁이사자처럼은 어떤 동아리인가요?',
           content: '멋쟁이사자처럼은 2013년 프로그래머 이두희가 설립한 프로그래밍 교육 단체입니다. 비전공자도 프로그래밍 기초 지식을 배워 자신만의 웹 서비스를 실현하는 것이 목표입니다. 성균관대 멋쟁이사자처럼은 2015년 처음으로 시작되어 다양한 코딩 교육과 서비스 런칭을 목표로 활동하고 있습니다.'
         },
         {
           title: '코딩에 대한 지식 1도 없습니다.. 그래도 활동할 수 있나요?',
           content: '잘하는 사람만 들어오는 것이 아닙니다. 하지만 비전공자나 미경험자가 서비스 런칭까지 이루어내려면 많은 노력과 열정이 필요합니다.'
         },
         {
           title: '구체적으로 어떤 코딩을 배울 수 있나요?',
           content: 'HTML과 CSS를 비롯하여 JavaScript, Python, Ruby 등의 언어를 바탕으로 웹 프로그래밍을 공부합니다. 우리가 흔히 볼 수 있는 웹 페이지를 만드는 데 필요한 코딩을 배우게 됩니다.'
         },
         {
           title: '가르치는 학생분들은 어떤 학생인가요?',
           content: '멋쟁이사자처럼에서 1년 간 활동을 진행한 운영진들이 교육을 진행하게 됩니다. 멋쟁이사자처럼에서 뿐만 아니라, 다른 곳에서의 프로그래밍 경험 또한 풍부하신 분들이 열심히 도와줄 예정입니다!'
         },
         {
           title: '일주일에 몇번 언제 어디서 어떻게 진행하나요?',
           content: '정기세션은 일 주일에 한 번, 학교 강의실을 빌려 진행합니다. 정기세션과 별개로 팀별 스터디가 최소 주 1회 있을 수 있으며 자세한 일정은 7기 모집 기간 이전에 확정됩니다.'
         },
         {
           title: '한 학기만 하고 동아리 활동을 그만두어도 괜찮나요?',
           content: '멋쟁이사자처럼의 의무 활동 기간은 1년입니다. 1년 간 활동하시지 못 할 경우 최종수료를 하실 수 없다는 점을 고려하여 주시기 바랍니다.'
         },
         {
           title: '세션시간과 강의시간 하고 겹칩니다.. 그래도 활동할 수 있나요?',
           content: '죄송합니다. 세션에 참여하시지 못하시면 활동이 어려우며, 멋쟁이사자처럼 수료 기준 또한 충족시킬 수 없어 활동이 어렵습니다.'
         },
         {
           title: '고학년도 받아주나요?',
           content: '1년 동안 열정적으로 활동하실 수만 있다면 누구든지 환영입니다!'
         },
         {
           title: '율전러도 여기서 활동하나요?',
           content: '율전캠퍼스와 명륜캠퍼스 모집은 따로 이루어집니다. 율전캠 학생도 명륜캠으로 신청이 가능하지만 모든 활동은 명륜캠에서 진행하셔야 합니다.'
         },
       ]
     }
   }
}
      
</script>

<style>
@import url(//fonts.googleapis.com/css?family=Do+Hyeon&amp;subset=korean);

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

.qa-faq-title {

  display: inline-block;
  border-bottom: 2px solid #0c8040;
}

</style>
 