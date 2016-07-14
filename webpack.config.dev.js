const getConfig = require('hjs-webpack');

const config = getConfig({
  in: 'examples',
  out: 'public',
  clearBeforeBuild: '!(images)'
});

config.resolve.modulesDirectories = ['src', 'node_modules'];
config.module.loaders.push({ test: /\.md$/, loader: 'html!markdown' });

module.exports = config;
