<template>
  <div class="layout-container">
    <Sidebar />
    <AppMain />
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
