'use strict';

var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), // Подключаем Sass пакет https://github.com/dlmanning/gulp-sass
	// browserSync = require('browser-sync').create(), // Подключаем Browser Sync
	// reload = browserSync.reload,
	concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer'), // Подключаем библиотеку для автоматического добавления префиксов
	sourcemaps = require('gulp-sourcemaps'), // Подключаем Source Map для дебагинга sass-файлов https://github.com/floridoo/gulp-sourcemaps
	fileinclude = require('gulp-file-include'),
	markdown = require('markdown'),
	htmlbeautify = require('gulp-html-beautify'), // Причесываем
	fs = require('fs'), // For compiling modernizr.min.js
	modernizr = require('modernizr'), // For compiling modernizr.min.js
	config = require('./modernizr-config'), // Path to modernizr-config.json
	pathRename = require('gulp-string-replace')
	;
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('include', function () {
	return gulp.src(['src/__*.html'])
	.pipe(fileinclude({
		filters: {
			markdown: markdown.parse
		}
	}))
	.pipe(rename(function (path) {
		path.basename = path.basename.substr(2);
	}))
	.pipe(htmlbeautify({
		"indent_with_tabs": true
	}))
	.pipe(gulp.dest('./src/'));
});

gulp.task('sass', function () { // Создаем таск Sass
	return gulp.src('src/sass/**/*.+(scss|sass)') // Берем источник
		.pipe(sourcemaps.init())
		.pipe(sass({
		outputStyle: 'expanded', // nested (default), expanded, compact, compressed
		indentType: 'tab',
		indentWidth: 1
	}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
	// .pipe(autoprefixer([
	// 	'last 5 versions', '> 1%', 'ie 8', 'ie 7'
	// ], {
	// 	cascade: true
	// })) // Создаем префиксы
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./src/css')) // Выгружаем результата в папку src/css
		.pipe(browserSync.reload({
			stream: true
		})); // Обновляем CSS на странице при изменении
});

gulp.task('mergeCssLibs', function () {
	return gulp.src([
		'src/css/temp/*.css',
		'src/libs/magnific-popup/dist/magnific-popup.css'
	]) // Выбираем файл для минификации
	.pipe(concatCss("src/css/libs.css", {
		rebaseUrls: false
	}))
	.pipe(gulp.dest('./'))
	.pipe(cssnano()) // Сжимаем
	.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	.pipe(gulp.dest('./')); // Выгружаем в папку src/css
});

gulp.task( 'modernizr', function (done) { // Создаем кастомный modernizr
	modernizr.build(config, function(code) {
		fs.writeFile('src/js/modernizr.min.js', code, done);
	});
});

gulp.task('copyLibsScriptsToJs', ['copyJqueryToJs'], function () {
	return gulp.src([
		'src/libs/device.js/lib/device.min.js',
		'src/libs/jquery-smartresize/jquery.debouncedresize.js',
		'src/libs/jquery-placeholder/jquery.placeholder.min.js',
		'src/libs/magnific-popup/dist/jquery.magnific-popup.js',
		'src/libs/slick-carousel/slick/slick.min.js',
		'src/libs/matchHeight/dist/jquery.matchHeight-min.js',
		'src/libs/masonry/dist/masonry.pkgd.min.js  '
	])
	.pipe(concat('libs.js')) // Собираем их в кучу в новом файле libs.min.js
	.pipe(gulp.dest('src/js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify()) // Сжимаем JS файл
	.pipe(gulp.dest('src/js')); // Выгружаем в папку src/js
});

gulp.task('copyJqueryToJs', function () {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
	])
	.pipe(gulp.dest('src/js'));
});

gulp.task('browser-sync', function (done) { // Создаем таск browser-sync
	browserSync.init({
		server: {
			baseDir: "./src"
		},
		notify: false // Отключаем уведомления
	});
	browserSync.watch(['src/*.html', 'src/js/**/*.js']).on("change", browserSync.reload);
	done();
});

// gulp.task('watch', ['modernizr', 'include', 'scripts', 'devBuild', 'browser-sync', 'sass', 'css-libs'], function () {
gulp.task('watch', ['modernizr', 'browser-sync', 'include', 'sass', 'mergeCssLibs', 'copyLibsScriptsToJs'], function () {
	gulp.watch(['src/*.tpl', 'src/__*.html'], ['include']); // Наблюдение за tpl файлами в папке include
	gulp.watch('src/sass/**/*.+(scss|sass)', ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('copyImgToDist', function () {
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin({ // Сжимаем их с наилучшими настройками с учетом кеширования
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		optimizationLevel: 7, //степень сжатия от 0 до 7
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('clean', function () {
	return del.sync('dist/*'); // Удаляем папку dist перед сборкой
});

gulp.task('build', ['clean', 'copyImgToDist', 'sass', 'mergeCssLibs', 'modernizr', 'copyLibsScriptsToJs'], function () {

	gulp.src([ // Переносим библиотеки в продакшен
		'src/css/main.css',
		'src/css/libs.min.css'
	])
	.pipe(gulp.dest('dist/css'));

	gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('dist/fonts'));

	gulp.src('src/js/**/*.js') // Переносим скрипты в продакшен
		.pipe(gulp.dest('dist/js'));

	gulp.src(['!src/__*.html', 'src/*.html']) // Переносим HTML в продакшен
		.pipe(gulp.dest('dist'));

});

gulp.task('clear', function () { // Создаем такс для очистки кэша
	return cache.clearAll();
});

gulp.task('default', ['watch']); // Назначаем таск watch дефолтным

