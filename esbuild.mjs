// @ts-check

import * as esbuild from "esbuild";

const onEndPlugin = {
  name: "on-end",
  setup(build) {
    build.onEnd((result) => {
      console.log(`build ended with ${result.errors.length} errors`);
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
});

// Build esm
esbuild.build(ctx).catch(() => process.exit(1));

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
  })
  .catch(() => process.exit(1));

// Dev mode
if (process.env["WATCH"] === "1") {
  await (await ctx).watch();
  console.log("esbuild is watching...");
} else {
  process.exit(0);
}
