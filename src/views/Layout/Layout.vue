<template>
  <div class="layout-container">
    <MainHeader></MainHeader>
    <div class="el-col-4 sidebar-wrap">
      <Sidebar></Sidebar>
    </div>
    <div class="el-col-20 app-main">
      <AppMain></AppMain>
    </div>
    <MainFooter></MainFooter>
    <div v-show="loading" class="loading-wrap">
      <img src="../../assets/loading.gif">
    </div>
  </div>
</template>

<script>
import { AppMain, MainHeader, Sidebar, MainFooter } from './index'

export default {
  name: 'Layout',
  components: {
    AppMain,
    MainHeader,
    Sidebar,
    MainFooter
  },
  computed: {
    loading () {
      return this.$store.state.error.loading
    }
  }
}
</script>

<style lang="scss">
.layout-container {
  height: 100%;
  font-size: 12px;

  .app-main {
    max-height: 88%;
    overflow: auto;
  }

  .loading-wrap {
    height: 100%;
    width: 100%;
    background: #000;
    opacity: .375;
    z-index: 100;
    position: absolute;
    top: 0;

     img {
      width: 40px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
     }
  }
}
</style>
