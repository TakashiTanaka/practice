# カスタムしたイメージを作る（失敗例）

3の所でバインドしたフォルダ内でアレコレしてもコンテナの内部のデータは変更されない

1. apacheのイメージを使ってコンテナを作成（バインドマウント）
   `docker run --name apache-test -d -p 8090:80 -v /Users/tanakatakashi/Desktop/Project/practice/other/docker/test7/test:/usr/local/apache2/htdocs httpd`

2. とりあえず`http://localhost:8090/`で表示されるか確認

3. testフォルダ内にindex.htmlを適当に作って入れる

4. commitでイメージ化する
   `docker commit [ID] apache-test`

5. コンテナは削除`docker rm コンテナID`

6. `docker images`でイメージが作られているか確認する

7. 作ったイメージからコンテナを作ってみる
   `docker run --name apache-container -d -p 8090:80 -v /Users/tanakatakashi/Desktop/Project/practice/other/docker/test7/test:/usr/local/apache2/htdocs apache-test`