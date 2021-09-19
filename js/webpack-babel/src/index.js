/**
 * /src/index.js
 */
import { test } from './component/test';

const keyName = 'hei';

let params = {
	foo: 'foooooo',
	bar: 'baaaaa',
	baz: 'zzzzzz',
	[keyName]: 'moimoi'
};

test(params);