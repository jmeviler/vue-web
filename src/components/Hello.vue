<template>
  <div class="hello-wrap">
    <div>{{ msg }}</div>
    <div>Essential Links</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
  .hello-wrap {
    font-size: 24px;
  }
</style>
