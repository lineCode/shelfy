<template lang="pug">
#shelf
  image-card(:file="f" v-for="f in files")
</template>

<script>
import jetpack from 'fs-jetpack'
import { absolutePath } from '../vuex/getters'
import ImageCard from './image-card'
import ShelfyFile from '../utils/ShelfyFile'

export default {
  name: 'Shelf',

  components: {
    ImageCard
  },

  computed: {
    files() {
      return jetpack.list(this.absolutePath)
        .map(name => new ShelfyFile(jetpack.path(this.absolutePath, name), name))
        .sort(ShelfyFile.compare);
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
</style>
