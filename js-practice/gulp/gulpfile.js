var gulp = require('gulp');

gulp.task('hello', function () {
	console.log('Hello gulp!');
});

gulp.task('default', ['hello']);