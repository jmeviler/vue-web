<template>
  <el-col class="sidebar-wrap">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      theme="dark"
      @select="handleSelect"
    >
      <!--不包含子导航-->
      <el-menu-item v-for="(item, index) in data" v-if="!item.child" v-bind:key="index" v-bind:index="item.route">
        {{item.name}}
      </el-menu-item>

      <!--包含子导航-->
      <el-submenu v-for="(item, index) in data" v-if="item.child" v-bind:key="index" v-bind:index="item.route">
        <template slot="title">{{item.name}}</template>
        <el-menu-item v-for="(subItem, index) in item.child" v-bind:key="index" v-bind:index="subItem.route">
          {{subItem.name}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['data'],
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect: function (key) {
      this.$router.push(key)
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
