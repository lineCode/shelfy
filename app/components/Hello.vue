<template lang="pug">
.hello
  h1 {{ msg }}
  span from {{ appName }} running on {{ platform }}
</template>

<script>
import { remote } from 'electron'
import os from 'os'

export default {
  data() {
    return {
      platform: os.platform(),
      appName: remote.app.getName(),
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>
