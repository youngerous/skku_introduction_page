<template>
  <v-app id="app">
    <Navbar></Navbar>
      <v-content>
        <v-container fluid class="pa-0">
          <!-- transition 은 효과를 적용시키고 싶은 태그를 바로 위에서 감싸야 제대로 적용됩니다 -->
          <!-- 그리고 사실 Vuetify 에 transition 관련된 컴포넌트가 존재하기 때문에 주석처리 된 아래와 같은 컴포넌트를 써도 되지만, 일단 기존의 방식으로 해놓겠음 -->
          <!-- <v-fade-transition mode="out-in"> -->
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view transition="fade-transition" />
          </transition>
          <!-- </v-fade-transition> -->
        </v-container>
      </v-content>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
html { overflow-y: auto }

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>