const path = require('path');

module.exports = {
  entry: './src/webpackSrc/game.ts',  
  module: {
    rules: [
      {
        test: /\.ts$/,        
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: require.resolve('Phaser'),
        loader: 'expose-loader',
        options: { exposes: { globalName: 'Phaser', override: true } }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),    
  },
};