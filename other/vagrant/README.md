# Vagrant入門
Vagrantとは仮想マシンを立ち上げるツール
[Vagrant by HashiCorp](https://www.vagrantup.com/)

## 基本的な手順
- virtualBox、vagrantのインストール
	[Downloads – Oracle VM VirtualBox](https://www.virtualbox.org/wiki/Downloads)
	`brew install vagrant`
- 仮想マシンの立ち上げ
	1. boxの取得（仮想マシンのテンプレート）
		- boxのカタログから取得したいboxを選ぶ
			[Discover Vagrant Boxes \- Vagrant Cloud](https://app.vagrantup.com/boxes/search)
		- `vagrant add boxの名前`でboxを取得。
		- `vagrant box list`で現在あるboxを確認できる
		- `vagrant box remove`でboxを削除
		- `vagrant box -h`で使えるコマンドを一覧
		- boxのファイル自体は`ls ~/.vagrant.d/boxes`で確認できる
	1. 仮想マシンを初期化
		- 一つのテンプレートで複数の仮想マシンを立ち上げることができるため、必ずしもテンプレートと仮想マシンが一対一の関係ではないことに注意
		- 仮想マシンごとにディレクトリを作る
		- 作ったディレクトリ内で`vagrant init boxの名前`で初期化。Vagrantfileが生成される
	1. 仮想マシンを起動
		- Vagrantfileがあるディレクトリで`vagrant up`とすると、立ち上がる。.vagrantというディレクトリが生成される
		- virtualBoxを起動して、無事に立ち上がっているか確認する
	1. 使えるコマンド
		```
		状態を見る
		vagrant status

		スリープ
		vagrant suspend

		スリープから復旧
		vagrant resume

		終了
		vagrant halt

		起動
		vagrant up

		再起動
		vagrant reload

		バーチャルマシン自体を削除
		※vagrantfile自体は削除されない
		vagrant destroy
		```
- 仮想マシンにSSH接続してWebサーバーを立ち上げる
	- `vagrant ssh`とするとssh接続をしてくれて、vagrantユーザーとして仮想マシンの中に入って操作できる
	- `sudo yum -y install httpd`でwebサーバーをインストールする
	- `sudo service httpd start`でサーバーを立ち上げる
	- `sudo chkconfig httpd on`で再起動しても立ち上がるように設定
	- `sudo service iptables stop`でファイアーウォールを切ってしまう
	- `sudo chkconfig iptables off`で再起動したときもファイアーウォールが立ち上がらないように変更
	- `cd /var/www/html`で移動
	- `sudo vi index.html`でhtmlファイルを作成、適当に内容を作る
	- `cat index.html`で書き込まれているか確認
	- `exit`で仮想マシンから出られる
	- `vi Vagrantfile`でネットワークの設定をする
		- `config.vm.network "private_network", ip: "192.168.33.10"`の行のコメントアウトを外す
	- `vagrant reload`で仮想マシンを再起動
	- 再起動したら`192.168.33.10`にアクセスしてみて、無事にhtmlが表示されるか確認する
- 共有フォルダを設定する
	共有フォルダを設定しておくと、ホストOSから仮想マシンのファイルを編集できるようになる
	- ssh接続して、`cd /vagrant`のち`ls`すると、`Vagrantfile`が表示される。ここで`touch index.html`とすると、ホストOS側の立ち上げ元のディレクトリにもindex.htmlが生成され、リンクしていることがわかる
		- 上記のようになるはずだったがなぜか同期されなかったので、virtualBoxをアップデートする（6.1.22 -> 6.1.26）。それでもだめだった。
		- 下記リンクを参考にvagrant-vbguestをインストールする。コマンドは`vagrant plugin install vagrant-vbguest`
			[VagrantでVirtual Box上に作ったゲストマシン（CentOS）の共有フォルダが同期しない \- Qiita](https://qiita.com/flyingbarbarian/items/e2fec6d28e95f6627759)
		- また、ホストOS側のVagrantfileの設定を`config.vm.synced_folder ".", "/vagrant", type: "virtualbox"`のようにする。これでもだめ
		-	`vagrant up`としても、`umount: /mnt: not mounted.`みたいなエラーが出てるので、これを解決したら良いのかと疑う。下記の記事を参考にsshでログインした上で、`sudo yum update -y`とする。完了したら`exit`して、`vagrant reload`する。これで無事に同期されるようになった。
			[【解決方法】Vagrantを起動した際に発生するumount: /mnt: not mounted\.の対処について \| とあるクリエイターのエンジニアブログ](https://t-cr.jp/memo/396179c094e32b3de)
- webページを表示する
	- apacheのデフォルトのドキュメントルートは`/var/www/html`なのでそこにindex.htmlを入れ、`192.168.33.10`にアクセスするとwebページを見れる
	- しかし、ssh接続してviで編集するのは面倒なので、ホストOSで編集した内容が表示されるようにしたい
	- そのため現状ホストOSとリンクしている`/vagrant`ディレクトリと`/var/www/html`ディレクトリをシンボリックリンクで繋ぐ。
	- 一旦、`sudo rm -rf /var/www/html`で現状のファイルを削除。また、この時htmlディレクトリ自体も削除する事に注意する
	- `sudo ln -fs /vagrant /var/www/html`でシンボリックリンクを貼る
	- これで無事に表示されるかと思ったが、だめだった。下記サイトを参考にSELinuxを無効にすると無事に表示された
		[ApacheのドキュメントルートをVagrantの共有フォルダにすると403 Forbiddenになる \| Fire Sign Blog](https://blog.fire-sign.info/552/)
- provisioningを使う
	provisioningとは、vagrant upしたあとに自動的に実行される一連の処理のこと。色々自動化させたい事を設定する
	- Vagrantfile内に`config.vm.provision :shell, :inline => "echo hello world"`と記述してみる
	- これを書いた上でupするとecho hello worldが実行されていることがわかる。また、`vagrant provision`でも実行できる
	- また、`config.vm.provision :shell, :path => "provision.sh"`とし、provision.shファイルを作ってそこにシェルスクリプトを書くと、それを実行してくれる。provision.shの中に下記のようにかいて実行すると、apacheサーバーが自動的に立ち上がるようになる
		```
		sudo yum -y install httpd
		sudo service httpd start
		sudo chkconfig httpd on
		```