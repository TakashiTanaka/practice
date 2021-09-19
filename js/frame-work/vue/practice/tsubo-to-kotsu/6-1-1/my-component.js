let myComponent = {
	// templateは単一のタグで囲まないとだめ
	// <template>タグは使えない
	// ``で囲むとテンプレートの中で改行できるようになる
	template: `
	<p>{{message}}</p>`
	,
	// dataはオブジェクトを返す関数として定義しなきゃだめ！
	data() {
		return {
			message: 'これはローカルスコープのコンポーネントです'
		}
	}
};