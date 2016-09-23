import Vue from 'vue'
import VueRouter from 'vue-router'
import Keen from 'keen-ui'
import 'keen-ui/dist/keen-ui.css'
import App from './components/app'

Vue.use(VueRouter)
Vue.use(Keen)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
  hashbang: false
})

router.map({
  '/foo': {
    component: Foo
  },
  '/bar': {
    component: Bar
  }
})

router.start(App, 'app')
