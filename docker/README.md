# Dockerのテスト

## 基本

- サーバーを立ち上げる
  - Dockerfileを編集する

    ```yml
    RUN yum install -y httpd
    ADD ./index.html /var/www/html
    EXPOSE 80
    CMD [ "/usr/sbin/httpd", "-D", "FOREGROUND"]
    ```

	- これで`sudo docker build -t image名 .`でbuildして、`sudo docker run -p 8080:80 -d image名`とする。

	- `http://localhost:8080/`にアクセスすると、無事表示されるはず

- imageをDocker Hubにpushする
	- docker indexにsign upする