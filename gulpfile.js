'use strict';

var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), // Подключаем Sass пакет https://github.com/dlmanning/gulp-sass
	browserSync = require('browser-sync').create(), // Подключаем Browser Sync
	reload = browserSync.reload,
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
	replace = require('gulp-string-replace')
	;

gulp.task('htmlCompilation', function () { // Таск формирования ДОМ страниц
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
		"indent_with_tabs": true,
		"max_preserve_newlines": 0
	}))
	.pipe(gulp.dest('./src/'));
});

/// Таск для переноса normalize.css и его минификации
gulp.task('compressNormalizeCss', function () {
	return gulp.src('src/libs/normalize-css/normalize.css')
		.pipe(gulp.dest('src/sass/base/'))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/sass/base/'));
});

gulp.task('sassCompilation', ['compressNormalizeCss'], function () { // Создаем таск для компиляции sass файлов
	return gulp.src('src/sass/**/*.+(scss|sass)') // Берем источник
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded', // nested (default), expanded, compact, compressed
			indentType: 'tab',
			indentWidth: 1,
			precision: 3,
			linefeed: 'lf' // cr, crlf, lf or lfcr
		}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(replace('../../', '../')) /// в css файлах меняем пути к файлам с ../../ на ../
		.pipe(autoprefixer([
			'last 5 versions', '> 1%', 'ie >= 9', 'and_chr >= 2.3' //, 'ie 8', 'ie 7'
		], {
			cascade: true
		})) // Создаем префиксы
		// .pipe(gulp.dest('./src/css')) // Выгружаем результата в папку src/css
		// .pipe(cssnano()) // Сжимаем файл
		// .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./src/css')) // Выгружаем после сжатия в папку src/css
		.pipe(browserSync.reload({
			stream: true
		})); // Обновляем CSS на странице при изменении
});

gulp.task( 'createCustomModernizr', function (done) { // Таск для формирования кастомного modernizr
	modernizr.build(config, function(code) {
		fs.writeFile('src/js/modernizr.min.js', code, done);
	});
});

gulp.task('mergeCssLibs', function () { // Таск для мержа css библиотек
	return gulp.src([
		'src/css/temp/*.css'
		,'src/libs/magnific-popup/dist/magnific-popup.css'
		,'src/libs/priority-nav/dist/priority-nav-core.css'
		,'src/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css'
		,'src/libs/flatpickr/dist/flatpickr.min.css'
		,'src/libs/swiper/dist/css/swiper.min.css'
		,'src/libs/select2/dist/css/select2.min.css'
		,'src/libs/lightgallery/dist/css/lightgallery.min.css'
		,'src/libs/lightgallery/dist/css/lg-fb-comment-box.min.css'
		,'src/libs/lightgallery/dist/css/lg-transitions.min.css'
		,'src/css/temp/fotorama.css' // копируем css с измененными путями к изображениям
	]) // Выбираем файлы для конкатенации
	.pipe(concatCss("src/css/libs.css", {
		rebaseUrls: false
	}))
	.pipe(gulp.dest('./')) // Выгружаем в папку src/css несжатую версию
	.pipe(cssnano()) // Сжимаем
	.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	.pipe(gulp.dest('./')); // Выгружаем в папку src/css сжатую версию
});

gulp.task('copyLibsScriptsToJs', ['copyJqueryToJs'], function () { // Таск для мераж js библиотек
	return gulp.src([
		'src/js/temp/jquery-ui.min.js',
		'src/libs/device.js/lib/device.min.js',
		'src/libs/jquery-smartresize/jquery.debouncedresize.js',
		'src/libs/jquery-placeholder/jquery.placeholder.min.js',
		'src/libs/magnific-popup/dist/jquery.magnific-popup.js',
		'src/libs/slick-carousel/slick/slick.min.js',
		'src/libs/matchHeight/dist/jquery.matchHeight-min.js',
		'src/libs/masonry/dist/masonry.pkgd.min.js',
		'src/libs/priority-nav/dist/priority-nav.min.js',
		'src/libs/gsap/src/minified/TweenMax.min.js',
		'src/libs/gsap/src/minified/plugins/ScrollToPlugin.min.js',
		'src/js/temp/filer.min.js',
		'src/libs/sticky-kit/jquery.sticky-kit.min.js',
		'src/libs/page-scroll-to-id/jquery.malihu.PageScroll2id.js',
		'src/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
		'src/libs/flatpickr/dist/flatpickr.min.js',
		'src/libs/flatpickr/dist/l10n/ru.js',
		'src/js/temp/by.js',
		'src/libs/swiper/dist/js/swiper.min.js',
		'src/libs/select2/dist/js/select2.full.min.js',
		'src/libs/select2/dist/js/i18n/ru.js',
		'src/libs/lightgallery/dist/js/lightgallery.min.js',
		'src/libs/lg-autoplay/dist/lg-autoplay.min.js',
		'src/libs/lg-autoplay/dist/lg-autoplay.min.js',
		'src/libs/lg-fullscreen/dist/lg-fullscreen.min.js',
		'src/libs/lg-hash/dist/lg-hash.min.js',
		'src/libs/lg-pager/dist/lg-pager.min.js',
		'src/libs/lg-share/dist/lg-share.min.js',
		'src/libs/lg-thumbnail/dist/lg-thumbnail.min.js',
		'src/libs/lg-video/dist/lg-video.min.js',
		'src/libs/lg-zoom/dist/lg-zoom.min.js',
		'src/libs/fitvids/jquery.fitvids.js',
		'src/libs/svg.js/dist/svg.min.js',
		'src/libs/fotorama/fotorama.js'
		, 'node_modules/object-fit-images/dist/ofi.min.js' // object-fit fix for a non-support browsers
		, 'src/libs/vanilla-lazyload/dist/lazyload.min.js' // lazyload images

		// вконце добавляем common.js
		// 'src/js/common.js'
	])
	.pipe(concat('libs.js')) // Собираем их в кучу в новом файле libs.min.js
	.pipe(gulp.dest('src/js'))
	.pipe(rename({suffix: '.min'}))// Изменяем имя конечного файла
	// .pipe(rename({basename: 'all.min'}))
	.pipe(uglify()) // Сжимаем JS файл
	.pipe(gulp.dest('src/js')); // Выгружаем в папку src/js
});

gulp.task('minifyCommonJs', function () { // Таск для копирования jquery в js папку
	return gulp.src([
		'src/js/common.js'
	])
	.pipe(rename({suffix: '.min'}))// Изменяем имя конечного файла
	.pipe(uglify()) // Сжимаем JS файл
	.pipe(gulp.dest('src/js'));
});

gulp.task('copyJqueryToJs', function () { // Таск для копирования jquery в js папку
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
	])
	.pipe(gulp.dest('src/js'));
});

gulp.task('browserSync', function (done) { // Таск browserSync
	browserSync.init({
		server: {
			baseDir: "./src"
		},
		notify: false // Отключаем уведомления
	});
	browserSync.watch(['src/*.html', 'src/js/**/*.js', 'src/includes-json/**/*.json']).on("change", browserSync.reload);
	done();
});

gulp.task('watch', ['createCustomModernizr', 'browserSync', 'htmlCompilation', 'sassCompilation', 'mergeCssLibs', 'copyLibsScriptsToJs', 'minifyCommonJs'], function () {
	gulp.watch(['src/*.tpl', 'src/__*.html', 'src/includes-json/**/*.json'], ['htmlCompilation']); // Наблюдение за tpl
	gulp.watch(['src/js/common.js'], ['minifyCommonJs']); // Наблюдение за common.js
	// файлами в папке include
	gulp.watch('src/sass/**/*.+(scss|sass)', ['sassCompilation']); // Наблюдение за sass файлами в папке sass
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

gulp.task('default', ['watch']); // Назначаем таск watch дефолтным

/************************************************************
 * Create Distribution folder and move files to it
 ************************************************************/

gulp.task('build', ['cleanDistFolder', 'htmlCompilation', 'copyImgToDist', 'sassCompilation', 'mergeCssLibs', 'createCustomModernizr', 'copyLibsScriptsToJs', 'minifyCommonJs'], function () {

	gulp.src('src/css/*.css')
	.pipe(gulp.dest('dist/css'));

	gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('dist/fonts'));

	gulp.src(['!src/js/temp/**/*.js', '!src/js/**/temp-*.js', 'src/js/*.js']) // Переносим скрипты в продакшен
		.pipe(gulp.dest('dist/js'));

	gulp.src(['!src/__*.html', 'src/*.html']) // Переносим HTML в продакшен
		.pipe(gulp.dest('dist'));

	gulp.src(['src/*.png', 'src/*.ico', 'src/.htaccess']) // Переносим favicon и др. файлы в продакшин
		.pipe(gulp.dest('dist'));

});

gulp.task('cleanDistFolder', function () {
	return del.sync(['dist/']); // Удаляем папку dist
});

gulp.task('clearCache', function () { // Создаем такс для очистки кэша
	return cache.clearAll();
});