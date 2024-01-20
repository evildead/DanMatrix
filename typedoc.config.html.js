module.exports = {
  entryPoints: ['./src/index.ts'],
  out: './docs',
  plugin: ['typedoc-plugin-missing-exports', 'typedoc-material-theme'],
  themeColor: '#cb9820'
};
