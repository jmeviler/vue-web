<template>
  <div class="layout-container">
    <el-button type="primary" icon="edit"></el-button>
  </div>
</template>

<script>
  import { Sidebar, AppMain } from '../Layout'

  export default {
    name: 'Layout',
    components: {
      Sidebar,
      AppMain
    }
  }
</script>

<style lang="scss">
  .app-layout {
    font-size: 24px;
  }
</style>
