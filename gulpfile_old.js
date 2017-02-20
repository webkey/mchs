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

gulp.task('include', function (done) {
	gulp.src(['src/__*.html'])
		.pipe(fileinclude({
			filters: {
				markdown: markdown.parse
			}
			// prefix: '@@',
			// basepath: '@file'
		}))
		.pipe(rename(function (path) {
			path.basename = path.basename.substr(2);
			// path.extname = ".html";
		}))
		.pipe(htmlbeautify({
			"indent_with_tabs": true
		}))
		.pipe(gulp.dest('dev/'));
	done();
});

gulp.task('sass', function (done) { // Создаем таск Sass
	gulp.src('src/sass/**/*.+(scss|sass)') // Берем источник
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
		.pipe(gulp.dest('dev/css')) // Выгружаем результата в папку src/css
		.pipe(browserSync.reload({
			stream: true
		})); // Обновляем CSS на странице при изменении
	done();
});

gulp.task('css-libs', function (done) {
	gulp.src([
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
	done();
});

gulp.task('scripts', ['jquery'], function (done) {
	gulp.src([
		'src/libs/device.js/lib/device.min.js',
		'src/libs/jquery-smartresize/jquery.debouncedresize.js',
		'src/libs/jquery-placeholder/jquery.placeholder.min.js',
		'src/libs/magnific-popup/dist/jquery.magnific-popup.js',
		'src/libs/slick-carousel/slick/slick.min.js',
		'src/libs/matchHeight/dist/jquery.matchHeight-min.js',
		'src/libs/masonry/dist/masonry.pkgd.min.js  '
	])
		.pipe(concat('libs.js')) // Собираем их в кучу в новом файле libs.min.js
		//.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('src/js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/js')); // Выгружаем в папку src/js
	done();
});

gulp.task('copyJsToDev', function (done) {
	var copy = gulp.src('src/js/**/*.js')
	.pipe(gulp.dest('dev/js'));
	// done();
	return copy;
});

gulp.task('copyCssToDev', function (done) {
	var copy = gulp.src('src/css/**/*.css')
	.pipe(gulp.dest('dev/css'));
	// done();
	return copy;
});

gulp.task('copyImgToDev', function (done) {
	var copy = gulp.src('src/img/**/*')
	.pipe(gulp.dest('dev/img'));
	// done();
	return copy;
});

gulp.task('copyFontsToDev', function (done) {
	var copy = gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dev/fonts'));
	// done();
	return copy;
});

gulp.task('jquery', function (done) {
	gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
	])
	.pipe(gulp.dest('src/js')); // Выгружаем в папку src/js
	done();
});

gulp.task( 'modernizr', function (done) { // Создаем кастомный modernizr
	modernizr.build(config, function(code) {
		fs.writeFile('src/js/modernizr.min.js', code, done);
	});
});

gulp.task('browser-sync', function (done) { // Создаем таск browser-sync
	browserSync.init({
		server: {
			baseDir: "./dev"
		},
		notify: false // Отключаем уведомления
	});
	// browserSync({
	// 	server: { // Определяем параметры сервера
	// 		baseDir: './dev' // Директория для сервера - dev
	// 	},
	// 	notify: false // Отключаем уведомления
	// });
	done();
});

// gulp.task('watch', ['modernizr', 'browser-sync', 'include', 'css-libs', 'scripts', 'devBuild'], function () {
// gulp.task('watch', function () {
gulp.task('watch', ['modernizr', 'include', 'scripts', 'devBuild', 'browser-sync', 'sass', 'css-libs'], function () {
	gulp.watch(['src/*.tpl', 'src/__*.html'], ['include']); // Наблюдение за tpl файлами в папке include
	gulp.watch('src/sass/**/*.+(scss|sass)', ['sass']); // Наблюдение за sass файлами в папке sass
	gulp.watch('src/*.html', ['include', reload]); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('src/js/**/*.js', ['copyJsToDev']); // Наблюдение за JS файлами в папке js
	// gulp.watch("./**/*.html").on("change", reload);
	browserSync.watch(['./dev/*.html', './dev/js/**/*.js'], ['dev-watch']);
});

gulp.task('dev-watch', function (done) {
	browserSync.reload();
	done();
});

gulp.task('img', function () {
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

gulp.task('cleanDev', function (done) {
	del.sync('dev/*');
	done();
});

// gulp.task('devBuild', ['cleanDev', 'sass', 'copyJsToDev'], function () {
gulp.task('devBuild', ['cleanDev', 'copyImgToDev', 'copyJsToDev', 'copyCssToDev', 'copyFontsToDev'], function (done) {
	var copy = gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dev/fonts'));
	// done();
	return copy;
});

gulp.task('build', ['clean', 'img', 'css-libs', 'scripts'], function () {

	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'src/css/main.css',
		'src/css/libs.min.css'
	])
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('src/js/**/*.js') // Переносим скрипты в продакшен
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src(['!src/__*.html','src/*.html']) // Переносим HTML в продакшен
		.pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']); // Назначаем таск watch дефолтным
// gulp.task(
// 	'default',
// 	// gulp.series('build', gulp.parallel('browser-sync', 'watch', 'karma-watch'))
// 	gulp.series(['browser-sync', 'modernizr', 'include', 'sass', 'css-libs', 'scripts', 'devBuild', 'watch'])
// );