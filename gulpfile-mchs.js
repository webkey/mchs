'use strict';

var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), // Подключаем Sass пакет https://github.com/dlmanning/gulp-sass
	sassVariables = require('gulp-sass-variables'),
	replace = require('gulp-string-replace')
	;

gulp.task('changePath', function () {
	// SLICK GALLERY
	gulp.src([
		'src/libs/slick-carousel/slick/slick-theme.scss',
		'src/libs/slick-carousel/slick/slick.scss'
	])
	.pipe(sassVariables({
		'$slick-font-path': '../fonts/slick/',
		'$slick-loader-path': '../img/'
	}))
	.pipe(sass())
	.pipe(gulp.dest('src/css/temp')); // Выгружаем в папку src/css

	// FOTORAMA
	gulp.src([
		'src/libs/fotorama/fotorama.css'
	])
		.pipe(replace('fotorama@2x.png', '../img/fotorama/fotorama@2x.png'))
		.pipe(replace('fotorama.png', '../img/fotorama/fotorama.png'))
		.pipe(gulp.dest('src/css/temp')); // Выгружаем в папку src/css
});

gulp.task('copyFilesFromLibs', function () {

	// SLICK GALLERY
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

	// LIGHTGALLERY
	// add fonts for lightgallery
	gulp.src([
		'src/libs/lightgallery/dist/fonts/**/*'
	])
		.pipe(gulp.dest('src/fonts'));

	// add images and icons for lightgallery
	gulp.src([
		'src/libs/lightgallery/dist/img/**/*'
	])
		.pipe(gulp.dest('src/img'));

	// FOTORAMA
	// add images and icons for fotorama
	gulp.src([
		'src/libs/fotorama/**/*.png'
	])
		.pipe(gulp.dest('src/img/fotorama'));

});

gulp.task('targetLibs', ['changePath', 'copyFilesFromLibs']); // Назначаем таск watch дефолтным