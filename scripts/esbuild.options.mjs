export default {
  bundle: true,
  entryPoints: ['src/index.ts'],
  platform: 'node',
  sourcemap: true,
  external: ['pg-native'],
};
