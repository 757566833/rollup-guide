import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json'
/** @type {import('rollup').RollupOptions} */
const options = {
    input: 'src/main.tsx',
    output: [{
        file: path.resolve(__dirname, pkg.main),
        format: 'cjs'
    }, {
        file:  path.resolve(__dirname,  pkg.module),
        format: 'es',
    }],
    external:['react'],
    plugins: [resolve(),commonjs(),typescript()]
};
export default options;