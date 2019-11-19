module.exports = {
  publicPath: '/',
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.entry.app = './example/main.js';
  },
};
