<template lang="pug">
#side-menu
  .top
    a.brand(v-link="'/'") shelfy
    ui-icon-button.add(icon="library_add" type="flat" @click="addNewShelf")
  ul.menu
    a.menu-item(v-for="s in shelfList | orderBy 'name' 'id'" v-link="'/' + s.id") {{ s.name }}
</template>

<script>
import { remote } from 'electron'
import { pushShelfList } from '../vuex/actions'
import { shelfList } from '../vuex/getters'

const dialog = remote.dialog
const browserWindow = remote.BrowserWindow

export default {
  methods: {
    addNewShelf() {
      this.selectDirectory()
        .then(directory => this.pushShelfList(directory))
        .then(shelf => this.$router.go(`/${shelf.id}`));
    },

    selectDirectory() {
      return new Promise((resolve, reject) => {
        const focusedWindow = browserWindow.getFocusedWindow();
        dialog.showOpenDialog(focusedWindow, {
          properties: ['openDirectory']
        }, directories => {
          if (directories) resolve(directories[0]);
          reject('No folder selected.');
        });
      })
    }
  },

  vuex: {
    actions: {
      pushShelfList
    },

    getters: {
      shelfList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.top {
  display: flex;
  height: 56px;
  align-items: center;
  border-bottom: 1px solid $gray;
}

.brand {
  font-size: 28px;
  margin: 0;
  padding: 0 16px;
  color: $black-text;
  text-decoration: none;
}

.add {
  margin-right: 16px;
  margin-left: auto;
}

.menu {
  margin: 0;
  padding: 0;
  padding-bottom: 16px;
}

.menu-item {
  display: block;
  padding: 8px 16px;
  color: $black-text;
  font-size: 20px;
  text-decoration: none;

  &:focus,
  &:hover {
    background-color: $gray;
  }

  &.v-link-active {
    background-color: $light-gray;
    color: $blue;
    font-weight: 500;
  }
}
</style>
