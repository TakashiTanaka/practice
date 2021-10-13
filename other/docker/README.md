# Dockerのテスト
Dockerとは仮想化環境を構築するツール
Build once, run anywhere

[test3 本を参考にしながらdocker-composeを作成](./test3/docker-compose.yml)

## 基本
docker-compose.ymlの作成
.envの作成
マウントするディレクトリの作成
カレントディレクトリに移動してコマンドで実行する（docker-compose up -d）
環境を停止する場合（docker-compose stop）
停止後に起動する場合（docker-compose up か docker-compose start）
環境を削除する場合（docker-compose down）

- `docker search 検索したいimage名`でImageを検索
	例：`docker search centos`
- `docker pull pullしたいimage名`でimageをpull
	例：`docker pull centos`
- `docker images`で取得しているimageを一覧
- `docker inspect 設定を見たいimage名`でimageの設定を見る
- `sudo docker rmi 削除したいimage名`でimageを削除
- `sudo docker run 起動したいimage名 コマンド`でcontainerを起動。-dオプションをつけるとバックグランドで起動できる
	例：`sudo docker run centos echo "hello world"`
- `sudo docker ps`で起動中のcontainerを一覧。オプションの-aをつけると、containerの履歴が見れる
- `sudo docker rm ID頭から三桁`でcontainerを削除
- `sudo docker logs ID頭から三桁`でlogを見ることができる
- `sudo docker attach --sig-proxy=false ID頭から三桁`でフォアグラウンドに切り替えられる（Ctrl + Cで抜ける）
- `sudo docker stop ID頭から三桁`か`sudo docker kill ID頭から三桁`で停止
- `sudo docker start ID頭から三桁`で再開
- Dockerfileを作成する
	```
	FROM centos
	LABEL maintainer "Myname <xxxx@gmail.com>"
	# RUN: buildするときに実行されるもの
	RUN echo "now building..."
	# CMD: runするときに実行されるもの
	CMD ["echo", "now running..."]
	```
- `sudo docker build -t 新しいimageの名前 .`
- さきほど作ったimageを起動する`sudo docker run imageの名前`
- サーバーを立ち上げる
	- Dockerfileを編集する
		```
		RUN yum install -y httpd
		ADD ./index.html /var/www/html
		EXPOSE 80
		CMD [ "/usr/sbin/httpd", "-D", "FOREGROUND"]
		```
	- これで`sudo docker build -t image名 .`でbuildして、`sudo docker run -p 8080:80 -d image名`とする。
	- `http://localhost:8080/`にアクセスすると、無事表示されるはず
- imageをDocker Hubにpushする
	- docker indexにsign upする

## 個人的にハマったポイント
- dockerコマンドとdocker-composeコマンドは別物

- Dockerfileとdocker-compose.ymlの役割は違うこと
	Dockerfileはイメージを作るもの
	docker-composeはコンテナと周辺環境（コンテナ・ネットワーク・ボリューム）を作るもの
	
- イメージとコンテナの違い
	イメージはクッキーの型。コンテナはその型からできたクッキーみたいなもの。
	クッキーを捨てても。型があるのですぐに作りなおせる。
	
- コンテナを破棄するとデータが消える
	→ ボリュームをバインドすれば大丈夫

## 参考サイト
[簡単便利！DockerでWordpressの開発環境を作ろう。方法＆メリット紹介 \- Workship MAGAZINE\(ワークシップマガジン\)](https://goworkship.com/magazine/wordpress-docker/)
test1はこの方法でやってみた
[\#01 Dockerとはなにか？ \| Docker入門 \- プログラミングならドットインストール](https://dotinstall.com/lessons/basic_docker/27701)

## 参考書籍
[仕組みと使い方がわかる Docker＆Kubernetesのきほんのきほん \(Compass Booksシリーズ\) \| 小笠原 種高 \| コンピュータ・IT \| Kindleストア \| Amazon](https://www.amazon.co.jp/dp/B08T961HKP/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)
