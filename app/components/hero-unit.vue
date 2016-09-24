<template lang="pug">
#hero-unit
  img.logo(src='../assets/logo.png')
</template>

<script>
export default {
  name: 'HeroUnit'
}
</script>

<style lang="scss" scoped>
#hero-unit {
  display: flex;
}

.logo {
  margin: auto;
  width: 200px;
  height: 200px
}
</style>
