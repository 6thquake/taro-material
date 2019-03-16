/* eslint-disable import/no-commonjs */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  projectName: 'taro-material',
  designWidth: 750,
  sourceRoot: 'pages',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: ['env'],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
      ],
    },
  },
  defineConstants: {},
  alias: {
    'taro-material': path.resolve(__dirname, '../pages/ui.js'),
  },
  weapp: {},
  h5: {
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
        },
      },
    },
  },
  copy: {
    patterns: [{ from: 'packages/taro-material/src/', to: './pages/' }],
    options: {},
  },
};

if (process.env.TARO_BUILD_TYPE === 'component') {
  Object.assign(config.h5, {
    enableSourceMap: false,
    enableExtract: false,
    enableDll: false,
  });
  config.h5.webpackChain = chain => {
    chain.plugins.delete('htmlWebpackPlugin');
    chain.plugins.delete('addAssetHtmlWebpackPlugin');
    chain.merge({
      output: {
        path: path.join(process.cwd(), 'packages/taro-material/dist', 'h5'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'taro-material',
      },
      externals: {
        nervjs: 'commonjs2 nervjs',
        classnames: 'commonjs2 classnames',
        '@tarojs/components': 'commonjs2 @tarojs/components',
        '@tarojs/taro-h5': 'commonjs2 @tarojs/taro-h5',
        weui: 'commonjs2 weui',
      },
      plugin: {
        extractCSS: {
          plugin: MiniCssExtractPlugin,
          args: [
            {
              filename: 'css/index.css',
              chunkFilename: 'css/[id].css',
            },
          ],
        },
      },
    });
  };
  config.sourceRoot = 'packages/taro-material/src';
}

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
