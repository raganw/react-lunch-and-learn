var pkg = require('../package.json');

var DEBUG = process.env.NODE_ENV === 'development';

var entry = {
  app: ['./app.js']
};

if (DEBUG) {
  entry.app.push(
    util.format(
      'webpack-dev-server/client?http://%s:%d',
      pkg.config.devHost,
      pkg.config.devPort
    )
  );
  entry.app.push('webpack/hot/dev-server');
}

module.exports = {
  context: path.join(__dirname, '../app'),
  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG || TEST ? 'inline-source-map' : false,
  entry: entry,
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: '/',
    filename: jsBundle,
    pathinfo: false
  },
  target: 'web'
};
