module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "googleappsscript/googleappsscript": true,
  },
  plugins: ["googleappsscript"],
  extends: ["airbnb-base", "eslint:recommended", "prettier"],
  parserOptions: {
    allowForLoopAfterthoughts: true,
    ecmaVersion: "latest",
    properties: "always",
    ignoreGlobals: true,
    ignoreDestructuring: true,
    ignoreImports: true,
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-use-before-define': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-continue': 'off',
  },
};
