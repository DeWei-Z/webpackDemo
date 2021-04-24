const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
      mode: 'development',
      entry: {
        index: './src/index.js',
      },
      
      devtool: 'inline-source-map',
      devServer: {
        contentBase: './dist',
        hot: true,
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
        }),
      ],
    output:{
        filename:'[name].[contenthash].js',
        path:path.resolve(__dirname,'dist'),
        clean:true
    },
    optimization: {
      runtimeChunk: 'single',
      moduleIds: 'deterministic',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
   
}

