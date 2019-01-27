<template>
  <v-container>
    <v-layout>
      <v-flex class="prj-hook animated bounceInLeft" xs12 text-xs-center ma-5 pa-2 display-3 font-weight-light >
        <mark class="prj-highlight">성대 사자</mark>들이 만든 <br>
        여러가지 서비스들을 소개합니다
      </v-flex>
    </v-layout>
    <v-layout v-for="(project,index) in projects" ma-5 pa-1 :key="index">
      <div data-scroll>
        <v-layout wrap text-xs-center class="prj-projects" >

          <v-flex class="prj-infos" xs12 md7 pa-4 text-xs-left>
            <p class="prj-name">{{project.name}}</p>
            <p class="prj-text" v-html="project.text"></p>
            <p class="prj-creator">만든이: {{project.creator}}</p>
            <a class="prj-url" v-if="project.url" v-bind:href="project.url">
              {{project.url}}
            </a> 
            <div class="else-font" v-else> 서비스 종료 </div>
          </v-flex>

          <v-flex class="prj-imgcontainer" xs12 md5 ma-0>
            <img class="prj-image" :src="require(`@/assets/prj-images/${project.src}`)" alt="이미지가 없다" draggable="false">
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
          text: '이제 우리학교에도 공식 커뮤니티 있다! <br>성대생의 성대생을 위한 성대생에 의한 커뮤니티!',
          creator: '유장홍, 전태훈',
          url:"https://skkuter.com",
         src: 'skkuter.png'
        },
        {
          name: '스클럽(SKKLUB)',
          text: '성균관대학교에 있는 동아리, 학회, 소모임의 집합체! <br>입학해서 뭘 할지 모르는 신입생들, 복학해서 새로운 친구 사귀고 싶은 복학생들 모두 여기 참고하세요!',
          creator: '이동엽, 정유진, 황희조',
          url:"https://sskklub.herokuapp.com/",
          src: 'skklub.png'
        },
        {
          name: '성균공약모음',
          text: '성균관대학교의 2014년부터 2017년까지의 총학생회, 단과대 학생회가 어떤 공약을 내걸었는지, 얼마나 시행했는지를 확인할 수 있습니다.<br>(성대신문 기사 내용을 바탕으로 선정)', 
          creator: '이동건, 심시은, 김준엽, 이진호',
          url:"http://skkupledgechaser.com/",
          src: 'skkupledge.png'
        },
        {
          name: 'Survey Gacha!',
          text: '말로만 설문하면 기프티콘 준다고 하지 말고, 설문하고 실시간으로 확인하자! 공유하면 뽑기권 추가까지! <br>(개발중)',
          creator: '김태우',
          url:"https://surveygacha.firebaseapp.com/",
          src: 'surveygacha.png'
        },
        {
          name: 'Dotrait',
          text: '조그만 기록이라도 나의 발자취를 남기고 포인트를 얻자. 그 포인트로 픽셀아트 도전까지! <br>(개발중)',
          creator: '김태우',
          url:"https://dottrait.firebaseapp.com/",
          src: 'dotrait.png'
        },
        {
          name: '쁠모아',
          text: '이왕 먹을거 더 많이 먹자! 마트, 편의점 1+1, 2+1 행사를 한 눈에 볼 수 있도록 해주는 웹서비스<br>(데이터 수집 자동화 종료)',
          creator: '권우정, 송예균, 이진호, 이동건',
          url:"https://plusmoa.herokuapp.com/",
          src: 'plusmoa.png'
        },
        {
          name: '성균관대학교 스쿨버스 앱',
          text: '성균관대학교 스쿨버스를 마냥 추위와 더위속에서 기다리지 않아도 된다! <br>정류장마다 버스가 언제 오는지, 지금 몇대의 버스가 어디에 있는지 알 수 있는 서비스!',
          creator: '이종원, 고윤서, 김정환, 김주상, 전태훈',
          url:'http://skkoolbus.com',
          src: 'skkool.png'
        },
        {
          name: 'BATE!',
          text: 'SNS에서 댓글로 싸우기는 지쳤다!<br> 제대로된 토론 플랫폼에서 붙자!<br> 간편하게 토론방 링크 생성하고 보내버리면 끝!',
          creator: '김탁영, 강동헌, 김주한, 손은호, 정광현',
          url:"https://goo.gl/Wy7kVy",
          src: 'bate.png'
        },        
        {
          name: 'YOU 학생',
          text: '성균관대 내 외국인들을 위한 커뮤니티.<br>(운영시간, 학교 공지사항, 같은나라 학생들의 모임 등을 제공) <br>P.S-코드파일만 있음.',
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
          creator: '김희재, 조상연, 정광현, 심시은, 김준엽',
          url: false,
          src: 'todayrecipe.png'
        },
        {
          name: '토스트(tost)',
          text: '방학 때 토익, 토플 수업이나 들어볼까 생각하며 이 사이트 저 사이트 돌아다녔던 경험 다들 한 번씩 있으시죠?<br>토스트는 번거롭기만한 나에게 딱 맞는 어학강의 찾기를 한 곳에서 해결할 수 있도록 도와주는 서비스입니다.',
          creator: '조성국, 이종원, 정유진, 박찬준, 이지연',
          url: false,
          src: 'default.jpg'
        },
        {
          name: 'See-real',
          text: '하이퍼렛져 블록체인 기반으로 투명하고 신뢰도 높은 시청 데이터를 수집하고 이를 가공하여 대시보드 형태로 보여주는 솔루션입니다.  ',
          creator: '조상연, 이동건, 전태훈',
          url: "https://github.com/csy1204/see-real-dapp-project",
          src: 'seereal.png'
        },
        {
          name: 'KTX 입석을 위한 빈좌석 찾기 서비스',
          text: '코레일의 예약 가능 데이터를 기반으로 열차 내 빈좌석을 알려주는 서비스입니다.<br>경부선 KTX 기준으로 각 객실 내 각 좌석이 어느 역까지 비어있는지 시각적으로 확인이 가능합니다.',
          creator: '조상연, 이동건, 심시은',
          url: false,
          src: 'ktx.png'
        },
        {
          name: 'Indie Film Genie',
          text: '웹 크롤링과 다중 회귀부넉을 이용한 영화흥행 예측!',
          creator: '이종원, 조상연, 고윤서, 전태훈, 이동건',
          url: false,
          src: 'indie.png'
        },
        {
          name: '그 외의 수많은 프로젝트들..',
          text: '우리 성대 사자들은 이곳에 다 소개하기엔 너무 많을 정도로 항상 새로운 아이디어와 개발열의로 가득합니다.<br> 이제 당신의 아이디어를 우리와 실현시켜봐요!',
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
    transition: all 0.7s;
  }
  [data-scroll="in"] {
    opacity: 1;
    /* -webkit-transform: translateX(0); */
    transform: translateX(0)
  }
  [data-scroll="out"] {
    opacity: 0;
    /* -webkit-transform: translateX(-200px); */
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
  /* .prj-creato
  } */
prj-url{
    margin-bottom: 0px;
  }
  .prj-hook{
    background: white;
    box-shadow: 6px 10px #0c8040;
    border: 0.5px solid #0c8040;
    animation-delay: 0.5s;
    animation-duration: 1s;
    animation-iteration-count: 1;
    
  }
  .prj-projects{
    background-color: white;
    border: 3px solid #0c8040;
    min-height: 60vh;
    max-height: 80vh;
    /* position: relative; */
  }
  .prj-image{
    max-width: 100%;
    /* max-height: 100%; */
    
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
 
      
      /* font-style: italic; */
  }
  .else-font{
    font-size: 25px;    
  }

@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
</style>
   