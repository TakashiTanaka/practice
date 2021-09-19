/**************************************************
 * modules load
 *************************************************/
const gulp = require('gulp');
const fs = require('fs');
const pug = require('gulp-pug');
const data = require('gulp-data');
const rename = require('gulp-rename');

/**************************************************
 * config
 *************************************************/
const template = './src/template.pug';
const jsonPath = './src/data.json';
const dest = './dest/';

/**************************************************
 * task
 *************************************************/
gulp.task('pug', (done) => {
	const json = JSON.parse(fs.readFileSync(jsonPath));

	for (let key of json) {
		gulp.src(template)
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
			.pipe(gulp.dest(dest));
	}
	done();
});