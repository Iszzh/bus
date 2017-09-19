<template>
  <div id="app">
    <router-view></router-view>
    <navs v-if="$route.meta.showNav"></navs>
  </div>
</template>

<script>
    import Navs from './component/Nav.vue'
    export default {
  name: 'app',
  components:{
      Navs
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import "assets/app";
</style>
