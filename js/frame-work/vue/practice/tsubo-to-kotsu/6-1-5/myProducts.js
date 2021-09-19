Vue.component('my-product', {
	template: `
	<li>{{id}} {{name}} {{price}}</li>
	`,
	props: ['id', 'name', 'price'],
});