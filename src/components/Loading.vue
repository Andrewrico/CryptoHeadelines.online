<template>
  <transition name="fade">
    <vue-loading class="loading" :active="isLoading"></vue-loading>
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
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}

svg {
  color:red;
  font-size: 2em;
  /* color: var(--c-primary); */
  margin-bottom: 20px;
}

.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>