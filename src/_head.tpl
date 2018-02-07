<!DOCTYPE html>
<!--[if lt IE 9]>      <html class="no-js old-ie" lang="ru"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie9" lang="ru"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="ru"> <!--<![endif]-->
<head>
	<meta charset="UTF-8">
	<title>@@title</title>
	<!--Mobile optimized-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0">
	<!--Theme color-->
	<meta name="theme-color" content="#006ab8">
	<!--SEO-->
	<meta name="description" content="описание">
	<meta name="keywords" content="ключевые слова">
	<meta name="yandex-verification" content="XXXXXXXXXXXXXX">
	<meta name="google-site-verification" content="XXXXXXXXXXXXXX">
	<!--The Open Graph protocol-->
	<meta property="og:type" content="МЧС">
	<meta property="og:locale" content="ru_RU">
	<meta property="og:url" content="mchs.by">
	<meta property="og:title" content="МЧС">
	<meta property="og:image" content="mchs.by/img/logo.png">
	<meta property="og:description" content="Портал Министерства по чрезвычайным ситуациям Республики Беларусь">
	<meta property="og:site_name" content="Министерство по чрезвычайным ситуациям Республики Беларусь">
	<!--Favicon-->
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="icon" sizes="16x16 32x32 64x64" href="favicon.ico">
	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<!--Style-->
	<link rel="stylesheet" href="css/libs.min.css">
	<link rel="stylesheet" href="css/main.css">
	@@if(context.depCss) {
	<link rel="stylesheet" href="css/@@depCss">
	}
	<!--Modernizr-->
	<script src="js/modernizr.min.js"></script>
	<script>
		var cssPath = 'css/';
		var fileInputObj = {
			// title: '222 Кликните по полю или перетащите сюда файл',
			title: 'Кликните по полю, чтобы добавить файл',
			caption: {
				button: "Выберите файлы",
				feedback: "Выберите файлы для загрузки",
				feedback2: "Файлы выбраны",
				drop: "Перетащите файлы в это поле для загрузки",
				removeConfirmation: "Вы уверены, что хотите удалить этот файл?",
				errors: {
					filesLimit: "1111111 Максиальное количество файлов: {{fi-limit}}",
					filesType: "Загружать можно только изображения!",
					filesSize: "{{fi-name}} слишком велик! Пожалуйста, загрузите файл до {{fi-maxSize}} MB.",
					filesSizeAll: "Файлы, которые Вы выбрали слишком велики! Пожалуйста, загружайте файлы до {{fi-maxSize}} MB."
				}
			}
		};
	</script>
</head>
<body @@if (pageClass !== "") {class="@@pageClass"}>
<noscript><div class="no-js-warning">Для корректной работы сайта <b>включите JavaScript</b> в браузере</div></noscript>
<!--[if lt IE 9]> <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p> <![endif]-->
<!-- >>> head.tpl END <<< -->