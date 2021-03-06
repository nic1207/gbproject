module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-alert': 0,
    'no-console': 'off',
    'object-shorthand': 0,
    'no-extra-semi': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-async-in-computed-properties': 'off',
    'vue/no-side-effects-in-computed-properties': 'off'
  }
}
