# Gitの練習

ドットインストールで紹介されていた、
Gitの使い方を実践しました。
<br>
参考URL
https://dotinstall.com/lessons/basic_git
<br><br>

## 学んだ事
<br><br>

### コマンド
<br><br>

### git init
現在のディレクトリにgitの設定ファイルを追加する
<br>

#### option
- git init --bare
共有リポジトリとして設定する
<br><br>

### git add
変更があったファイルを作業ディレクトリから、
ステージングエリアに上げる
<br>

#### option
- git add .
現在のディレクトリより下にあるファイルを全部addする

<br><br>

### git commit
ステージングエリアにあるものを、
リポジトリ（ローカル、リモート）に上げる
<br>

#### option
- git commit -m "(message)"
commitする際、コメント内容が短い場合は、
commitコマンドの後に、-m "(message)"とし、
""内にコメントを書くことで、エディタが立ち上げることなく
コミットできる

- git commit -am "(message)"
addとcommitをまとめてできる

- git commit --amend
一度コミットしたが、変更したい箇所があり、
なおかつ、その変更内容も新たにコミットするほどでもない場合は、
commitコマンドの後に、--amendとすると、
新たにコミットする事無く、修正が反映される。
また、--amend時にコメントを編集できる
<br><br>


### git log
コミットされた情報を見る事ができる
<br>

#### option
- git log --oneline
ログを一行でコンパクトに表示

- git log -p
変更された内容の詳細を表示

- git log --stat
どのファイルが何箇所変わったかを表示
<br><br>


### git status
現在の状況を表示
<br><br>

### git diff
ステージングエリアに上がっていないものの
変更箇所を表示
<br>

#### option
- git diff --cached
ステージングエリアに上がっているものの
変更箇所を表示
<br><br>

### git reset
任意のバージョンに戻す事ができる

#### option
- git reset --hard HEAD
コミット後の変更を全部消す

- git reset --hard HEAD^
直前のコミットを取り消す

- git reset --hard ORIG_HEAD
resetを取り消す事ができる
<br><br>

### git branch
ブランチの一覧を表示

#### option
- git branch (branch name)
任意の名前のブランチを作る

- git branch -d (branch name)
不要になったブランチを削除
<br><br>

### git checkout (branch name)
ブランチをチェックアウト

#### option
- git checkout -b (branch name)
ブランチを作成し、そのブランチへ移動
<br><br>

### git merge (branch name)
ファイルを統合できる。
マージさせたい大元のブランチへ行き、
マージさせたい先のブランチ名を入力
<br><br>


### git tag
タグ一覧を表示
<br>

#### option
- git tag (tag name)
直近のコミットに対してタグをつける

- git tag (tag name) (commit id)
特定のコミットに対してタグをつける
commit idは7桁以上をコピペすればOK

- git tag -d (tag name)
タグを削除
<br><br>

### git config --global alias.(alias name) (command name)
コマンドにエイリアス（短縮名）をつける
- git config --global alias.co checkout
- git config --global alias.st status
- git config --global alias.br branch
- git config --global alias.ci commit
<br><br>

### git remote add origin (repos location)
共有リポジトリを登録
<br><br>

### git push origin master
共有リポジトリにプッシュ
<br><br>

### git clone (path) (dir name)
共有リポジトリの内容を複製
<br><br>

### git pull origin master
共有リポジトリの内容をマージ
<br><br><br><br>

### その他
<br><br>

### .gitignore
.gitignore内で指定されたファイルは、
バージョン管理されない
<br><br>

### コンフリクト発生時
1. コンフリクト発生
1. 該当箇所を確認
1. 該当箇所を修正
1. コミット
<br><br>