// グローバルスコープにフィルターを登録
Vue.filter('number_format', val => val.toLocaleString());

let app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		message2: '',
		pSize: '20px',
		isCapital: true,
		items: [
			{ code: '01', name: '商品名1' },
			{ code: '02', name: '商品名2' },
			{ code: '03', name: '商品名3' },
			{ code: '04', name: '商品名4' },
		],
		price: 2000,
		stock: 10,
		year: (new Date()).getFullYear(),
		year2: (new Date()).getFullYear(),
		show: true,
		show2: true,
		width: window.innerHeight,
		height: window.innerWidth,
		point: { x: 0, y: 0 },
	},
	created() {
		addEventListener('resize', this.resizeHandler);
		addEventListener('mousemove', this.mousemoveHandler);
	},
	beforeDestroy() {
		removeEventListener('resize', this.resizeHandler);
		removeEventListener('mousemove', this.mousemoveHandler);
	},
	methods: {
		now1: () => (new Date()).toLocaleString(),
		onDeleteItem() { this.stock--; },
		resizeHandler(e) {
			this.width = e.target.innerWidth;
			this.height = e.target.innerHeight;
		},
		mousemoveHandler(e) {
			this.point.x = e.clientX;
			this.point.y = e.clientY;
		},
		yearInputHandler(e) {
			this.year2 = e.target.value;
		}
	},
	filters: {
		// ローカルスコープにフィルターを登録
		number_format: val => val.toLocaleString(),
		unit: val => val + '円',
	},
	computed: {
		isUrudoshi: function () {
			if ((this.year % 4 == 0) && (this.year % 100 != 0) ||
				(this.year % 400 == 0)) {
				return true;
			} else {
				return false;
			}
		},
		now2: () => (new Date()).toLocaleString(),
	},
	watch: {
		stock(newStock, oldStock) {
			if (newStock == 0) {
				this.message2 = '売り切れ！';
			}
		}
	}
});