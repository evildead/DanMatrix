module.exports = {
  entryPoints: ['./src/index.ts'],
  out: './docs/code-documentation-md',
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-missing-exports', 'typedoc-material-theme'],
  themeColor: '#cb9820'
};
