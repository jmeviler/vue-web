<template>
  <div class="test-wrap">
    <div class="title">
      {{ msg || "this is title" }}
    </div>
    <div class="content">
      {{ content || "this is content" }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'this is a msg for test',
      content: 'this is test msg for content'
    }
  }
}
</script>

<style lang="scss">
  .test-wrap {
    .title {
      font-size: 24px;
      color: blue;
    }

    .content {
      font-size: 32px;
      color: red;
    }
  }
</style>

