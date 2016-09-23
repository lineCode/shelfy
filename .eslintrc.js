module.exports = {
  root: true,
  extends: 'airbnb',

  // required to lint *.vue files
  plugins: [
    'html'
  ],

  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow comma-less tails
    'comma-dangle': 'off',
    // allow semi-colon-less
    'semi': 'off',
    // uncheck importing
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    // allow string concatenation instead of template
    'prefer-template': 'warn'
  },

  'env': {
    'browser': true,
    'node': true
  }
}
