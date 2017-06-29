<template>
  <div class="main-container">
    <div>目录结构：</div>
      <pre><code class="hljs shell">
        ├── build                     // 构建相关
        ├── config                    // 配置相关
        ├── src                       // 根目录
        │   ├── api                   // 请求相关
        │   ├── assets                // 静态资源
        │   ├── components            // 公共组件
        │   ├── constant              // 常量文件
        │   ├── modules               // 模块相关
        │   ├── router                // 路由相关
        │   ├── store                 // store管理
        │   ├── scss                  // 全局样式
        │   └── utils                 // 公共方法
        ├── static                    // 第三方资源
        ├── .babelrc                  // babel-loader 配置
        ├── eslintrc.js               // eslint 配置项
        ├── .gitignore                // git 忽略项
        ├── index.html                // html模板
        └── package.json              // package.json
      </code></pre>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'this is main page'
    }
  }
}
</script>

<style lang="scss">
.main-container {
  text-align: center;

  pre {
    text-align: start;
  }
}
</style>
