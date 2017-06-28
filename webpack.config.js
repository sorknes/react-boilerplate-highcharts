/*  ------------------------------------------------
./webpack.config.js

start local development:  npm run dev
start build process:      npm run build
---------------------------------------------------- */

'use strict';


// general packages
const webpack           = require('webpack'),
      path              = require('path');


// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      SpritePlugin      = require('svg-sprite-loader/plugin'),
      autoprefixer      = require('autoprefixer');


// set dev and production mode
const nodeEnv           = process.env.NODE_ENV || 'development',
      isProduction      = nodeEnv === 'production';


// set port
const devPort           = 8080;


// set source paths
const buildPath         = path.join(__dirname, './build'),
      sourcePath        = path.join(__dirname, './src'),
      jsSourcePath      = path.join(__dirname, './src/components'),
      cssPath           = path.join(__dirname, './src/scss'),
      imgPath           = path.join(__dirname, './src/assets/images'),
      iconPath          = path.join(__dirname, './src/assets/icons');


// common plugins
const plugins = [
  new SpritePlugin(),

  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   filename: 'vendor-[hash].js',
  //   minChunks(module) {
  //     const context = module.context;
  //     return context && context.indexOf('node_modules') >= 0;
  //   },
  // }),

  new webpack.NamedModulesPlugin(),

  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
    inject:   'body'
  })
];


// common rules
const rules = [
  { // js / jsx loader for webpack
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ]
  },

  { // svg sprite loader for webpack
    test: /\.svg$/,
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'assets/icons/icons-sprite.svg',
        },
      },
      'svgo-loader',
    ],
    include: iconPath,
  },

  { // image loader for webpack
    test: /\.(png|gif|jpg|svg)$/,
    include: imgPath,
    use: [{
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'assets/images/[name]-[hash].[ext]'
      }
    }]
  },

  { // font loader for webpack
    test: /\.(ttf|eot|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      name: 'assets/fonts/[name].[ext]',
  },
},
];


if (isProduction) {
  // production plugins
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),

    new ExtractTextPlugin({
      filename: 'css/[name]-[hash].css'
    })
  );

  // production rules
  rules.push(
    { // sass / scss loader for webpack
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      })
    }
  );
} else {
  // development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );

  // development rules
  rules.push(
    { // sass / scss loader for webpack
      test: /\.(sass|scss)$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }
  );
};


module.exports = {
  devtool: isProduction ? false : 'source-map',

  context: jsSourcePath,

  entry: __dirname + '/src/index.js',

  output: {
    path: buildPath,
    filename: 'js/app-[hash].js'
  },

  // see common rules
  module: {
    rules
  },

  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath,
    ],
  },

  // see common plugins
  plugins,

  // devlopment server
  devServer: {
    contentBase: isProduction ? buildPath : sourcePath,
    // historyApiFallback: true,
    port: devPort,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
