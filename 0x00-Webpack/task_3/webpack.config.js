const path = require("path");
const ClenWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    header: {
             import: path.resolve(__dirname, "./modules/header/header.js"),
              dependOn: "shared",
            },
    body: {
          import: path.resolve(__dirname, "./modules/body/body.js"),
          dependOn: "shared",
          },
    footer: {
           import: path.resolve(__dirname, "./modules/footer/footer.js"),
            dependOn: "shared", 
          },
        shared: "jquery",
        },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },

optimization :{
  splitChunks: {
      chunks: 'all',
  },
},

performance: {
    maxAssetSize: 1000000,
  },
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:icn|gif|png|jpe?g|svg)$/i,
        type: "asset/resource",
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "task_3 webpack.config.js",
      filename: "index.html",
      inject: "body",
    }),
    new ClenWebpackPlugin.CleanWebpackPlugin(),
  ],

  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 8564,
    open: true,
  },

};