<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .main-container {
    width: 90%;
    display: inline-block;
    position: absolute;
  }
</style>
