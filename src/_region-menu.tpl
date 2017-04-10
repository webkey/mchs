<!--navigation-->
<!-- @@if(regionMenuActiveItem === "biography"){ current} -->
<!-- @@if(regionMenuActiveItem === "biography"){ class="current"} -->
<div class="region-menu-heading expand-tab-js is-expanded">
	<div class="region-menu-btn"><i>&nbsp;</i></div>
	<div class="region-menu-heading-text">@@regionMenuTitle</div>
</div>
<div class="region-menu-panel expand-panel-js">
	<div class="region-menu">
		<ul class="region-menu__list region-menu-js">
			<!--region-menu item start-->
			<li class="has-drop current@@if(regionMenuActiveItem === "Новости"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Новости", "itemLink": "typography.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Цели и задачи", "itemLink": "#", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Направления деятельности", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Международное сотрудничество", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Перечень международных договоров, реализация положений которых входит в компетенцию МЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Межгосударственный совет по черезвычайным ситуациям природного и техногенного характера (МГС по ЧС) и Корпус сил СНГ", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Наука", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Инновационный фонд МЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "ГНТП «Защита от черезвычайных ситуаций»", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "ГПНИ «Информатика и космос, научное обеспечение безопасности и защиты от чрезвычайных ситуаций»", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Государственная программа инновационного развития Республики Беларусь на 2011-20155 гг.", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Государственная программа по преодолению последствий катастрофы на Чернобыльской АЭС на 2011-2015 гг. и на период до 2020", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Образование", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Работа с детьми и молодежью", "itemLink": "#", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "История пожарного дела", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Музей МЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Хронология важнейших событий в истории пожарно-спасательной службы Беларуси", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Архивариус", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Фотоматериалы", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Спорт", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Руководство", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Руководство МЧС", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Биография Министра по ЧС РБ", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "График приема граждан", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "#", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Работа с обращениями граждан", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Процедуры МЧС", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Важнейшие мероприятия", "itemLink": "#", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Статистика", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Боевая работа", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Сведенья о ЧС", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "Руководство"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Руководство", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Департаметы", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госпромнадзор", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госатомнадзор", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госчернобыль", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госрезерв", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Областные урправления", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Брестское", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Об управлении", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Руководство", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "График приема граждан", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Районные отделы МЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "#", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Электронное обращение", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-4_FOUR.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Форма для обращения граждан в Брестское ОУМЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "форма для обращения юрлица или ИП", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-4_FOUR.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Витебское", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Об управлении", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Руководство", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "График приема граждан", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Районные отделы МЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Административные процедуры и дебюрократизация", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "#", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Электронное обращение", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-4_FOUR.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Форма для обращения граждан в Витебское ОУМЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "форма для обращения юрлица или ИП", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-4_FOUR.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Университеты", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Лицей", "itemLink": "#", "specialValue": "" })</li>
			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Другие ОПЧС", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "НИИ ПБиЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "РЦСиЭЛВД", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "РЦУРЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "РОФСН", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Авиация МЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "ЦУПП", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "центральный аппарат МЧС", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "СББ", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li class="has-drop">
				@@include('_region-menu-LINK.tpl', { "itemText": "Перечень государственных организаций, подчененных МЧС", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "ГИМС", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "Об управлении"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Об управлении", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Выпадающий список обращений согласно структуре МЧС}}", "itemLink": "#", "specialValue": "" })</li>
			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Электронные обращения Юрлиц и ИП", "itemLink": "#", "specialValue": "" })

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Выпадающий список обращений согласно структуре МЧС}}", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "История"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "История", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Законы", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Список документов}}", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "НПА перзидента РБ", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Список документов}}", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Постановления Правительства", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "{{Список документов}}", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "НПА МЧС", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Постановления", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Приказы", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Формы отчетности", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "ТНПА", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "ТКП", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "НПБ", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "ППБ", "itemLink": "#", "specialValue": "" })</li>

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Проекты ТНПА", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Проекты ТКП", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Проекты СТБ", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Проекты ППБ", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Проекты ТР ЕЭС", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "Важно знать!"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Важно знать!", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "МЧС - родителям и педагогам", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Аудиосказки для детей по безопасности", "itemLink": "#", "specialValue": "" })</li>

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Читаем вместе", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Тушистиковедение", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Сказки Инны Чугай", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Список мультфильмов, рекомендованных МЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Раскраски", "itemLink": "#", "specialValue": "" })</li>

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Сценарии мероприятий для детей", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Списки фильмов", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Аудио", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "По мотивам сказок и фильмов", "itemLink": "#", "specialValue": "" })</li>

			<li class="has-drop">@@include('_region-menu-LINK.tpl', { "itemText": "Аудиоролики по безопасности", "itemLink": "#", "specialValue": "" })
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "start": "1"})
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Звезды за безопасность", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Социальные ролики", "itemLink": "#", "specialValue": "" })</li>
				@@include('_region-menu-drop-wrap-3_THREE.tpl', { "end": "1"})

				@@include('_region-menu-drop-wrap-2_TWO.tpl', { "end": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Обучающие фильмы", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Наглядно-изобразительная продукция", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Брэндпакеты", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Методические материалы и игры", "itemLink": "#", "specialValue": "" })</li>

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "Международные проекты"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Международные проекты", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Руководителю о пожарной безопасности", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Лицензирование и сертификаты", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Оценка средств противопожарной защиты", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Системы мониторинга пожаров", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Расчетные программы для проектировщиков", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Практическое пособие", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Чек-лист", "itemLink": "#", "specialValue": "" })</li>

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "УМ ЧС в лицах"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "УМ ЧС в лицах", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Вопросы и ответы", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Задать вопрос", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Отзывы о работе", "itemLink": "#", "specialValue": "" })</li>

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "Дебюрократизация"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Дебюрократизация", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новостной раздел", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "СМИ о нас", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Будь готов!", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Живой эфир", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "История одной ЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Колонка «все Новости Портала»", "itemLink": "#", "specialValue": "" })</li>

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "График приёма граждан"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "График приёма граждан", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Самое читаемое", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Материалы предыдущих лет", "itemLink": "#", "specialValue": "" })</li>

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="@@if(regionMenuActiveItem === "Подразделения"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Подразделения", "itemLink": "404.html", "specialValue": "" })
			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="@@if(regionMenuActiveItem === "Одно окно"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Одно окно", "itemLink": "404.html", "specialValue": "" })
			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "Контактная информация"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Контактная информация", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Суточные сводки МЧС", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Карта неблагоприятных явлений", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Брестской области", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Витебской области", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Гомельской области", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Гродненской области", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Минска", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Минской области", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Могилевской области", "itemLink": "#", "specialValue": "" })</li>

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="has-drop@@if(regionMenuActiveItem === "Платные услуги"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Платные услуги", "itemLink": "404.html", "specialValue": "" })

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "start": "1"})

			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Госатомнадзора", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Госпромнадзора", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Новости Госчернобыля", "itemLink": "#", "specialValue": "" })</li>
			<li>@@include('_region-menu-LINK.tpl', { "itemText": "Госрезерв", "itemLink": "#", "specialValue": "" })</li>

				@@include('_region-menu-drop-wrap-1_ONE.tpl', { "end": "1"})

			</li>
			<!--region-menu item end-->

			<!--region-menu item start-->
			<li class="@@if(regionMenuActiveItem === "Электронные обращения"){ current}">
				@@include('_region-menu-LINK.tpl', { "itemText": "Электронные обращения", "itemLink": "404.html", "specialValue": "" })
			</li>
			<!--region-menu item end-->
		</ul>
	</div>
</div>

<!--navigation end-->