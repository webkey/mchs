<!--region menu-->
<ul class="@@classKey__list @@classKey-js">
	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "Новости"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Новости", "itemLink": "typography.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Цели и задачи", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Направления деятельности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Международное сотрудничество", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Перечень международных договоров, реализация положений которых входит в компетенцию МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Межгосударственный совет по черезвычайным ситуациям природного и техногенного характера (МГС по ЧС) и Корпус сил СНГ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Наука", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Инновационный фонд МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "ГНТП «Защита от черезвычайных ситуаций»", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "ГПНИ «Информатика и космос, научное обеспечение безопасности и защиты от чрезвычайных ситуаций»", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Государственная программа инновационного развития Республики Беларусь на 2011-20155 гг.", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Государственная программа по преодолению последствий катастрофы на Чернобыльской АЭС на 2011-2015 гг. и на период до 2020", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Образование", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Работа с детьми и молодежью", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "История пожарного дела", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Музей МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Хронология важнейших событий в истории пожарно-спасательной службы Беларуси", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Архивариус", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Фотоматериалы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Спорт", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Руководство", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Руководство МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Биография Министра по ЧС РБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "График приема граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Работа с обращениями граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Процедуры МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Важнейшие мероприятия", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Статистика", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Боевая работа", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Сведенья о ЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "Руководство"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Руководство", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Департаметы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госпромнадзор", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госатомнадзор", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госчернобыль", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госрезерв", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Областные урправления", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Брестское", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Об управлении", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Руководство", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "График приема граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Районные отделы МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Электронное обращение", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========4==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Форма для обращения граждан в Брестское ОУМЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "форма для обращения юрлица или ИП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========4==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Витебское", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Об управлении", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Руководство", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "График приема граждан", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Районные отделы МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Электронное обращение", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========4==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Форма для обращения граждан в Витебское ОУМЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "форма для обращения юрлица или ИП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========4==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Университеты", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Лицей", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Другие ОПЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "НИИ ПБиЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "РЦСиЭЛВД", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "РЦУРЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "РОФСН", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Авиация МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "ЦУПП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "центральный аппарат МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "СББ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">
		@@include('_region-menu-LINK.tpl', { "itemText": "Перечень государственных организаций, подчененных МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "ГИМС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "Об управлении"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Об управлении", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Выпадающий список обращений согласно структуре МЧС}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Электронные обращения Юрлиц и ИП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Выпадающий список обращений согласно структуре МЧС}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "История"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "История", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Законы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Список документов}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "НПА перзидента РБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Список документов}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Постановления Правительства", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Список документов}}", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "НПА МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Постановления", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Приказы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Формы отчетности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "ТНПА", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "ТКП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "НПБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "ППБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Проекты ТНПА", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Проекты ТКП", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Проекты СТБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Проекты ППБ", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Проекты ТР ЕЭС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "Важно знать!"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Важно знать!", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "МЧС - родителям и педагогам", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Аудиосказки для детей по безопасности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Читаем вместе", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Тушистиковедение", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Сказки Инны Чугай", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Список мультфильмов, рекомендованных МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Раскраски", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Сценарии мероприятий для детей", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Списки фильмов", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Аудио", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "По мотивам сказок и фильмов", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

	<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Аудиоролики по безопасности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "start": "1", "key": "@@classKey"})
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Звезды за безопасность", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Социальные ролики", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========3==========)", "end": "1", "key": "@@classKey"})

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========2==========)", "end": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Обучающие фильмы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Наглядно-изобразительная продукция", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Брэндпакеты", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Методические материалы и игры", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "Международные проекты"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Международные проекты", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Руководителю о пожарной безопасности", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Лицензирование и сертификаты", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Оценка средств противопожарной защиты", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Системы мониторинга пожаров", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Расчетные программы для проектировщиков", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Практическое пособие", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Чек-лист", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "УМ ЧС в лицах"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "УМ ЧС в лицах", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Вопросы и ответы", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Задать вопрос", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Отзывы о работе", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "Дебюрократизация"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Дебюрократизация", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новостной раздел", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "СМИ о нас", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Будь готов!", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Живой эфир", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "История одной ЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Колонка «все Новости Портала»", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "График приёма граждан"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "График приёма граждан", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Сейчас читают", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Материалы предыдущих лет", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="@@if(regionMenuActiveItem === "Подразделения"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Подразделения", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })
	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="@@if(regionMenuActiveItem === "Одно окно"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Одно окно", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })
	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "Контактная информация"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Суточные сводки МЧС", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Карта неблагоприятных явлений", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Брестской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Витебской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Гомельской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Гродненской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Минска", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Минской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Могилевской области", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="has-drop@@if(regionMenuActiveItem === "Платные услуги"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Платные услуги", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "start": "1", "key": "@@classKey"})

	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Госатомнадзора", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Госпромнадзора", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Госчернобыля", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>
	<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госрезерв", "itemLink": "#", "key": "@@classKey", "specialValue": "" })</li>

		@@include('_region-menu-DROP-WRAP.tpl', { "dropLevel": "(==========1==========)", "end": "1", "key": "@@classKey"})

	</li>
	<!--@@classKey item end-->

	<!--@@classKey item start-->
	<li class="@@if(regionMenuActiveItem === "Электронные обращения"){ current}">
		@@include('_region-menu-LINK.tpl', { "itemText": "Электронные обращения", "itemLink": "404.html", "key": "@@classKey", "specialValue": "" })
	</li>
	<!--@@classKey item end-->
</ul>
<!--region menu end-->