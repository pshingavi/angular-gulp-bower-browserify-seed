// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');	// To create gulp server task
// plugins to help build builds
var jshint = require('gulp-jshint');	// Check javascript well formedness
var uglify = require('gulp-uglify');	// minify JS
var minifyCSS = require('gulp-minify-css');	// minify css
var rimraf = require('gulp-rimraf');	// rimraf to clean build folder completely (if few files are to be deleted install gulp-rimraf)
var browserify = require('gulp-browserify');	// Browserify angular modules and tool for compiling node-flavored commonjs modules for the browser
var concat = require('gulp-concat');	// Used to concatinate the browserify js files to a single file


// Static variables
var jsCheckSources = ['./app/**/*.js', '!./app/bower_components/**'];
var buildFolder = './builds/prod/';
var cssMinifyFileSources = ['./app/**/*.css', '!./app/bower_components/**'];
var allBowerComponents = './app/bower_components/**';
var buildBowerComponentsFolder = buildFolder + 'bower_components/';
var allHTMLFiles = './app/**/*.html';
var angularModuleFile = './app/app.js';
var appBundledFileName = 'app-bundled.js';
var appFolder = './app';
var cleanSources = [buildFolder,'./app/app-bundled.js'];



/*
**************************
PRIMARY tasks
**************************
*/

// Default task - Start server with basic checks and serve from ./app folder
gulp.task('default', [ 'browserify-modules', 'js-check', 'connect']);

// Task to start server on build folder configured
gulp.task('build', ['js-check', 'css-minify', 'browserify-modules-build-minify', 'copy-html-files', 'copy-bower-components', 'connect-build'])

//'js-minify',

/*
**************************
Server related tasks
**************************
*/
gulp.task('connect', function () {
	connect.server({
		root: 'app/',
		port: 8888
	});
});

gulp.task('connect-build', function () {
 	connect.server({
		root: buildFolder,
		port: 9999
	});
});


/*
**************************
BUILD related tasks
**************************
*/

// Task to clean the build folder
gulp.task('clean', function (cb) {
	return gulp.src(cleanSources, { read: false }) // much faster 
    .pipe(rimraf());
});

gulp.task('copy-bower-components', function () {
  gulp.src(allBowerComponents)
    .pipe(gulp.dest(buildBowerComponentsFolder));
});
gulp.task('copy-html-files', function () {
  gulp.src(allHTMLFiles)
    .pipe(gulp.dest(buildFolder));
});

/*
**************************
JS related tasks
**************************
*/

// Task to jshint
gulp.task('js-check', function () {
	gulp.src(jsCheckSources)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

// Task to minify js
gulp.task('js-minify', function() {
  gulp.src(jsCheckSources)
    .pipe(uglify())
    .pipe(gulp.dest(buildFolder))
});

// Task to browserify the angular modules (Combine and keep ready to minify)
gulp.task('browserify-modules', function () {
	gulp.src(angularModuleFile)
		.pipe(browserify({
			insertGlobals : true,
			debug : true
		}))
		.pipe(concat(appBundledFileName))
		.pipe(gulp.dest(appFolder))
});

gulp.task('browserify-modules-build-minify', function () {
	gulp.src(angularModuleFile)
		.pipe(browserify({
			insertGlobals : true,
			debug : true
		}))
		.pipe(concat(appBundledFileName))
		.pipe(uglify())
		.pipe(gulp.dest(buildFolder))
});

/*
**************************
CSS related tasks
**************************
*/

gulp.task('css-minify', function() {
  var opts = {comments:true,spare:true};
  gulp.src(cssMinifyFileSources)
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest(buildFolder))
});