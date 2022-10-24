const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var glob = require("glob")

// options is optional
const pages =glob.sync("pages/*.ts")


module.exports = {
  entry: pages.reduce((config, page) => {
 
    config[page] =path.resolve(__dirname,page) ;
    return config;
  }, {}),
  devtool: 'inline-source-map',

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean:true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          filename: `${path.parse(page).name}.html`,
          chunks: [page],
        })
    ),
    // <- here goes array(s) of other plugins
  ),

};
