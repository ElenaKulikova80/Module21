const path=require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src/js/script.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    mode: 'production',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            //['style-loader', MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            use: [{loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true,
                  }
                },
                'style-loader', 
                'css-loader',
                'sass-loader'],
          },
          {
               test: /\.(eot|ttf|svg)$/,  
               use: [
                {
                  loader: 'file-loader',
                },
              ],              
          },
          {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
          },
        ],
        
    }
}