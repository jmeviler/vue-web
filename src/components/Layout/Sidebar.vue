<template>
  <div class="sidebar-container">
    <router-link to="index" class="sidebar-item">主页</router-link>
    <router-link to="todo" class="sidebar-item">ToDo</router-link>
  </div>
</template>

<script>
export default {
  name: 'Sildebar'
}
</script>

<style lang="scss">
  .sidebar-container {
    width: 10%;
    display: inline-block;
    text-align: left;

    .sidebar-item {
      display: block;
      padding: 2% 4%;
    }
  }
</style>
