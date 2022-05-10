const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  /**
   * 插件配置
   */
  pluginOptions: {
    // 添加了插件(@samhammer/vue-cli-plugin-stylelint), 所以需要配置
    lintStyleOnBuild: true,
    stylelint: {
      fix: true, // boolean (default: true)
    },
    // 注入less全局变量
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/style/variables/*.less')],
    },
  },
});
