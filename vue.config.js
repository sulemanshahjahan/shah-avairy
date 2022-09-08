const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

});
module.exports = {
  devServer: {
    // 'auto' | 'all' [string] here
    allowedHosts: 'all',
  },
};

module.exports = {
singleQuote: true,
semi: false,
publicPath: ‘/public/’
}