// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const esbuild = require("esbuild");

// Build esm
esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outdir: "lib/esm",
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: "esm",
    target: ["esnext"],
    watch: process.env["WATCH"] === "1",
  })
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
    target: ["node12"],
    watch: process.env["WATCH"] === "1",
  })
  .catch(() => process.exit(1));
