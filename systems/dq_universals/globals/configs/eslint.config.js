module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2020": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 11
  },
  "rules": {
    "allowSingleLine": true,
    "brace-style": [
      "error",
      "allman"
    ],
    "comma-dangle": ["error", "never"],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  }
}