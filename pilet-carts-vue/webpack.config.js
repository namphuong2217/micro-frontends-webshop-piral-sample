const extendWebpack = require("piral-svelte/extend-webpack");

const applySvelte = extendWebpack({
  emitCss: false,
  compilerOptions: {
    css: false,
  },
});

module.exports = (config) => {
  config = applySvelte(config);

  // your changes to config

  return config;
};
