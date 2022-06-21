# GitHub Actionsのテスト

case1 とりあえずチュートリアル

[Git Hub Actions入門](https://zenn.dev/hashito/articles/7c292f966c0b59)

case2 pushでbuild

create-react-appで作ったReactアプリをbuildするアクションを作りたい
nodejsを使えるようにactions/stepup-node@xxを使う
buildしただけじゃだめで、デプロイしなきゃだめ（GitHub PagesとかFTPとか）
SECRETがよくわからん

reactのアセットの読み込みパスがルートになってるけど、GitHub Pagesだとサブディレクトリがルートになるので、
crossenvとかでビルド時にルート変えなきゃだめ
[cross\-env PUBLIC\_URL=/<リポジトリ名>](https://www.sukerou.com/2022/03/github-pages-react.html?m=1)

成功!!

参考

[Github Actions で node 環境をセットアップ](https://zenn.dev/rena_h/scraps/6d520f2f3e6ba2)

[peaceiris/actions\-gh\-pages: GitHub Actions for GitHub Pages 🚀 Deploy static files and publish your site easily\. Static\-Site\-Generators\-friendly\.](https://github.com/peaceiris/actions-gh-pages)

case3 pushでftpデプロイ

参考

[github actionsを用いたFTP自動デプロイ。（例：さくらサーバー）](https://zenn.dev/hirof1990/articles/2f8eeab56b8637)

てか、GitHub Pagesで独自ドメイン使えるのか

[GitHub Pagesに独自ドメインを設定する方法](https://zenn.dev/donchan922/articles/59c54fe659128294bb65)

