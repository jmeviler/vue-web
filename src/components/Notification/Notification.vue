<template>
  <div class="el-notification" v-show="show" style="top: 116px; z-index: 2000;">
    <div class="el-notification__group">
      <div class="el-notification__content">{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['show', 'msg']
}
</script>

