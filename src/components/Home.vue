<template>
  <div class="main-section">
      <video autoplay muted loop id="codingVideo">
          <source src="@/assets/coding.mp4" type="video/mp4">
      </video>
      <vue-typed-js :strings="['Hack Your Life', 'Code your Ideas with your hand', 'Make the Ideas yours']" :backSpeed="40" :loop="true" :showCursor="true" :autoInsertCss="true">
          <h1 class="typing"></h1>
      </vue-typed-js>
  </div>
</template>

<script>
import  { VueTypedJs } from 'vue-typed-js'
export default {
    name: 'Home',
    components: {
        VueTypedJs
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#codingVideo {
    position: absolute;
    right: 0;
    top: 0;
    width: 150%;
    height: 100%;
}
.typing {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
    font-size: 30px;
    color: white;
    position: absolute;
    top: 50%;
    
}
.main-section {
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: relative;
}
</style>
