module.exports = {
  entryPoints: ['./src/index.ts'],
  out: './docs/code-documentation-html',
  plugin: ['typedoc-plugin-missing-exports', 'typedoc-material-theme'],
  themeColor: '#cb9820'
};
