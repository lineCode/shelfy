import Vue from 'vue'
import VueRouter from 'vue-router'
import Keen from 'keen-ui'
import 'keen-ui/dist/keen-ui.css'

import App from './components/app'
import HeroUnit from './components/hero-unit'
import Shelf from './components/shelf'
import './styles/main'

Vue.use(VueRouter)
Vue.use(Keen)

const router = new VueRouter({
  hashbang: false
})

router.map({
  '/': {
    component: HeroUnit
  },
  '/:shelfId': {
    component: Shelf
  },
  '/:shelfId/*relativePath': {
    component: Shelf
  }
})

router.start(App, 'app')
