import * as esbuild from 'esbuild';
import options from './esbuild.options.mjs';
import { typecheckPlugin } from '@jgoz/esbuild-plugin-typecheck';

const ctx = await esbuild.context({
    ...options,
    outfile: 'build/index.js',
    plugins: [
        typecheckPlugin({
            watch: true,
            configFile: './tsconfig.typecheck.json',
        }),
    ],
});

console.log('Building...');
await ctx.rebuild();

console.log('Watching...');
await ctx.watch({});
