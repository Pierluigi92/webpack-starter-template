import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    filename: "js/[name].[contenthash].js",
    chunkFilename: "js/[name].[contenthash].chunk.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name].[hash][ext][query]",
    clean: true,
  },
  cache: {
    type: "filesystem",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|avif|woff2?)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // Inline fino a 8 KB
          },
        },
      },
    ],
  },
};
