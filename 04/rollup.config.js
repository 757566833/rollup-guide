import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json'
/** @type {import('rollup').RollupOptions} */
const options = {
    input: 'src/main.ts',
    output: [{
        file: path.resolve(__dirname, pkg.main),
        format: 'cjs'
    }, {
        file:  path.resolve(__dirname,  pkg.module),
        format: 'es',
    }, {
        file:  path.resolve(__dirname,  pkg.unpkg),
        format: 'umd',
        name:'demo',
        plugins: [terser()]
    }],
    plugins: [resolve(),commonjs(),typescript()]
};
export default options;