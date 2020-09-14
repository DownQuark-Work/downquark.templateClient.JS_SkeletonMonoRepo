const baseConfig = require('../../dq_universals/globals/configs/babel.config.js')

module.exports = {
  ...baseConfig,
  globals: {
    ...baseConfig.globals,
    anotherGlobal: true,
  },
}