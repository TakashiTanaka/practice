{
	const data = {
		hoge: 'hoooooo',
		fuga: 'gaaaaaa',
		piyo: 'piiiii'
	};

	const { hoge, ...other } = data;

	console.log(hoge, other);
}
const hoge = 'mumumu';