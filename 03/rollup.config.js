import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
/** @type {import('rollup').RollupOptions} */
const options = {
    input: 'src/main.ts',
    output: [{
        file: path.resolve(__dirname, 'dist','bundle.js'),
        format: 'umd'
    }, {
        file:  path.resolve(__dirname, 'dist','bundle.min.js'),
        format: 'umd',
        plugins: [terser()]
    }],
    plugins: [resolve(),commonjs(),typescript()]
};
export default options;