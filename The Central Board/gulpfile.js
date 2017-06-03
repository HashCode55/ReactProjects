/**
	* Author:    hashcode55 (Mehul Ahuja)
	* Created:   22.04.2017

	Gulp is for automating the tasks, making your life easier.
**/

var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var winston = require('winston');

// babelify is a brwoserify plugin 
gulp.task('bundle', function() {
	return browserify('src/App.js') // take the file from the source
	.transform('babelify', {presets: 'react'}) // use babelify to transform JSX to JS
	.bundle() // bundle it using browserify so that we can use react 
	.pipe(source('bundle.js')) // finally store this file in the static folder 
	.pipe(gulp.dest('static/')); // tell the destination 
});

// watchify is also a browserify plugin 
// This is similar to what we did with babel 
// but with an extra element of browserify 
// in the pipeline.
gulp.task('watch', function(){
	var b = browserify({
		entries: ['src/App.js'],
		cache: {}, 
		packageCache: {}, 
		plugin: [watchify]
	});

	b.on('update', makeBundle);
	makeBundle();

	function makeBundle(){
		b.transform('babelify', {presets: 'react'})
		.bundle()
		.on('error', function(err){
			console.error(err.message);
			console.error(err.codeFrame);
		})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('static/'));
		console.log("Bundle updated, success!");
	}
	return b;
});

// now you can just do gulp 
gulp.task('default', ['watch']);