<template>
  <div>
    <div class="gr-title">
      <h2># {{occasion.name}}</h2>
    </div>

    <div class="gr-carousel">
      <v-carousel
        hide-delimiters="false"
        :height="500"
        :cycle="true"
        :interval="3000"
        active-class="'v-item--active'"
      >
        <v-carousel-item
          v-for="(image,i) in occasion.images"
          :key="i"
          :src="require(`@/assets/gallery/${image}`)"
          lazy="true"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "GallerySection",
  props: ["occasion"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.hanna * {
  font-family: "Hanna", fantasy;
  font-weight: 200;
}

.gr-carousel {
  width: 60vw;
  margin: auto;
}

@media (max-width: 700px) {
  .gr-carousel {
    width: 90vw;
    margin: auto;
  }
}

.gr-title {
  font-size: 30px;
  text-align: center;
  height: 10rem;
  line-height: 10rem;
  color: #595959;
}
</style>
