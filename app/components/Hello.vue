<template lang="pug">
.hello
  h1 {{ msg }} x {{ count }}
  ui-button(@click="increment") INC
  ui-button(@click="decrement") DEC
  p
    a(v-link="'/foo'") Go to Foo
    a(v-link="'/bar'") Go to Bar
</template>

<script>
import { increment, decrement } from '../vuex/actions'
import { count } from '../vuex/getters'

export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  },

  vuex: {
    actions: {
      increment,
      decrement
    },
    getters: {
      count
    }
  }
}
</script>
