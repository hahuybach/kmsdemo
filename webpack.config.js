const path = require("path");

module.exports = {
  //...
  resolve: {
    alias: {
      Views: path.resolve(__dirname, "src/views/"),
      Assets: path.resolve(__dirname, "src/assets/"),
      Services: path.resolve(__dirname, "src/services/"),
      Components: path.resolve(__dirname, "src/components/"),
      Utils: path.resolve(__dirname, "src/utils/"),
    },
  },
};
