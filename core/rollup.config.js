import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import banner from 'bannerjs';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.unpkg,
        format: 'umd',
        exports: 'default',
        name: 'Watermark',
        banner: banner.multibanner(),
        sourcemap: true,
      },
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'default',
        name: 'Watermark',
        banner: banner.onebanner(),
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'default',
        name: 'Watermark',
        banner: banner.onebanner(),
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: 'dist',
          declarationDir: '.',
        },
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.unpkg.replace(/.js$/, '.min.js'),
        format: 'umd',
        exports: 'default',
        name: 'Watermark',
        banner: banner.onebanner(),
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: 'dist',
          declarationDir: '.',
        },
      }),
      terser({}),
    ],
  },
];
