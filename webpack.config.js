import path from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.ELEVENTY_ENV === "development";

const baseFilename = isDev ? "main" : "main.[contenthash]";

export default {
  entry: [
    path.resolve(__dirname, "src", "js", "main.js"),
    path.resolve(__dirname, "src", "css", "main.css"),
  ],
  output: {
    path: path.resolve(__dirname, "public", "assets"),
    filename: `${baseFilename}.js`,
  },

  optimization: {
    minimize: !isDev,
    minimizer: [new TerserPlugin({ parallel: true })],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },

  plugins: [
    new WebpackManifestPlugin({ publicPath: "/assets/" }),
    new MiniCssExtractPlugin({ filename: `${baseFilename}.css` }),
  ],
};
