'use strict';

var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), // Подключаем Sass пакет https://github.com/dlmanning/gulp-sass
	sassVariables = require('gulp-sass-variables')
	;

gulp.task('changePath', function () {
	return gulp.src([
		'src/libs/slick-carousel/slick/slick-theme.scss',
		'src/libs/slick-carousel/slick/slick.scss'
	])
	.pipe(sassVariables({
		'$slick-font-path': '../fonts/slick/',
		'$slick-loader-path': '../img/'
	}))
	.pipe(sass())
	.pipe(gulp.dest('src/css/temp')); // Выгружаем в папку src/css
});

gulp.task('copyFilesFromLibs', function () {

	// add fonts for slick slider
	gulp.src([
		'src/libs/slick-carousel/slick/fonts/*'
	])
	.pipe(gulp.dest('src/fonts/slick'));

	// add ajax-loader.gif for slick slider
	gulp.src([
		'src/libs/slick-carousel/slick/ajax-loader.gif'
	])
	.pipe(gulp.dest('src/img'));

	// add classList.js for ie 9 and older
	gulp.src([
		'src/libs/classlist/classList.min.js'
	])
	.pipe(gulp.dest('src/js'));

});

gulp.task('targetLibs', ['changePath', 'copyFilesFromLibs']); // Назначаем таск watch дефолтным