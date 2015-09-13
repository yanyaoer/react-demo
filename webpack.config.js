module.exports = {
  context: __dirname + "/app",
  //entry: "./base.js",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [{
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader",
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"],
    }],
  },
}
