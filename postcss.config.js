module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    plugins: [require("tailwindcss")],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
