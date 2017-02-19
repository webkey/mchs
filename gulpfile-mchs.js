'use strict';

var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), // Подключаем Sass пакет https://github.com/dlmanning/gulp-sass
	sassVariables = require('gulp-sass-variables'),
	concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename') // Подключаем библиотеку для переименования файлов
	;

gulp.task('css', function () {
	return gulp.src([
		'src/libs/slick-carousel/slick/slick-theme.scss',
		'src/libs/slick-carousel/slick/slick.scss'
	])
	.pipe(sassVariables({
		'$slick-font-path': '../fonts/slick/'
	}))
	.pipe(sass())
	.pipe(concatCss("src/css/libs.css", {
		rebaseUrls: false
	}))
	.pipe(gulp.dest('./'))
	.pipe(cssnano()) // Сжимаем
	.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	.pipe(gulp.dest('./')); // Выгружаем в папку src/css
});

gulp.task('build', function () {

	var slickFiles = gulp.src([
		'src/libs/slick-carousel/slick/fonts/*'
	])
	.pipe(gulp.dest('src/fonts/slick'));

});