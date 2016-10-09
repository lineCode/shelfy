<template lang="pug">
#image-card
  .ui.card(v-if="file.isDirectory()")
    a.image(v-link="$route.path + '/' + file.name")
      img(:src="imageData" v-if="loaded")
      img(src="../assets/file.png" v-else)
    .content
      a.name(v-link="$route.path + '/' + file.name") {{ file.name }}
      .right.floated
        ui-icon-button(icon="open_in_new" type="flat")

  .ui.card(v-else)
    .image
      img(:src="imageData" v-if="loaded")
      img(src="../assets/file.png" v-else)
    .content
      .name {{ file.name }}
      .right.floated
        ui-icon-button(icon="open_in_new" type="flat")
</template>

<script>
import jetpack from 'fs-jetpack'
import { absolutePath } from '../vuex/getters'

export default {
  name: 'ImageCard',

  props: {
    file: {
      type: Object, // ShelfyFile
      required: true
    }
  },

  data() {
    return {
      imageData: null
    }
  },

  computed: {
    loaded() {
      return this.imageData != null;
    }
  },

  created() {
    jetpack.readAsync(this.file.path, 'buffer')
      .then(buf => `data:image/jpeg;base64,${buf.toString('base64')}`)
      .then(data => { this.imageData = data });
  },

  vuex: {
    getters: {
      absolutePath
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/card';

#image-card {
  padding: 16px;
}
</style>
