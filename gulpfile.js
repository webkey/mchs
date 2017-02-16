'use strict';

var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), // Подключаем Sass пакет https://github.com/dlmanning/gulp-sass
	browserSync = require('browser-sync'), // Подключаем Browser Sync
	reload = browserSync.reload,
	concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
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
	config = require('./modernizr-config') // Path to modernizr-config.json
	;

gulp.task('include', function () {
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
		.pipe(gulp.dest('src/'));
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
		.pipe(gulp.dest('src/css')) // Выгружаем результата в папку src/css
		.pipe(browserSync.reload({
			stream: true
		})); // Обновляем CSS на странице при изменении
});

gulp.task('css-libs', ['sass'], function () {
	return gulp.src('src/css/libs.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('src/css')); // Выгружаем в папку src/css
});

gulp.task('scripts', function () {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
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
});

gulp.task( 'modernizr', function (done) { // Создаем кастомный modernizr
	modernizr.build(config, function(code) {
		fs.writeFile('src/js/modernizr.min.js', code, done);
	});
});

gulp.task('browser-sync', function () { // Создаем таск browser-sync
	browserSync({
		server: { // Определяем параметры сервера
			baseDir: 'src' // Директория для сервера - src
		},
		notify: false // Отключаем уведомления
	});

	gulp.watch(['!src/__*.html', 'src/*.html']).on("change", reload);
});

gulp.task('watch', ['modernizr', 'browser-sync', 'include', 'css-libs', 'scripts'], function () {
	gulp.watch(['src/include/', 'src/include/**/*.tpl', 'src/__*.html'], ['include']); // Наблюдение за tpl файлами в папке include
	gulp.watch('src/sass/**/*.+(scss|sass)', ['sass']); // Наблюдение за sass файлами в папке sass
	//gulp.watch('src/*.html', ['include', reload]); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('src/js/**/*.js', reload); // Наблюдение за JS файлами в папке js
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

gulp.task('build', ['clean', 'img', 'css-libs',  'scripts'], function () {

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

gulp.task('clear', function () { // Создаем такс для очистки кэша
	return cache.clearAll();
});