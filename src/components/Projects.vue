<template>
  <v-container>
    <v-layout>
      <v-flex class="prj-hook" xs12 text-xs-center ma-5 pa-2 display-3 font-weight-light >
        <mark class="prj-highlight">성대 사자  </mark>들이 만든 <br>
        여러가지 서비스들을 소개합니다
      </v-flex>
    </v-layout>
    <v-layout v-for="(project,index) in projects" ma-5 pa-1 style="background-color: white;" :key="index">
      <v-layout xs12 text-xs-center ma-5 pa-0 class="prj-projects" data-scroll>
        <v-flex class="prj-infos" xs12 md7 ma-2 pa-2 text-xs-left>
          <p class="prj-name">{{project.name}}</p>
          <p class="prj-text">{{project.text}}</p>
          <p class="prj-creator">만든이: {{project.creator}}</p>
          <p class="prj-url">{{project.url}}</p>
        </v-flex>
        <v-flex class="prj-imgcontainer" xs12 md5 ma-0>
          <img class="prj-image" :src="require(`@/assets/prj-images/${project.src}`)" alt="이미지가 없다">
          <div>

          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>  
</template>

<script>
// import ScrollOut from "scroll-out"

export default {
  mounted(){
    ScrollOut({
      threshold : 0.8
    });
  },

  data(){
    return{
      projects:[
        {
          name: '성균공략모음',
          text: '성균관대학교의 2014년부터 2017년까지의 총학생회, 단과대 학생회가 어떤 공약을 내걸었는지, 얼마나 시행했는지를 확인할 수 있습니다.(성대신문 기사 내용을 바탕으로 선정)',
          creator: '이동건, 심시은, 김준엽, 이진호',
          url:"http://skkupledgechaser.com/",
          src: '1.png'
        },
        {
          name: 'YOU 학생',
          text: '성균관대 내 외국인들을 위한 커뮤니티.(운영시간, 학교 공지사항, 같은나라 학생들의 모임 등을 제공)서비스종료',
          creator: '김준엽, 허용회, 김경헌, 최재필',
          url:"https://github.com/Yupjun/youhaksaeng",
          src: '2.jpg'
        },
        {
          name: '쁠모아',
          text: '마트, 편의점 1+1, 2+1 행사를 한 눈에 볼 수 있도록 해주는 웹서비스',
          creator: '권우정, 송예균, 이진호, 이동건',
          url:"https://plusmoa.herokuapp.com/",
          src: '3.jpg'
        },
        {
            name: '',
            text:'',
            creator: '',
            url: "",
            src: '1.png'
        },
      ]
    }
  }
}
</script>

<style>
  [data-scroll] {
    transition: all 0.5s;

  }
  [data-scroll="in"] {
    opacity: 1;
    /* -webkit-transform: translateX(0); */
    transform: translateX(0)
  }
  [data-scroll="out"] {
    opacity: 0;
    /* -webkit-transform: translateX(-200); */
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
    /* height: 60vh; */
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
  mark.prj-highlight{
      color: #0c8040;
      background-color: white;
      font-weight: bold;
      font-style: italic;
  }
</style>
