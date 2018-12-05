<template>
  <v-container>
    <div class="header">
      <h1>아기사자 갤러리</h1>
      <h3 class="subtitle">아기(였던) 사자들의 사진을 봐주세요!</h3>
    </div>

    <v-layout wrap class="my-2">
      <v-flex xs12 sm6 d-flex>
        <v-select :items="items" label="기수"></v-select>
      </v-flex>
    </v-layout>

    <hr class="my-4">

    <div class="main">
      <GallerySection v-for="(occasion, i) in occasions" :occasion="occasion" :key="i"/>
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
          name: "스터디",
          images: [
            "study/study01.jpeg",
            "study/study02.jpg",
            "study/study03.jpg",
            "study/study04.jpg",
            "study/study05.jpg"
          ],
          number: "6기"
        },
        {
          name: "세션",
          images: [
            "session/session01.jpeg",
            "session/session02.jpeg",
            "session/session03.jpeg",
            "session/session04.jpeg"
          ],
          number: "6기"
        },
        {
          name: "엠티",
          images: [
            "mt_winter/mt01.jpeg",
            "mt_winter/mt02.jpeg",
            "mt_winter/mt03.jpeg",
            "mt_winter/mt04.jpeg",
            "mt_winter/mt05.jpeg",
            "mt_winter/mt06.jpeg",
            "mt_winter/mt07.jpeg",
            "mt_winter/mt08.jpeg",
            "mt_winter/mt09.jpeg",
            "mt_winter/mt10.jpeg"
          ],
          number: "6기"
        },
        {
          name: "해커톤",
          images: [
            "hack/hack01.jpeg",
            "hack/hack02.jpeg",
            "hack/hack03.jpeg",
            "hack/hack04.jpeg"
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
.header {
  text-align: center;
}
.subtitle {
  color: gray;
}
</style>

