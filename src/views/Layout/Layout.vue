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
}
</style>
