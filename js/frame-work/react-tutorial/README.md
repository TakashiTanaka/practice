# Reactチュートリアルやってみる

## JSX

- JavaScript構文の拡張
- マークアップとロジックを両方含む、疎結合のコンポーネントという単位で関心を分離する。
- {}でjsの式を埋め込む
- 属性はキャメルケースで書く
- デフォルトでReactDOMはJSXに埋め込まれた値をレンダー前にエスケープする。レンダー前に全てが文字列に変換されるため、XSS攻撃の防止に役立つ
- BabelがJSXをReact.createElement()にコンパイルしてくれている

## 要素のレンダー

- Reactは必要な箇所のみを更新してくれる

## 関数コンポーネント

```JavaScript
// こういうのを関数コンポーネントという
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// ユーザ定義のコンポーネントを使える
const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

- 全てのReactコンポーネントは自己のpropsに対して純粋関数のように振る舞わなければならない！！動的な値はuseStateを使う

- データは下方向に伝わる。下のコンポーネントは上のコンポーネントからpropsを受け取るが、stateを自身でもたない・持つべきでない

## ライフサイクルメソッド（lifecycle method）

- Reactでは最初にDOMが描画されるときをマウント（mounting）と呼ぶ
	- `componentDidMount()`メソッド

- Reactでは最初にDOMが削除されるときをアンマウント（unmounting）と呼ぶ
	- `componentWillUnmount()`メソッド

## Stateのリフトアップ

複数の子要素からデータを集めたい、または 2 つの子コンポーネントに互いにやりとりさせたいと思った場合は、代わりに親コンポーネント内で共有の state を宣言する必要があります。親コンポーネントは props を使うことで子に情報を返すことができます。こうすることで、子コンポーネントが兄弟同士、あるいは親との間で常に同期されるようになります。

## propsの名称

イベントを表すpropsにはon[Event]という名前、イベントを処理するメソッドにはhandle[Event]という名前をつけるのが慣習となっている

## slice

- 配列のコピー`slice(start,end)`
- なぜ、コピーするのか？イミュ―タビリティ（immutability:不変性）を保つため
	- 複雑な機能が簡単に実装できる
	- 変更の検出がしやすい
- イミュータビリティの逆はミューテート（mutate: 書き換え）

## concat

2つ以上の配列を結合するために使用する。これは既存の配列を変更せず、新しい配列を返す

```JavaScript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

```

## 複数のstateを管理

```JavaScript
// 普通にやるとこんな感じになってしまうが
const [title, setTitle] = useState('タイトル');
const [author, setAuthor] = useState('著者名');
const [price, setPrice] = useState(1000);

// まとめた方がシンプル
const [values, setValues] = useState({
	title: 'タイトル',
	author: '著者名',
	price: 1000,
})

// 更新する時は残余引数を用いる
setValues({...values, title: '新しいタイトル'});
```

参考：[ひとつの useState で複数の State を管理する \| 可茂IT塾](https://www.kamo-it.org/blog/26/)

## 動的なリスト構築のためのkey

keyはグローバルに一意である必要はない。コンポーネントとその兄弟間で一意であれば良い。
キーが設定されていない場合`Warning: Each child in a list should have a unique "key" prop.`のような警告がコンソールに表示される

## わからん所

- イベント処理のthisのバインドあたり