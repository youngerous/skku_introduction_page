<template>
  <v-container class="hanna">
    <div class="header">
      <h1>
        <span>아기사자</span> 갤러리
      </h1>
      <h3 class="subtitle">아기(였던) 사자들의 사진을 봐주세요!</h3>
    </div>

    <!-- <v-layout wrap class="my-2">
      <v-flex xs12 sm6 d-flex>
        <v-select :items="items" label="기수"></v-select>
      </v-flex>
    </v-layout>-->
    <hr class="my-4">

    <div class="main">
      <GallerySection
        class="section"
        v-for="(occasion, i) in occasions"
        :occasion="occasion"
        :key="i"
      />
    </div>
  </v-container>
</template>

<script>
import GallerySection from "./gallery/GallerySection";

export default {
  components: {
    GallerySection
  },
  data() {
    return {
      occasions: [
        {
          name: "세션",
          images: [
            "session/session01.jpeg",
            "session/session02.jpeg",
            "session/session03.jpeg",
            "mt_winter/mt10.jpeg"
          ],
          number: "6기"
        },
        {
          name: "겨울 엠티",
          images: [
            "mt_winter/mt01.jpeg",
            "mt_winter/mt03.jpeg",
            "mt_winter/mt04.jpeg",
            "mt_winter/mt05.jpeg",
            "mt_winter/mt06.jpeg",
            "mt_winter/mt07.jpeg",
            "mt_winter/mt08.jpeg",
            "mt_winter/mt09.jpeg"
          ],
          number: "6기"
        },
        {
          name: "해커톤",
          images: [
            "hack/hack01.jpeg",
            "hack/hack02.jpeg",
            "hack/hack03.jpg",
            "hack/hack04.jpeg"
          ],
          number: "6기"
        },
        {
          name: "스터디",
          images: [
            "study/study01.jpeg",
            "study/study02.jpg",
            "study/study03.jpg",
            "study/study04.jpg"
          ],
          number: "6기"
        },
        {
          name: "여름 엠티",
          images: [
            "sum_mt/sum_mt01.jpg",
            "sum_mt/sum_mt02.jpg",
            "sum_mt/sum_mt03.jpg",
            "sum_mt/sum_mt04.jpg",
            "sum_mt/sum_mt05.jpg",
            "sum_mt/sum_mt06.jpg",
            "sum_mt/sum_mt07.jpg",
            "sum_mt/sum_mt08.jpg",
            "sum_mt/sum_mt09.jpg"
          ],
          number: "6기"
        },
        {
          name: "동문회",
          images: [
            "meet/meet01.jpg",
            "meet/meet03.jpg",
            "meet/meet04.jpg",
            "meet/meet05.jpg",
            "meet/meet06.jpg",
            "meet/meet07.jpg",
            "meet/meet08.jpg"
          ],
          number: "6기"
        },
        {
          name: "Etc!",
          images: [
            "etc/clean01.jpg",
            "etc/clean02.jpg",
            "etc/drink01.jpg",
            "etc/etc01.jpg",
            "etc/etc02.jpg"
          ],
          number: "6기"
        }
      ],
      items: ["6기"]
    };
  },
  methods: {}
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);

.hanna * {
  font-family: "Hanna", fantasy;
  font-weight: 200;
}

.main {
  margin-top: 100px;
}

.header {
  text-align: center;
}
.subtitle {
  color: gray;
}
.section {
  margin-bottom: 200px;
}
h1 {
  font-size: 50px;
}
span {
  color: #0c8040;
}
</style>

