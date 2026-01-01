module.exports = {
  entryPoints: ['./src/index.ts'],
  out: './docs/codedocumentation-md',
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-missing-exports', 'typedoc-material-theme'],
  readme: 'none',
  themeColor: '#cb9820'
};
