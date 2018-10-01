<template>
  <transition name="fade">
    <vue-loading :active="isLoading"></vue-loading>
  </transition>
</template>


<script>
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
export default {
  name: 'Loading',

  props: ['isLoading'],

  components: {
    VueLoading
  }
}
</script>

<style>
.loading-overlay.is-active {
  color:red!important;
  background-image: #000!important;
  font-size: 2em;
  z-index: 99999!important;
}
</style>


