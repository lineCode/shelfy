<template lang="pug">
#app
  img.logo(src='../assets/logo.png')
  hello
  p.
    Welcome to your Electron + Vue.js app. To get started, take a look at the
    <a href="https://github.com/vuejs-templates/webpack#folder-structure" target="_blank">README</a>
    of this template. If you have any issues with the setup, please file an issue at this template's repository.
  p.
    For advanced configurations, checkout the docs for
    <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
    <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
  p.
    You may also want to checkout
    <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
    <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
</template>

<script>
import Hello from './hello'

export default {
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