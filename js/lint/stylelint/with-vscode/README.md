# prettierとstylelintをVS Codeで動かす

- ファイル保存時にPrettierが自動整形・stylelintが自動修正・プロパティのアルファベット順にソート
- リアルタイムでstylelintによるエラー通知

## 手順

1. VS Codeの拡張機能「Prettier」と「stylelint」のインストール
2. npmでパッケージをインストール

   ```bash
   npm i -D  stylelint\
   stylelint-scss\
   prettier\
   stylelint-config-prettier\
   stylelint-order\
   stylelint-config-recommended-scss
   ```

3. 設定ファイル（`.stylelintrc.json`）を追加

   ```json
   {
     "extends": ["stylelint-config-recommended-scss", "stylelint-config-prettier"],
     "plugins": ["stylelint-order"],
     "rules": {
       "order/properties-alphabetical-order": true
     }
   }
   ```

4. VS Codeの`settings.json`に設定を追加（ワークスペースの設定にした方が良いと思う）

   ```json
   {
     "editor.formatOnSave": true,
     "css.validate": false,
     "scss.validate": false,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.codeActionsOnSave": {
       "source.fixAll.stylelint": true
     }
   }
   ```

## 参考

[stylelintの導入とVS Codeの設定の方法 \- Qiita](https://qiita.com/y-w/items/bd7f11013fe34b69f0df)
