# Gitの練習

ドットインストールで紹介されていた、
Gitの使い方を実践しました。  

## 参考URL

https://dotinstall.com/lessons/basic_git  

## 学んだ事  

### コマンド  

### git init

現在のディレクトリにgitの設定ファイルを追加する  

#### option

- git init --bare

共有リポジトリとして設定する  

### git add

変更があったファイルを作業ディレクトリから、
ステージングエリアに上げる  

#### option

- git add .
現在のディレクトリより下にあるファイルを全部addする  

### git commit

ステージングエリアにあるものを、
リポジトリ（ローカル、リモート）に上げる  

#### option

- git commit -m "(message)"
commitする際、コメント内容が短い場合は、
commitコマンドの後に、-m "(message)"とし、
""内にコメントを書くことで、エディターが立ち上げることなく
コミットできる  

- git commit -am "(message)"
addとcommitをまとめてできる  

- git commit --amend
一度コミットしたが、変更したい箇所があり、
なおかつ、その変更内容も新たにコミットするほどでもない場合は、
commitコマンドの後に、--amendとすると、
新たにコミットする事無く、修正が反映される。
また、--amend時にコメントを編集できる  


### git log

コミットされた情報を見る事ができる  

#### option

- git log --oneline
ログを一行でコンパクトに表示  

- git log -p
変更された内容の詳細を表示  

- git log --stat
どのファイルが何箇所変わったかを表示  


### git status

現在の状況を表示  

### git diff

ステージングエリアに上がっていないものの
変更箇所を表示  

#### option

- git diff --cached
ステージングエリアに上がっているものの
変更箇所を表示  

### git reset

任意のバージョンに戻す事ができる  

#### option

- git reset --hard HEAD
コミット後の変更を全部消す  

- git reset --hard HEAD^
直前のコミットを取り消す  

- git reset --hard ORIG_HEAD
resetを取り消す事ができる  

### git branch

ブランチの一覧を表示  

#### option

- git branch (branch name)
任意の名前のブランチを作る  

- git branch -d (branch name)
不要になったブランチを削除  

### git checkout (branch name)

ブランチをチェックアウト  

#### option

- git checkout -b (branch name)
ブランチを作成し、そのブランチへ移動  

### git merge (branch name)

ファイルを統合できる。
マージさせたい大元のブランチへ行き、
マージさせたい先のブランチ名を入力  

### git tag

タグ一覧を表示  

#### option

- git tag (tag name)
直近のコミットに対してタグをつける  

- git tag (tag name) (commit id)
特定のコミットに対してタグをつける
commit idは7桁以上をコピペすればOK  

- git tag -d (tag name)
タグを削除  

### git config --global alias.(alias name) (command name)

コマンドにエイリアス（短縮名）をつける

- git config --global alias.co checkout
- git config --global alias.st status
- git config --global alias.br branch
- git config --global alias.ci commit  

### git remote add origin (repos location)

共有リポジトリを登録  

### git push origin master

共有リポジトリにプッシュ  

### git clone (path) (dir name)

共有リポジトリの内容を複製  

### git pull origin master

共有リポジトリの内容をマージ  

### その他  

### .gitignore

.gitignore内で指定されたファイルは、
バージョン管理されない  

### コンフリクト発生時

1. コンフリクト発生
1. 該当箇所を確認
1. 該当箇所を修正
1. コミット  