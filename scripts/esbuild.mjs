import * as esbuild from 'esbuild';
import options from './esbuild.options.mjs';

await esbuild.build({
    ...options,
    outfile: 'dist/bundle.js',
    minify: true,
});
