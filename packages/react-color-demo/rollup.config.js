import baseConfig from "../../rollup.config.base";

const config = {
  ...baseConfig,
  input: {
    "react-color": require.resolve("react-color"),
  },
};

export default config;
