# Prog-8でrailsのチュートリアル

## プロジェクトの作成
- `rails new app_name`のようにコマンド実行する
- `rails s`でサーバーを起動する
<br>

## コントローラとルーティングを自動生成する
- `rails g controller home top`
<br>

## ページが表示されるまでの流れ
- ルーティング->コントローラ->ビュー
	- ビューとは
		- ページの見た目を作る（xxx.html.erb）
		- 拡張子のerbとはembedded ruby（埋め込みrubyの意味）
			`<% %>`で囲うとrubyのコードが書ける。表示したい場合は`<%= %>`とする。`<% %>`は表示されないので変数の定義などに使う
<br>
	- コントローラとは
		- ブラウザに返すビューをviewsフォルダの中から見つけ出す役割。
		- アクションはコントローラと同じ名前のビューフォルダから、アクションと同じ名前のerbファイルを探してブラウザに返す
		- 目的に合わせて作成する（投稿に関してはPostsControllerを作るなど）
		- 変数はビューでも定義できるが、アクションで定義するのが一般的
		- アクションで変数定義するときは変数名の接頭辞に@をつける。また、利用側でも@をつける
		- アクション内で変数が定義されていない場合、そのビューでは変数が利用できないので`@変数名 = モデル名.new`などでインスタンス化する必要がある（例：`@post = Post.new`など）例えば、renderメソッドで変数を渡したい時にこういう処理をしたりする。
<br>

	- ルーティングとは
		- 送信されたurlに対して、どのコントローラのどのアクションで処理をするかを決める対応表のこと
		- ルーティングはconfig/routers.rbに定義される
			`get "URL" => "コントローラー名#アクション名`
			ルーティングに記述していないurlにアクセスするとエラーとなる
		- また、DBに変更を加えるときは`post "URL" => "コントローラー名#アクション名`とする
		- ルート"/"に対応するルーティング
			routes.rbで`get "/" => "home#top"`とすると、homeコントローラのtopアクションが実行される
		- ルーティングのurl部分に:を用いると`posts/:id`のように書ける。このようにすると、`/posts/xx`のような全てのurlが該当するようになる。また、このようなルーティングは`posts/index`よりも前にかかないと、先に合致してしまうので`posts/index`よりも下に書くようにする
<br>

## CSS
CSSファイルはapp/assets/stylesheetsに入っている。rails generate controller homeコマンドを実行した時にhome.scssが自動生成されている
<br>

## 画像
publicフォルダに配置しておくことで`/img.jpg`のように画像名を指定するだけで画像を表示することができる
<br>

## マイグレーションファイル
- DBに変更を指示するためのファイル。
- マイグレーションファイルのみを作成する場合は`rails g migration ファイル名`
- migrationファイル内のchangeメソッドの中に変更内容を記述する
	- カラムを追加したい場合
		`add_column :テーブル名, :カラム名, :データ型`
	- カラムを削除したい場合
		`remove_column :テーブル名, :カラム名, :データ型`
- モデルとマイグレーションファイルを作成するには`rails g model Post content:text`という感じで作成する。Postはモデル名。contentカラムにtextデータ型が入ることを意味している。こちらの場合はマイグレーションファイルにchangeメソッドが自動的に生成される
- また、`rails g model`コマンドでPostモデルが定義されたpost.rbがapp/modelsフォルダに作成される。ApplicationRecordクラスを継承しているクラスをモデルという
- db/migrateフォルダに作成される
- DBに変更を反映するには`rails db:migrate`を実行。コマンドを実行するマイグレーションファイルに書いてある指示通りにテーブルを作成してくれる。id,created_at,updated_atカラムが自動生成される
- id
	- DBに保存される時の数字が自動で入る。重複しない
- created_at, upadated_at
	- DBに保存された時刻、データ更新時の時刻が入る
<br>

## rails console
- コンソールを起動することができる。quitで終了。変数を定義することもできる
<br>

## テーブルにデータを追加
- newメソッドでPostモデル（作ったモデル）のインスタンスを作成し、postsテーブル（作ったテーブル）に保存する。
- rails consoleで`post = Post.new(content: "Hello world")`（contentがHello worldであるPostインスタンスを作成）
- post.saveでインスタンスをテーブルに保存。saveメソッドが使えるのはPostモデルがApplicationRecordを継承しているため。また、saveメソッドは失敗した時にfalse,成功した時にtrueを返す。これを利用して、コントローラで下記のような処理ができたりする
```
if post.save
	trueだった時の処理
else
	falseだった時の処理
end
```
- saveメソッドが失敗した場合、エラーメッセージが生成される。`@post.errors.full_messages`の中にエラー内容が配列で入る
<br>

## テーブルからデータを取り出す（Postの所は適宜作成したモデル名に読み替え）
- `post = Post.first`で最初のデータを取り出すことができる。その後、`post.content`とすることで`Post.first`で取得したデータから投稿内容を取り出すことができる
- `posts = Post.all`とすることで全てのデータを取得できる（配列として取得）。また、`Post.all[0].content`とすることで投稿内容を個別に取得できる
<br>

## テーブルから取得したデータをビューに反映する
コントローラ内で`@posts = Post.all`とすることで`@posts`にテーブルのデータが代入される
<br>

## 共通のレイアウトをまとめる
- views/layouts/application.html.erbに共通のhtmlを書いておく。（headやbodyなど）
- `<%= yield %>`内に各ビューの内容が代入される
<br>

## link_toメソッド
- Aboutページのリンクの場合、`<%= link_to("About", "/about") %>`のように書く
- aタグを作成することができる第一引数は表示する文字、第二引数はurl。
- また、postとして定義しているルーティングにマッチさせたい場合は第三引数に`{method: "post"}`を指定する。（忘れがち）
- link_toメソッドはデフォルトではgetのルーティングを探す
<br>

## find_byメソッド
- 特定のidの投稿を取得するメソッド
- `モデル名.find_by(カラム名: 値)`で取得することができる
<br>

## urlからidを取得する
- コントローラのアクション内ではルーティングで設定したurlの`:id`の値を取得できる。その値はparamsという変数にハッシュとして入っている。`params[:id]`とすることで値を取得できる。`@id = params[:id]`のような感じで変数に代入する
- 例えば、ルーティング内で`get "/posts/:id" => "コントローラー名#アクション名`とした上で、指定したコントローラ内のアクション内で`@post = Post.all.find_by(id: params[:id])`のようにすればurlごとに`@post`に代入できるデータを制御できる
<br>

## フォームの送信
- form_tagメソッドを使うとフォームに入力されたデータを送信することができる（do忘れがち）
	```
	<%= form_tag(送信先のurl) do %> 
		ここにinputするフォームのタグ 
	<% end %>
	```
- また、画像を送信したい場合は第二引数に`{multipart: true}`
- 画像の投稿を受け付けるinputは`<input type="file">`
- パスワードを受け付けるinputは`<input type="password">`
- form_tagはデフォルトでpostのルーティングを探す
<br>

## リダイレクト
- redirect_toメソッドを使う。`redirect_to(url)`
- controllerのアクション内に定義する
<br>

## 投稿をDBに保存する
- 一連の流れ
	1. ユーザーが情報を入力
	2. formからrailsへ値が送られる
	3. rails側で情報をDBに登録する
- textareaやinputタグにname属性を付与する。name属性の値をキーとしたハッシュがrails側に送られる
- 入力されたデータはコントローラのアクション内で受け取ることができる。変数paramsで受け取る（例：name属性名がcontentだった場合 => params[:content]）
- 受け取った値は下記の用にDBに登録する
	```
	// 受け取った入力をPostモデルを使ってDBのcontentカラムに登録
	@post = Post.new(content: params[:content])
	@post.save

	// 複数登録する場合はカンマで区切る
	@user = User.new(name: params[:name], email: params[:email])
	@user.save
	```
<br>

## 変数paramsの使い方
1. `:xx`を使ったルーティングのurlから値を取得する
2. `name="xx"`がついたフォームの入力内容を受け取る
<br>

## orderメソッド
- 投稿を並び替えることができる
- `order（カラム名: 並び替え順序）`
- `:asc`（昇順）か`:desc`（降順）のどちらか
<br>

## 投稿の編集
- 流れ
	- 編集したい投稿を取得 => その投稿のcontentの値を上書き => DBに保存
	- `post = Post.find_by(id: 1)`などで取得
	- `post.content = "新しい値"`とすることで上書きできる
	- `post.save`とすることでDBに保存できる
<br>

## 投稿の削除
- 流れ
	- 編集したい投稿を取得 => destroyメソッドで削除
	- `post = Post.find_by(id: 1)`などで取得
	- `post.destroy`で削除できる
<br>

## 空の投稿を防ぐ（バリデーション）
- バリデーションはモデルで設定する
- `validates :検証するカラム名, {検証する内容}`といった感じで書く
- 例：`validates :content, {presence: true}`（presence: true は空投稿を防ぐオプション）
- 例2：`validates :content, {length: {maximum: 140}}`（length: {maximum: 140}）は最大文字数を設定している
- 例3：`validates :email, {uniqueness: true}`（uniquenessはデータベース内に重複がないかをチェック）

## renderメソッド
- 別のアクションを経由せずに直接ビューに表示することができる
- `render("フォルダ名/ファイル名")`のように表示したいビューを指定
- 例えば、投稿の編集画面=>投稿ボタン=>失敗=>編集画面にリダイレクトといったフローの時にredirect_toメソッドだと編集途中だったテキスト等が消えてしまう。そういう時にrenderを使えば編集途中だったテキストを指定したビューにわたすことができる
<br>

## フラッシュ
- ページに一度だけ表示されるメッセージのこと
- 例えば投稿が完了しました的なメッセージ
- `flash`という変数が用意されている
- `flash[:notice] = "表示したい文字列"`のようにすると、ビュー内で`flash[:notice]`が使えるようになる
<br>

## 画像を投稿する
- 画像をDBに保存するにはファイルを作成する必要がある

### ファイルの作成
- Fileクラスのwriteメソッドを使う
- `File.write(ファイルの場所, ファイルの中身)`
- `File.write("public/sample.txt", "Hello World")`のような感じ
- また、画像データの作成をする場合は`File.binwrite`を使う
	さらに、画像の場合は第二引数に`read`メソッドをつける
- `File.binwrite("public/user_images/#{@user.image_name}",image.read)`のような感じ
<br>

### 画像を保存する
- ファイル名をDBに保存 => publicフォルダに画像を作成
- DBに保存する画像名には拡張子を忘れないようにする
<br>

## ログイン機能
- 基本的な考え方
	1. ユーザーの入力を受け付ける
	1. データベースからユーザーを特定する
		-> 特定できなかった場合はエラー処理
	1. sessionでログイン状態を保持する
<br>

## session
- ブラウザ側で保存され、以降のアクセスでsessionの値をrailsに送信する
- `session[:キー名] = 値`で代入する
<br>

## ログアウト機能
- ログイン時に作成したsessionの値を削除すれば良い
- `session[:キー名] = nil`
<br>

## ルーティングのgetとpostの使い分け
- get
	- データベースを変更しない場合
- post
	- データベースを変更する場合
	- sessionの値を変更する場合
<br>

## before_action
- 各コントローラの全アクションで共通する処理がある場合に使う。
- アクションが呼び出される際に必ずbefore_actionの処理が実行されるようになる
- `before_action :全アクションで共通する処理`という感じで書く（コロンを忘れないようにする）
- また`only`を用いて各コントローラでbefore_actionを使うことで、指定したアクションでのみ、そのメソッドを実行できる。（例：`{only:[:edit, :update]}`のような感じで指定する）
<br>

## applicationコントローラ
- 全てのコントローラで共通する処理はapplicationコントローラにまとめる
<br>

## アクセス制限
- ログインしたユーザーの情報を保持した変数`@current_userなど`の中身がnilかどうかで判定
- その中で処理を書く

## パスワードの扱い方
- ハッシュ化
- bcryptをインストール（ハッシュ化するためのgem）
- `has_secure_password`メソッドを使う。パスワードを扱うモデル（例：Userモデルなど）に追加すると、自動的にパスワードをハッシュ化してくれる
- また、has_secure_passwordは自動的にpasswordが存在するかチェックしてくれるため、validatesのpresence: trueは消しちゃっても大丈夫
- `has_secure_password`は`password_digest`カラムに保存する（カラムは自分で作る）
- しかし、ロジック部分において、`password_digest`カラムに保存するには`password`カラムに値を代入する記述でok
- `has_secure_password`メソッドを有効にすると`authenticate`メソッドが使えるようになる。渡された引数をハッシュ化して、`password_digest`カラムの値と一致するかどうかを判定してくれる（例：`@user.authenticate(params[:password])`みたいな感じで使える）
<br>

## gemとは
- rubyやrailsでよく使う機能をパッケージしたもの（jsでいうnpm的なもの）
- Gemfileを編集することでインストールしたいパッケージとかを指定する
- `gem 'gemの名前'`という感じで指定する
- `gem 'gemの名前', 'バージョン'`という感じでバージョンも指定できる。バージョンを指定しない場合は最新版がインストールされる
- ターミナルで`bundle install`コマンドを実行すると書かれたgemをインストールできる
<br>

## 気になる単語
- transaction/トランザクション