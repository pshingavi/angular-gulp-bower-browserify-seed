// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');

gulp.task('connect', function () {
	connect.server({
		root: 'app/',
		port: 8888
	});
});

gulp.task('default', ['connect']);