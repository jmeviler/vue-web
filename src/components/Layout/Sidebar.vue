<template>
<el-row class="tac">
  <el-col :span="8">
    <h5>不带 icon</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
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
</el-row>
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
