<template>
  <v-app id="app">
    <Navbar></Navbar>
    <transition transition
        name="fade"
        mode="out-in"
        >
    <v-content>
      <v-container fluid class="pa-0">
        <router-view/>
      </v-container>
    </v-content>
    </transition>
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