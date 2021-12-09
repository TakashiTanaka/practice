const TARGET = document.getElementById('test')

const removeScript = () => {
	document.getElementById('script').remove();
}

const createScript = src => {
	let script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = src;
	script.id = 'script';
	return script;
};

document.getElementById('first').addEventListener('click', () => {
	removeScript();
	document.body.appendChild(createScript('./first.js'));
});

document.getElementById('second').addEventListener('click', () => {
	removeScript();
	document.body.appendChild(createScript('./second.js'));
});