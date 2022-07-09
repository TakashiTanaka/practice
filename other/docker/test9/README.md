# test8で作ったイメージでコンテナ作成

バインドすると元のファイルが消える・・・

1. `docker run -d --name test -p 8080:80 -v /Users/tanakatakashi/Desktop/Project/practice/other/docker/test9/www:/usr/local/apache2/htdocs test:v1`