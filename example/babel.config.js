module.exports = {
  presets: [
    "module:metro-react-native-babel-preset"
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-export-default-from",
      {
        "legacy": true
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        "transform-remove-console"
      ]
    }
  }
};
