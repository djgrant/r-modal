const getConfig = require('hjs-webpack');

const config = getConfig({
  in: 'src',
  out: 'public',
  clearBeforeBuild: '!(images)'
});

module.exports = config;
