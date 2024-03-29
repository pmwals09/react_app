/* eslint-disable no-param-reassign */
module.exports = {
  webpack: {
    configure(config) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };

      config.optimization.runtimeChunk = false;

      // Renames main.00455bcf.js to main.js
      config.output.filename = "static/js/[name].js";

      // Renames main.b100e6da.css to main.css
      config.plugins[4].options.filename = "static/css/[name].css";
      config.plugins[4].options.moduleFilename = () => "static/css/main.css";

      return config;
    },
  },
};
