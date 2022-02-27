module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
        plugins: ["react-native-figma-squircle"],
        plugins: ["@react-native-masked-view/masked-view"],
        plugins: ["react-native-linear-gradient"],
        plugins: ["react-native-elements"],
        plugins: ["react-native-vector-icons"],
      },
    },
  };
};
