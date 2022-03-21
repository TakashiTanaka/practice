module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    // ルールを追加
    "rules": {
        "no-var": "error", // varを禁止
        "semi": ["error", "always"], // セミコロンを要求
        "space-before-function-paren": ["error", "never"], // 関数名と()の間はスペース無し
        "space-infix-ops": "error", // 演算子の前後はスペースを要求
        "no-multi-spaces": "error" // 連続したスペースを禁止
    }
}
