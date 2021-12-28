# Laravel8の入門

ドットインストールでLaravelの勉強をしました。

## 参考

<https://dotinstall.com/lessons/basic_laravel_v3>

## 手順

### Dockerで環境を作る

### VScodeの拡張機能を入れる

EditorConfig for VS Code, Laravel Blade Snippets

### Laravelの初期設定

- .envで`APP_PORT=8573`を設定

- config/app.phpで`timezone`を`Asia/Tokyo`に、`locale`を`ja`に変更

- 今回のレッスンで不要なファイルを削除

- アプリケーションの起動

  - `./vendor/bin/sail up -d` で立ち上げる

  - <http://localhost:8573/> にアクセスして確認

  - `./vendor/bin/sail down` でDockerを停止

- 仕組みの確認

  - routes/web.phpでルーティングを設定している

  - viewファイルはresources/viewsの中に入っている

  - Laravelではweb.phpが処理の起点となっている

- スタイリング

- ルーティングからViewにデータを渡す

  - ルーティング内に`$posts`という配列を用意。`return view('index')`に続けて`->with(['posts' => $posts])`と記述する。改行すると見やすい。

  - index.blade.php側で`$posts`という変数で利用可能になった。`dd()`関数でデバッグ用に表示

  - リストに`$posts`の値を埋め込んでいく。phpの記法で書く場合、`<?php htmlspecialchars(変数, ENT_QUOTES, 'UTF-8'); ?>`と書かなきゃいけないけど、blade記法を使うともっと楽にかける。`{{変数}}`とすれば大丈夫

- Bladeのループ処理

  - `@foreach(繰り返し可能なデータ as データ)`と`@endforeach`の間に繰り返したい処理を描く

    ```php
    @foreach ($posts as $post)
        <li>{{$post}}</li>
    @endforeach
    ```

  - データが空の時の処理も書きたい場合、`@forelse(繰り返し可能なデータ as データ)`と`@empty`の間に繰り返したい処理、`@empty`と`@endforelse`の間に空だった時の処理を書く。

    ```php
    @forelse ($posts as $post)
        <li>{{$post}}</li>
    @empty
        <li>No posts</li>
    @endforelse
    ```

- ルーティングの処理をweb.phpに書いていくと処理が多くなったときに見通しが悪くなるので、コントローラーはコマンドで作る`./vendor/bin/sail artisan make:controller PostController`とする。PostControllerの所はどんな名前でも良いけど、単数形を使うのが一般的

- Http/Controllers/PostControllerを編集する

  - web.appの'/'にアクセスした時の処理をPostControllersに移動する。また、その際、functionはpublicに。名前もつける。

  - web.php側では\[]内の第一引数にクラス名、第2引数にメソッド名を渡す

  - また、名前空間付きのクラス名は`use`で予め宣言しておけば簡潔にかける

- 詳細ページを作る

  - views内に詳細ページのviewファイルを作成。ただ、ルーティングに合わせたディレクトリ構成にするのが一般的らしいので、postsディレクトリを作成し、その中に`show.blade.php`を作成する

  - また、ディレクトリの中にviewファイルを入れた場合、コントローラー側も表記を変える`posts.show`とする

- `url()`関数を使ってパスを指定する
  url関数を使うと、publicフォルダをルートとしたパス指定ができる

- ルーティングに名前をつける

  - ルーティングに名前をつけることで、変更や管理がしやすくなる。`web.php`の各ルーティングの後に`->name('ルーティング名')`とすることで名前をつけることができる。

  - view側でルーティングにつけた名前を使用する時は`route()`関数を使う。\()内に名前を入れたらok。引数がある場合は名前の後にカンマで区切って入れれば良い。

    ```php
    <a href="{{route('posts.show', $index)}}">
    ```

- コンポーネントを使う

  - viewsフォルダ内にcomponentsフォルダを作って、その中にlayout.blade.phpを作成する

  - layout.blade.phpは共通部分を記述する。変動したいところは`{{ $slot }}`とする

  - view側でlayout.blade.phpを読み込む。`<x-layout></x-layout>`内に反映させたい内容を入れる。

  - また、タイトルをページごとに変えたいなど、$slot以外の変数名を使いたい場合は、任意の変数を使うことができる

  - view側ではさきほどの`<x-layout>`内に`<x-slot>`というタグを書き、さらに`<x-slot>`のname属性に任意の変数名を入れる。例：layout側で`$title`という変数を入れた場合は、`<x-slot name="title"></x-slot>`とすれば良い。その中に埋め込めたい値を各view内にいれていけばok