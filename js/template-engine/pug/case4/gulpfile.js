/**************************************************
 * modules load
 *************************************************/
const { src, dest, watch } = require("gulp");
const fs = require('fs');
const pug = require('gulp-pug');
const data = require('gulp-data');
const rename = require('gulp-rename');

/**************************************************
 * config
 *************************************************/
const template = './src/template.pug';
const jsonPath = './src/data.json';
const destPath = './dest/';

/**************************************************
 * task
 *************************************************/

const generateHtml = done => {
	const json = JSON.parse(fs.readFileSync(jsonPath));

	for (let key of json) {
		src(template)
			.pipe(rename(key.no + ".html"))
			.pipe(data(function (file) {
				return {
					'fileName': file.path.split('/').pop().replace('.html', ''),
					'data': json
				}
			}))
			.pipe(pug({
				pretty: true
			}))
			.pipe(dest(destPath));
	}
	done();
}

exports.pug = generateHtml;