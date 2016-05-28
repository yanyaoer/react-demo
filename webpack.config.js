var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  devtool: 'source-map',
  entry: [
    "./index.js",
    "./index.html",
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  plugins: [
  ],
  module: {
    loaders: [
      { test: /\.(html|png)$/, loader: "file?name=[name].[ext]", },
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
      { test: /\.js$/, exclude: /node_modules/,
        loaders: ["react-hot", "babel"] }
    ],
  },
  devServer: {
    proxy: {
      //hot: true,
      //'/lottery/*': 'http://v2.fm.n.duokanbox.com',
      '/lottery/*': 'http://10.235.137.23:9011',
      //'/lottery/*': {
        ////target: 'http://10.235.137.23:9011',
        //target: 'http://v2.fm.n.duokanbox.com',
        //secure: false,
      //},
    },
  },
}
