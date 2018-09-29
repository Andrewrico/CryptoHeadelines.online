<template>
  <div id="app">
    <App />
  </div>
</template>

<script>
import App from './components/App/Index.vue'

export default {
  name:'app',
  components: {
    App
  }
}
</script>

<style>

html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

address {
  display: block;
  font-style: italic;
}

* {
  -webkit-box-sizing: border-box!important;
  box-sizing: border-box!important;
  margin: 0;
  padding: 0;
  min-height: 0;
  min-width: 0;
  list-style: none;
  text-decoration: none;
}

figure {
  margin: 0;
  padding: 0;
}

img {
  -o-object-fit: cover;
  object-fit: cover;
  display: block;
  max-width: 100%;
  height: auto;
}

@media only screen and (max-width: 768px) {
  html {
    font-size: 16px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  html {
    font-size: 16px;
  }
}

@media only screen and (min-width: 1024px) {
  html {
    font-size: 16px;
  }
}



*::-webkit-scrollbar {
  width: 3px;
}

*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #00837c49;
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(165, 253, 253);;
}

* {
  outline: none !important;
}

a {
  text-decoration: none !important;
}

ul {
  list-style: none !important;
  margin: 0;
  padding: 0;
}
</style>
