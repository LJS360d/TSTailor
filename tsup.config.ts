import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/'],
  outDir: 'dist',
  splitting: false,
  sourcemap: false,
  dts: true,
  name: 'tstailor',
  clean: true,
  treeshake: true,
  format: ['cjs'],
  loader: {
    '.json': 'copy',
  },
});
