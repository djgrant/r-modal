const path = require('path');
const getConfig = require('hjs-webpack');

const config = getConfig({
  in: 'examples',
  out: 'public',
  clearBeforeBuild: '!(images)'
});

config.resolve.modulesDirectories = ['node_modules'];
config.module.loaders.push({ test: /\.md$/, loader: 'html!markdown' });

config.resolve.alias = {
  'r-modal/lib': path.join(__dirname, 'src'),
  'r-modal': path.join(__dirname, 'src')
};

module.exports = config;
