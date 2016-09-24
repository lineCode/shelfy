<template lang="pug">
#shelf
  h3 {{ absolutePath }}
  ul
    li(v-for="f in list")
      a(v-link="$route.path + '/' + f") {{ f }}
</template>

<script>
import jetpack from 'fs-jetpack'
import { absolutePath } from '../vuex/getters'

export default {
  name: 'Shelf',

  computed: {
    list() {
      return jetpack.list(this.absolutePath);
    }
  },

  vuex: {
    getters: {
      absolutePath
    }
  }
}
</script>

<style lang="scss" scoped>
#shelf {
  padding: 16px;
}
</style>
