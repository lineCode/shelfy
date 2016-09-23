<template lang="pug">
#app
  img.logo(src='../assets/logo.png')
  hello
  p.
    Welcome to your Electron + Vue.js app.
  p.
    You may also want to checkout
    <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
    <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
  router-view
</template>

<script>
import store from '../vuex/store'
import Hello from './hello'

export default {
  store,
  components: {
    Hello
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
