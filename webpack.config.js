const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, "./script/main.js"),
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
  },
  module: {
    rules: [
      // SCSS ALL EXCEPT MODULES
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "icss",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // --------
      // SCSS MODULES
      {
        test: /\.module\.scss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
