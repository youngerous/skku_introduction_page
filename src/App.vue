<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <v-container fluid>
        <router-view/>

      </v-container>
    </v-content>
  </v-app>
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

</style>
