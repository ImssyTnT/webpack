const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      //   图片加载器
      // webpack4
      //   {
      //     test: /\.png|jpg|gif/,
      //     use: [
      //       {
      //         loader: 'url-loader',
      //         options: {
      //           limit: 2 * 1024,
      //         },
      //       },
      //     ],
      //   },
      // webpack5
      {
        test: /\.png|jpg|gif/,
        type: 'asset',
        generator: {
          filename: 'images/[hash:6][ext]',
        },
        parser: {
          // dataUrl 的状态
          dataUrlCondition: {
            // 图片最大尺寸
            maxSize: 2 * 1024,
          },
        },
      },
      {
        test: /\.eot|svg|ttf|woff|woff2$/,
        type: 'asset',
        generator: {
          filename: 'fonts/font-[name][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1 * 1024,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
