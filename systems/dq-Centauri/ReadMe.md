Each package just defines its runtime dependencies and a set of common scripts (The scripts delegate on the symlinked shared task script.)

Config files, by default import the shared config exposed by the tools:
`module.exports = require("_universals/globals/eslint.config.js");`

However, it is easy to extend if needed:
```
const baseConfig = require("_universals/globals/eslint.config.js");;

module.exports = {
  ...baseConfig,
  globals: {
    ...baseConfig.globals,
    anotherGlobal: true,
  },
};
```