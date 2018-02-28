const path = require('path')

module.exports = {
  require: [
    path.join(__dirname, 'docs/css/spectre.min.css'),
    path.join(__dirname, 'docs/css/spectre-icons.min.css'),
  ],
  webpackConfig: Object.assign({},
    require('./build/webpack.base.conf.js'),
    {
      /* Custom config options */
    }
  )
};
