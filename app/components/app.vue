<template lang="pug">
#app
  .sidebar-overlay(v-show="showSidebar" transition="overlay-fade" @click="toggleSidebar" v-cloak)
  .sidebar(v-show="showSidebar" transition="sidebar-toggle" v-cloak)
    side-menu
  .page
    ui-toolbar.toolbar(:title="title" @nav-icon-clicked="toggleSidebar")
    .container
      router-view
</template>

<script>
import path from 'path'
import store from '../vuex/store'
import { changeRoute, loadShelfList } from '../vuex/actions'
import { currentShelf, relativePath } from '../vuex/getters'
import SideMenu from './side-menu'

export default {
  store,

  components: {
    SideMenu
  },

  data() {
    return {
      showSidebar: false,
    }
  },

  ready() {
    this.loadShelfList(this.$route);
    this.$router.afterEach(transition => {
      this.changeRoute(transition.to);
      this.showSidebar = false;
    });
  },

  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  },

  vuex: {
    actions: {
      changeRoute,
      loadShelfList
    },

    getters: {
      title: state => {
        if (relativePath(state)) return path.basename(relativePath(state));
        if (currentShelf(state)) return currentShelf(state).name;
        return 'shelfy';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/z-index';
@import '../styles/colors';

#app {
  display: flex;
}

.page,
.container {
  width: 100vw;
  max-width: 100vw;
}

.container {
  margin-top: 56px;
}

.toolbar {
  display: flex;
  position: fixed;
  height: 56px;
  width: 100vw;
}

.sidebar-overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: $z-index-sidebar-overlay;
  background-color: $overlay;
}

.sidebar {
  position: fixed;
  width: 272px;
  height: 100vh;
  z-index: $z-index-sidebar;
  background-color: $white;
}

.sidebar-toggle-transition {
  transition: left 0.3s ease;
  left: 0;
}

.sidebar-toggle-enter,
.sidebar-toggle-leave {
  left: -272px;
}

.overlay-fade-transition {
    transition: opacity 0.3s ease;
    opacity: 1;
}

.overlay-fade-enter,
.overlay-fade-leave {
    opacity: 0;
}
</style>
