import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
/** @type {import('rollup').RollupOptions} */
const options = {
    input: 'src/main.js',
    output: [{
        file: path.resolve(__dirname, 'dist','rollup','bundle.js'),
        format: 'cjs'
    }, {
        file:  path.resolve(__dirname, 'dist','rollup','bundle.min.js'),
        format: 'cjs',
        plugins: [terser()]
    }],
    plugins: [resolve(),commonjs()]
};
export default options;