# stylelintのテスト（Getting started）

Linting CSS
1. Use npm to install Stylelint and its standard configuration:

npm install --save-dev stylelint stylelint-config-standard

2. Create a .stylelintrc.json configuration file in the root of your project with the following content:

{
  "extends": "stylelint-config-standard"
}
3. Run Stylelint on all the CSS files in your project:

npx stylelint "**/*.css"

[Getting started \| Stylelint](https://stylelint.io/user-guide/get-started)