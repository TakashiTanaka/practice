Vue.component('my-product', {
	template: `
	<div>
		<button v-on:click="clickHandler">値下げする</button>{{price}}円
	</div>
	`,
	props: ['price'],
	methods: {
		clickHandler() {
			let discount = 0;
			if (this.price - 50 < 500) {
				discount = this.price - 500;
			} else {
				discount = 50;
			}
			this.$emit('child-click', discount);
		}
	}
});