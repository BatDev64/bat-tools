import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  minify: !options.watch,
  outExtension({ format }) {
    return {
      js: `.${format}.js`
    }
  },
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2020',
  treeshake: true,
  /* external: ['chroma-js', 'color-namer'], */
  ...options
}))
