# カスタムしたイメージを作る

Dockerfileとdocker buildで作る

1. Dockerfileを作成

2. `docker build -t test:v1 .`

3. `docker run --name test -p 8080:80 test:v1`