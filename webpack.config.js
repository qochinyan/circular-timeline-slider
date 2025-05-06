const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      // TypeScript
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // SCSS-модули
      {
        test: /\.module\.scss$/,
        use: ["style-loader", "css-loader?modules", "sass-loader"],
      },
      // Обычный SCSS
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // CSS для Swiper
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Шрифты
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
};
