<template>
  <div>
    <div>
      <h2>{{occasion.name}}</h2>
    </div>

    <div class="gr-carousel">
      <v-carousel :height="300">
        <v-carousel-item
          v-for="(image,i) in occasion.images"
          :key="i"
          
          :src="require(`@/assets/gallery/${image}`)"
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
.gr-carousel {
}
</style>
