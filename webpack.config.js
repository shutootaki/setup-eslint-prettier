const path = require("path");

module.exports = {
  // 開発用の設定
  mode: "development",
  // エントリーポイントを設定
  entry: "./src/index.tsx",
  // バンドル後のファイルの出力設定
  output: {
    //  ファイルのの出力先のディレクトリを指定する
    path: path.join(__dirname, "dist"),
    // 出力されるファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 「test」で指定した拡張子をコンパイルする
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  // importの際に「extensions」の拡張子を省略する
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
