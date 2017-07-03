<template>
  <div class="layout-container">
    <MainHeader></MainHeader>
    <div class="el-col-4 sidebar-wrap">
      <Sidebar v-bind:data="sidebars"></Sidebar>
    </div>
    <div class="el-col-20 app-main">
      <AppMain></AppMain>
    </div>
    <MainFooter></MainFooter>
    <Loading v-bind:loading="loading" ></Loading>
    <Notification v-bind:show="errorStatus" v-bind:msg="errorMsg"></Notification>
  </div>
</template>

<script>
import { AppMain, MainHeader, Sidebar, MainFooter } from './index'
import { Loading, Notification } from 'components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    MainHeader,
    Sidebar,
    MainFooter,
    Loading,
    Notification
  },
  data () {
    return {
      sidebars: [{
        name: '首页',
        route: '/index'
      }, {
        name: 'ToDo',
        route: '/todo'
      }, {
        name: '综合',
        route: '',
        child: [{
          name: 'ToDo',
          route: '/todo'
        }, {
          name: '首页',
          route: '/index'
        }]
      }]
    }
  },
  computed: {
    loading () {
      return this.$store.state.error.loading
    },
    errorStatus () {
      return this.$store.state.error.errorStatus
    },
    errorMsg () {
      return this.$store.state.error.errorMsg
    }
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

  .loading-wrap {
    height: 100%;
    width: 100%;
    background: #000;
    opacity: .375;
    z-index: 100;
    position: absolute;
    top: 0;

     img {
      width: 40px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
     }
  }
}
</style>
