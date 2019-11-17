module.exports = {
  publicPath: '/',
  configureWebpack: (config) => {
    config.entry.app = './example/main.js';
  },
};
