<template>
  <el-row class="footer-wrapper">
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        Copyright &copy 2017 xxxxxxxxxx 版权所有 沪ICP备XXXXXXXX-xx
      </div>
      </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss">
  .footer-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 16px;
    text-align: center;
    padding: 16px;
    background: rgb(228, 228, 228);
  }
</style>

