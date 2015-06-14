module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'source-map-support',
      'mocha',
      'sinon',
      'sinon-chai'
    ],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      'app/app.tests.js'
    ],
    exclude: [],
    preprocessors: {
      'app/app.tests.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      //'Chrome',
      'PhantomJS'
    ],
    singleRun: false,
    webpack: require('./webpack/config.test'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};
