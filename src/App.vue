<template>
  <div id="app">
    <Navbar></Navbar>
    <transition transition
        name="fade"
        mode="out-in"
<<<<<<< HEAD
      >
    <router-view/>
=======
        >
    <v-content>
      <v-container fluid class="pa-0">
        <router-view/>
      </v-container>
    </v-content>
>>>>>>> 88ffe982d2ce045f66551541be678027ce44313d
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    'Navbar': Navbar
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