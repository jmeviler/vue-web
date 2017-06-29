<template>
  <el-menu theme="dark"
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="booking">处理中心</el-menu-item>
    <el-menu-item index="personal">我的工作台</el-menu-item>
    <el-menu-item index="test">订单管理</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect: function (key, keyPath) {
      this.$router.push('/todo')
    }
  }
}
</script>

<style lang="scss">

</style>
