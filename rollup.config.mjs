import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import * as fs from 'node:fs';
import path from 'node:path';

console.log('......................... init process .............................');

const PACKAGE_NAME = process.cwd();
console.info(`PACKAGE =========== ${PACKAGE_NAME}`);

const pkg = JSON.parse(fs.readFileSync(path.join(PACKAGE_NAME, 'package.json'), 'utf8'));


const dtsOpts = {
  plugins: [dts()],
  output: {
    file: pkg.types,
    format: 'es',
  },
};

export default {
  input: `${PACKAGE_NAME}/src/index.ts`,
  external: (id) => !/^[./]/.test(id),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    dts(dtsOpts),
    esbuild(),
  ]
};

