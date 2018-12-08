<template>
    <div>
        <div class="mp-main-section">
            <div class="mp-video-container">
                <video autoplay muted loop>
                    <source src="@/assets/coding.mp4" type="video/mp4">
                </video>
                <div class="mp-videoCover"></div>
            </div>
            <div class="mp-pageTitle">
                <div class="mp-title_container">
                    <h1 class="mp-likelionSkku">LikeLion<br v-if="$vuetify.breakpoint.xsOnly"> X SKKU</h1>
                    <div style="min-height: 89px;" class="mx-3">
                        <vue-typed-js :strings="['Hack Your Life', 'Code your Ideas with your hand', 'Make the Ideas yours']" :backSpeed="40" :loop="true" :showCursor="false" :autoInsertCss="true">
                            <!-- h2 class명 변경하면 안됨 -->
                            <h2 class="typing"></h2>
                        </vue-typed-js>
                    </div>
                </div>
            </div>
        </div>
        <div class="mp-main">
            <div class="mp-what">
                <h1 class="mp-what-title">What We Do</h1>
                <h1 class="mp-what-title2">뭐하는 동아리인가요?</h1>
                <h2 class="mp-what-info">
                    성균관대학교 멋쟁이사자처럼은 성균관대학교 중앙동아리에 등록된 웹 프로그래밍 동아리입니다. 
                    자체 개발된 온라인 강의 플랫폼 '클래스라이언' 을 통해 강의를 듣고 과제를 수행합니다. 다양한 오프라인 활동과 병행하여 뜻을 같이하는 동료를 찾고 자신이 만들고자 하는 
                    서비스를 직접 프로그래밍 하도록 돕습니다.
                </h2>
            </div>
            <div class="mp-history">
                
            </div>
            <div class="mp-language">
            
                
            </div>
            <div class="mp-end">
                <h1 class="mp-ending">여러분들의 멋진 도전을 기다립니다!</h1>
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
    },
}
</script>


<style>
.mp-main-section {
    width: 100vw;
    height: 94vh;
    background-color: black;
    position: relative;
}
.mp-video-container {
    width: 100%;
    height: 94vh;
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

.typing {
    font-size: 30px;
    font-weight: 100;
    color: white;
}

.mp-likelionSkku {
    font-size: 50px;
    color: white;
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

.mp-what {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
    width: 100vw;
    height: 101vh;
}

.mp-what-title {
    position: absolute;
    color: #0c8040;
    margin-left: 30px;
    top: 40%;
    font-size: 9vh;
    font-weight: 300;
}

.mp-what-title2 {
    color: #0c8040;
    font-size: 6vh;
    font-weight: 100;
    margin-left: 30px;
    top: 50%;
}

.mp-what-info {
    color: black;
    font-weight: 100;
    font-size: 3vh;
}
.mp-history {
    width: 100vw;
    height: 100vh;
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
}
</style>
