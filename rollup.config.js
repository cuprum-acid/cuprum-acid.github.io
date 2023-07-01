import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js',
    },
    plugins: [
        typescript(),
        nodeResolve({ browser: true }),
        terser(),

    ],
};