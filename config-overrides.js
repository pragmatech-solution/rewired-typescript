const { override } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");

module.exports = override(
  addLessLoader({
    cssLoaderOptions: {
      sourceMap: true,
      modules: {
        localIdentName: "[hash:base64:8]",
        exportLocalsConvention: "camelCase",
      },
    },
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "black",
        },
      },
    },
  })
);
