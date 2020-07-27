const baseConfig = require('../../_universals/globals/configs/babel.config.js');

module.exports = {
  ...baseConfig,
  globals: {
    ...baseConfig.globals,
    anotherGlobal: true,
  },
}