<template>
    <div class="mp-main-section">
        <div class="mp-video-container">
            <video autoplay muted loop>
                <source src="@/assets/coding.mp4" type="video/mp4">
            </video>
            <div class="mp-videoCover"></div>
        </div>
        <div class="mp-pageTitle">
            <div class="mp-title_container">
                <h1 class="mp-likelionSkku">LikeLion X SKKU</h1>
                <vue-typed-js :strings="['Hack Your Life', 'Code your Ideas with your hand', 'Make the Ideas yours']" :backSpeed="40" :loop="true" :showCursor="false" :autoInsertCss="true">
                    <h2 class="mp-typing"></h2>
                </vue-typed-js>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router'
import  { VueTypedJs } from 'vue-typed-js'
export default {
    name: 'Home',
    components: {
        VueTypedJs
    }
}
</script>


<style>
.mp-video-container {
    width: 100%;
    height: 900px;
    overflow: hidden;
    position: relative;
  }

video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-position: center center; 
    background-size: cover;
}
.mp-pageTitle {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
}

.mp-title_container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.mp-typing {
    font-size: 30px;
    font-weight: 100;
    color: white;
}
.mp-likelionSkku {
    font-size: 50px;
    color: white;
}
.mp-main-section {
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: relative;
}
.mp-videoCover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: black;
}

</style>
