<template>
  <el-col :span="4" class="sidebar-wrap">
    <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    handleOpen: () => {
      console.error('handle open')
    },

    handleClose: () => {
      console.error('handle close')
    }
  }
}
</script>

<style lang="scss">
.sidebar-wrap {
  height: calc(100% - 92px);
  background: #485768;
}
</style>
