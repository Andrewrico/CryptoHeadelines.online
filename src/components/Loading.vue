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
  background-color: #0b1717;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxyYWRpYWxHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN4PSIwJSIgY3k9IjAlIiByPSIxNDEuNDIxMzU2MjM3MzA5NSUiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDJjMmMiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwLjAxMTAwMDAwMDAwMDAwMDAwMSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNDA0MDQiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwLjY1Nzk5OTk5OTk5OTk5OTkiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDcyNjI2IiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMSIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iLTUwIiB5PSItNTAiIHdpZHRoPSIxMDEiIGhlaWdodD0iMTAxIiBmaWxsPSJ1cmwoI3ZzZ2cpIiAvPjwvc3ZnPg==);
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxyYWRpYWxHcmFkaWVudCBpZD0idnNnZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGN4PSIwJSIgY3k9IjAlIiByPSIxNDEuNDIxMzU2MjM3MzA5NSUiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDJjMmMiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwLjAxMTAwMDAwMDAwMDAwMDAwMSIvPjxzdG9wIHN0b3AtY29sb3I9IiMxNDA0MDQiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIwLjY1Nzk5OTk5OTk5OTk5OTkiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDcyNjI2IiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMSIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iLTUwIiB5PSItNTAiIHdpZHRoPSIxMDEiIGhlaWdodD0iMTAxIiBmaWxsPSJ1cmwoI3ZzZ2cpIiAvPjwvc3ZnPg==);
  background-image: -webkit-radial-gradient(left top, ellipse farthest-corner, rgb(0, 44, 44) 1.1%, rgb(20, 4, 4) 65.8%, rgb(7, 38, 38) 100%);
  background-image: radial-gradient(ellipse farthest-corner at left top, rgb(0, 44, 44) 1.1%, rgb(20, 4, 4) 65.8%, rgb(7, 38, 38) 100%);
  background-image: -ms-radial-gradient(left top, ellipse farthest-corner, rgb(0, 44, 44) 1.1%, rgb(20, 4, 4) 65.8%, rgb(7, 38, 38) 100%);
}

svg {
  font-size: 2em;
  color: var(--c-primary);
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