import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import atImport from "postcss-import";

const plugins = [
  atImport,
  autoprefixer,
  postcssPresetEnv({
    stage: 1,
    preserve: true,
    features: {
      "custom-properties": true,
    },
  }),
];

const isDev = process.env.APP_ENV === "development";

if (!isDev) {
  import("cssnano").then(({ default: cssnano }) => {
    plugins.push(
      cssnano({
        preset: "default",
      })
    );
  });
}

export default { plugins };
