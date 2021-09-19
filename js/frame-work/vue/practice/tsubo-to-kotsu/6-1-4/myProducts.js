Vue.component('my-product', {
	template: `
	<div>
		<button>値下げする</button>{{price}}円
	</div>
	`,
	props: ['price'],
});