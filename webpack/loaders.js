var path = require('path');
var pkg = require('../package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEBUG = process.env.NODE_ENV === 'development';
var TEST = process.env.NODE_ENV === 'test';

var jsxLoader;
var sassLoader;
var cssLoader;
var cssLoaderItems;

var fileLoader = 'file-loader?name=[path][name].[ext]';
var htmlLoader = [
  'file-loader?name=[path][name].[ext]',
  'template-html-loader?' + [
    'raw=true',
    'engine=lodash',
    'version=' + pkg.version,
    'title=' + pkg.name,
    'debug=' + DEBUG
  ].join('&')
].join('!');
var jsonLoader = ['json-loader'];

var sassParams = [
  'outputStyle=expanded',
  'includePaths[]=' + path.resolve(__dirname, '../app/scss'),
  'includePaths[]=' + path.resolve(__dirname, '../node_modules')
];

if (DEBUG || TEST) {
  jsxLoader = [];
  if (!TEST) {
    jsxLoader.push('react-hot');
  }
  jsxLoader.push('babel-loader?optional=runtime&stage=0');
  sassParams.push('sourceMap', 'sourceMapContents=true');
  cssLoaderItems = [
    'style-loader',
    'css-loader?module&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader'
  ];

  sassLoader = cssLoaderItems.concat([
    'sass-loader?' + sassParams.join('&')
  ]).join('!');
  cssLoader = cssLoaderItems.join('!');

} else {

  jsxLoader = ['babel-loader?optional=runtime&stage=0'];

  cssLoaderItems = [
    'css-loader?module&localIdentName=[hash:base64:5]',
    'postcss-loader'
  ];

  sassLoader = ExtractTextPlugin.extract('style-loader', cssLoaderItems.concat([
    'sass-loader?' + sassParams.join('&')
  ]).join('!'));

  cssLoader = ExtractTextPlugin.extract('style-loader', cssLoaderItems.join('!'));
}

var stringLoader = jsxLoader.concat('string-loader').join('!');

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: jsxLoader
  },
  {
    test: /\.css$/,
    loader: cssLoader
  },
  {
    test: /\.svg$/,
    include: [
      path.resolve(__dirname, '../app/svgs')
    ],
    loader: stringLoader
  },
  {
    test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.ttf$/,
    exclude: [
      path.resolve(__dirname, '../app/svgs')
    ],
    loader: fileLoader
  },
  {
    test: /\.json$/,
    exclude: /node_modules/,
    loaders: jsonLoader
  },
  {
    test: /\.html$/,
    loader: htmlLoader
  },
  {
    test: /\.scss$/,
    loader: sassLoader
  }
];

module.exports = loaders;
