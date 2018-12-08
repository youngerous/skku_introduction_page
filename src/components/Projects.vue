<template>
  <v-container>
    <v-layout>
      <v-flex class="prj-hook" xs12 text-xs-center ma-5 pa-2 display-3 font-weight-light >
        <mark class="prj-highlight">성대 사자  </mark>들이 만든 <br>
        여러가지 서비스들을 소개합니다
      </v-flex>
    </v-layout>
    <v-layout v-for="(project,index) in projects" pa-1 style="background-color: white;" :key="index">
      <div data-scroll>
        <v-layout xs12 text-xs-center ma-5 pa-0 class="prj-projects" >
          <v-flex class="prj-infos" xs12 md7 ma-2 pa-2 text-xs-left>
            <p class="prj-name">{{project.name}}</p>
            <p class="prj-text">{{project.text}}</p>
            <p class="prj-creator">만든이: {{project.creator}}</p>
            <a class="prj-url" v-if="project.url" v-bind:href="project.url">
              {{project.url}}
            </a>
            <div v-else> 서비스 종료 </div>
          </v-flex>
          <v-flex class="prj-imgcontainer" xs12 md5 ma-0>
            <img class="prj-image" :src="require(`@/assets/prj-images/${project.src}`)" alt="이미지가 없다" draggable="false">
            <div>
          
            </div>
          </v-flex>
        </v-layout>
      </div>
      
    </v-layout>
  </v-container>  
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  mounted() {
    this.so = ScrollOut({
      threshold : 0.6,
      scope: this.$el
    });
  },
  destroyed() {
    this.so.teardown();
  },
  // mounted(){
  //   ScrollOut({
  //     
  //   });
  // },

  data(){
    return{
      projects:[
        {
          name: '스꾸터',
          text: '이제 우리학교에도 공식 커뮤니티 있다! 성대생의 성대생을 위한 생대생에 의한 커뮤니티!',
          creator: '유장홍, 전태훈',
          url:"https://skkuter.com",
         src: 'skkuter.png'
        },
        {
          name: '스클럽(SKKLUB)',
          text: '성균관대학교에 있는 동아리, 학회, 소모임의 집합체! 입학해서 뭘 할지 모르는 신입생들, 복학해서 새로운 친구 사귀고 싶은 복학생들 모두 여기 참고하세요!',
          creator: '이동엽, 정유진, 황희조',
          url:"https://sskklub.herokuapp.com/",
          src: 'skklub.png'
        },
        {
          name: '성균공약모음',
          text: '성균관대학교의 2014년부터 2017년까지의 총학생회, 단과대 학생회가 어떤 공약을 내걸었는지, 얼마나 시행했는지를 확인할 수 있습니다.(성대신문 기사 내용을 바탕으로 선정)', 
          creator: '이동건, 심시은, 김준엽, 이진호',
          url:"http://skkupledgechaser.com/",
          src: 'skkupledge.png'
        },
        {
          name: '쁠모아',
          text: '이왕 먹을거 더 많이 먹자! 마트, 편의점 1+1, 2+1 행사를 한 눈에 볼 수 있도록 해주는 웹서비스(데이터 수집 자동화 종료)',
          creator: '권우정, 송예균, 이진호, 이동건',
          url:"https://plusmoa.herokuapp.com/",
          src: 'plusmoa.png'
        },
        {
          name: '성균관대학교 스쿨버스 앱',
          text: '성균관대학교 스쿨버스를 마냥 추위와 더위속에서 기다리지 않아도 된다! 정류장마다 버스가 언제 오는지, 지금 몇대의 버스가 어디에 있는지 알 수 있는 서비스!',
          creator: '이종원, 고윤서, 김정환, 김주상, 전태훈',
          url:'https://skkoolbus.com',
          src: 'skkool.png'
        },
        {
          name: 'YOU 학생',
          text: '성균관대 내 외국인들을 위한 커뮤니티.(운영시간, 학교 공지사항, 같은나라 학생들의 모임 등을 제공) P.S-코드파일만 있음.',
          creator: '김준엽, 허용회, 김경헌, 최재필',
          url:"https://github.com/Yupjun/youhaksaeng",
          src: 'skkudent.png'
        },
        {
          name: '마케팅 실험 신청 서비스',
          text: '교수님과 학생들이 수업에서 혹은 연구수단으로 활용할 수 있는 마케팅 실험 플랫폼입니다.',
          creator: '이동엽, 전태훈',
          url:"https://pool.skku.edu",
          src: 'skkumarketing.png'
        },
        {
          name: '오늘의 레시피',
          text: '집에 있는 재료로 해먹을 수 있는 요리 추천하는 요리 컨설팅 웹서비스!',
          creator: '김희재, 박소현, 정광현',
          url: false,
          src: 'todayrecipe.png'
        },
        {
          name: '그 외의 수많은 프로젝트들..',
          text: '우리 성대 사자들은 이곳에 다 소개하기엔 너무 많을 정도로 항상 새로운 아이디어와 개발열의로 가득합니다. 이제 당신의 아이디어를 우리와 실현시켜봐요!',
          creator: '우리 그리고 여러분',
          url: 'https://www.facebook.com/likelionskku/?fref=ts',
          src: 'else2.png'
        },
      ]
    }
  }
}
</script>

<style>
  p,pre { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; }
  [data-scroll] {
    transition: all 0.5s;
  }
  [data-scroll="in"] {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0)
  }
  [data-scroll="out"] {
    opacity: 0;
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px)
  }
  .prj-name{
    font-size: 34px;
    font-weight: bold;
  }
  .prj-text{
    font-size: 18px;
    font-weight: thin;
  }
  .prj-creator{
    font-size: 15px;
    font-weight: thin;
  }
  .prj-url{
    margin-bottom: 0px;
  }
  .prj-hook{
    background: white;
    box-shadow: 6px 10px #0c8040;
    border: 0.5px solid #0c8040;
  }
  .prj-projects{
    background-color: white;
    border: 3px solid #0c8040;
    min-height: 60vh;
    /* position: relative; */
  }
  .prj-image{
    max-width: 100%;
    max-height: 100%;
    
  }
  .prj-imgcontainer{
    background-color: black;
    display:flex;
    justify-content:center;
    align-items:center;
  }  
  .prj-url{
    color: #0c8040;
    text-decoration: none;
  }
  .prj-url:hover{
    color: #0c8040;
    text-decoration: none;
  }
  mark.prj-highlight{
      color: #0c8040;
      background-color: white;
      font-weight: bold;
      font-style: italic;
  }

@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
</style>
   