import Vue from 'vue'
import Keen from 'keen-ui'
import 'keen-ui/dist/keen-ui.css'
import App from './components/app'

Vue.use(Keen);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
