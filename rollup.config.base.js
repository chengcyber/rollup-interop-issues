import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";

import mod from "module";
const builtinModules = mod.builtinModules;

const BARE_SPECIFIER_REGEX = /^[@\w](?!.*(:\/\/))/;

const config = {
  output: {
    dir: "dist",
    format: "esm",
    exports: "auto",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      window: "undefined",
    }),
    resolve(),
    commonjs({
      transformMixedEsModules: false,
      esmExternal: false,
      requireReturnsDefault: "auto",
    }),
    json(),
    nodePolyfills(),
  ],
  //   external: (id) => {
  //     if (BARE_SPECIFIER_REGEX.test(id) && !builtinModules.includes(id)) {
  //       return true;
  //     }
  //     return false;
  //   },
};
export default config;
