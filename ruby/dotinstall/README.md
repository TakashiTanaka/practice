# ドットインストールでRuby入門

- rubyのバージョン管理はrbenv
rbenv versions インストール済みのrubyのバージョンを確認
rbenv install -l インストール可能なバージョンの確認
rbenv install x.x.x バージョンを指定してrubyをインストール 
rbenv rehash
rbenv local x.x.x ディレクトリごとに使用するrubyのバージョンを指定する
.ruby-versionというファイルができてそこに設定情報が記述される
rbenv global x.x.x パソコン全体の共通で使用するrubyのバージョンを指定する
ディレクトリに.ruby-versionがある場合はそちらのバージョンが優先される
参考：[brew upgrade rbenv](https://info-wcn.com/ruby-changeversion-mac/)

ruby -v バージョン確認
irb インタラクティブに操作可能（exitでモード抜ける）
ri コマンドの情報を見れる（例：ri Array）

rubyでは全ての値がオブジェクトになっている