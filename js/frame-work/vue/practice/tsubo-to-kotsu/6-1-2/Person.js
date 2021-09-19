let Person = {
	template: `
	<p>私は{{name}}です。年齢は{{age}}です。</p>`
	,
	// dataはオブジェクトを返す関数として定義しなきゃだめ！
	data() {
		return {

		}
	},
	props: ['name', 'age']
};