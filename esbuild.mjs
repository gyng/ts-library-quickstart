// @ts-check

import * as esbuild from "esbuild";

const onEndPlugin = {
  name: "on-end",
  setup(build) {
    build.onEnd((result) => {
      console.log(`Build done. Errors: ${result.errors.length}`);
      if (result.errors.length > 0) {
        console.log(result.errors);
      }
    });
  },
};

let ctx = esbuild.context({
  entryPoints: ["src/index.ts"],
  outdir: "lib/esm",
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  format: "esm",
  target: ["esnext"],
  plugins: [onEndPlugin],
});

// Build esm
esbuild
  .build(ctx)
  .then(() => console.log("ESM build done."))
  .catch(() => process.exit(1));

// Build cjs
esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outdir: "lib/cjs",
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: "node",
    target: ["node18"],
    plugins: [onEndPlugin],
  })
  .then(() => console.log("CJS build done."))
  .catch(() => process.exit(1));

// Dev mode
if (process.env["WATCH"] === "1") {
  await (await ctx).watch();
  console.log("esbuild is watching...");
} else {
  process.exit(0);
}
