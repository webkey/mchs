<!--navigation-->
<!-- @@if(mainNavItemActive === "biography"){current} -->
<!-- @@if(mainNavItemActive === "biography"){ class="current"} -->
<div class="@@classKey-wrap">
	<@@if(context.navTag){nav}@@if(!context.navTag){div} class="@@classKey">
		<ul class="@@classKey__list @@classKey-js">
			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "О министерстве"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "О министерстве", "itemLink": "typography.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Цели и задачи", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Направления деятельности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Международное сотрудничество", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Перечень международных договоров, реализация положений которых входит в компетенцию МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Межгосударственный совет по черезвычайным ситуациям природного и техногенного характера (МГС по ЧС) и Корпус сил СНГ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Наука", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Инновационный фонд МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "ГНТП «Защита от черезвычайных ситуаций»", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "ГПНИ «Информатика и космос, научное обеспечение безопасности и защиты от чрезвычайных ситуаций»", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Государственная программа инновационного развития Республики Беларусь на 2011-20155 гг.", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Государственная программа по преодолению последствий катастрофы на Чернобыльской АЭС на 2011-2015 гг. и на период до 2020", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Образование", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Работа с детьми и молодежью", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "История пожарного дела", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Музей МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Хронология важнейших событий в истории пожарно-спасательной службы Беларуси", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Архивариус", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Фотоматериалы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Спорт", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Руководство", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Руководство МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Биография Министра по ЧС РБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "График приема граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Работа с обращениями граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Процедуры МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Важнейшие мероприятия", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Статистика", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Боевая работа", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Сведенья о ЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Структура"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Структура", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Департаметы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Госпромнадзор", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Госатомнадзор", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Госчернобыль", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Госрезерв", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Областные урправления", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Брестское", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Об управлении", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Руководство", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "График приема граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Районные отделы МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Электронное обращение", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========4==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Форма для обращения граждан в Брестское ОУМЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "форма для обращения юрлица или ИП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========4==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Витебское", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Об управлении", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Руководство", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "График приема граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Районные отделы МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Электронное обращение", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========4==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Форма для обращения граждан в Витебское ОУМЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "форма для обращения юрлица или ИП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========4==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Университеты", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Лицей", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Другие ОПЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "НИИ ПБиЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "РЦСиЭЛВД", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "РЦУРЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "РОФСН", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Авиация МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "ЦУПП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "центральный аппарат МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "СББ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">
				@@include('_nav-LINK.tpl', { "itemText": "Перечень государственных организаций, подчененных МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "ГИМС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Электронное обращение"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Электронное обращение", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "{{Выпадающий список обращений согласно структуре МЧС}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "Электронные обращения Юрлиц и ИП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "{{Выпадающий список обращений согласно структуре МЧС}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Законодательство в сфере деятельности"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Законодательство в сфере деятельности", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "Законы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "{{Список документов}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "НПА перзидента РБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "{{Список документов}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "Постановления Правительства", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "{{Список документов}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "НПА МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Постановления", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Приказы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Формы отчетности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "ТНПА", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "ТКП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "НПБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "ППБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "Проекты ТНПА", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Проекты ТКП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Проекты СТБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Проекты ППБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Проекты ТР ЕЭС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Мультимедийные материалы ОБЖ"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Мультимедийные материалы ОБЖ", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "МЧС - родителям и педагогам", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Аудиосказки для детей по безопасности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

			<li>@@include('_nav-LINK.tpl', { "itemText": "Читаем вместе", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Тушистиковедение", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Сказки Инны Чугай", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Список мультфильмов, рекомендованных МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Раскраски", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "Сценарии мероприятий для детей", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Списки фильмов", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "Аудио", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "По мотивам сказок и фильмов", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

			<li class="has-drop">@@include('_nav-LINK.tpl', { "itemText": "Аудиоролики по безопасности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
			<li>@@include('_nav-LINK.tpl', { "itemText": "Звезды за безопасность", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Социальные ролики", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Обучающие фильмы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Наглядно-изобразительная продукция", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Брэндпакеты", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Методические материалы и игры", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Организациям и предпринимателям"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Организациям и предпринимателям", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Руководителю о пожарной безопасности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Лицензирование и сертификаты", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Оценка средств противопожарной защиты", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Системы мониторинга пожаров", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Расчетные программы для проектировщиков", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Практическое пособие", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Чек-лист", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Часто задаваемые вопросы и отзывы"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Часто задаваемые вопросы и отзывы", "itemLink": "faq.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Вопросы и ответы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Задать вопрос", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Отзывы о работе", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Главное"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Главное", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Новостной раздел", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "СМИ о нас", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Будь готов!", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Живой эфир", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "История одной ЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Колонка «все Новости Портала»", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Самое читаемое"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Самое читаемое", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Сейчас читают", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Материалы предыдущих лет", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="@@if(mainNavItemActive === "Интернет-газета «Спасатель»"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Интернет-газета «Спасатель»", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })
			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="@@if(mainNavItemActive === "Прямые и горячие линии"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Прямые и горячие линии", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })
			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Оперативная информация и новости территориальных управлений"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Оперативная информация и новости территориальных управлений", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Суточные сводки МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Карта неблагоприятных явлений", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Брестской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Витебской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Гомельской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Гродненской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Минска", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Минской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Могилевской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="has-drop@@if(mainNavItemActive === "Новости департаментов"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Новости департаментов", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Госатомнадзора", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Госпромнадзора", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Новости Госчернобыля", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
			<li>@@include('_nav-LINK.tpl', { "itemText": "Госрезерв", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

				@@include('_nav-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="@@if(mainNavItemActive === "Региональные СМИ"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Региональные СМИ", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })
			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="@@if(mainNavItemActive === "Надзорная деятельность"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Надзорная деятельность", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })
			</li>
			<!--@@classKey item end-->

			<!--@@classKey item start-->
			<li class="@@if(mainNavItemActive === "Поиск"){current}">
				@@include('_nav-LINK.tpl', { "itemText": "Поиск", "itemLink": "search.html", "key": "@@classKey", "specialValue": "" })
			</li>
			<!--@@classKey item end-->
		</ul>
	</@@if(context.navTag){nav}@@if(!context.navTag){div}>
</div>
<!--navigation end-->