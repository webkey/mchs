<aside class="sidebar">
	<div class="sidebar__holder">
		<div class="sidebar-top">
			<ul class="sidebar-menu">
				@@loop('_sidebar-menu-item.tpl', [
					{
						"text": "Главные новости МЧС",
						"active": true
					},
					{
						"text": "Интерактивная карта",
						"active": false
					},
					{
						"text": "Департаменты",
						"active": false
					},
					{
						"text": "Региональные управления",
						"active": false
					},
					{
						"text": "Другие проекты",
						"active": false
					}
				])
			</ul>
		</div>
		<div class="sidebar-bottom">
			<div class="sidebar-bottom__holder">
				<div class="sidebar-bottom__frame">
					<h3>Новости дня</h3>
					<div class="news-links">
						@@loop('_news-links.tpl', [
							{ "text": "Женщина получила ожоги отдыхая под Витебском.",
								"meta": "Витебск, 11:30"
							}, { "text": "В Островецком районе работники МЧС спасли тонувшего мужчину.",
								"meta": "Гродно, 11:30"
							}, { "text": "Самые читаемые материалы сайта МЧС за 2016 год.",
								"meta": "Гомель, 10:30"
							}, { "text": "В Островецком районе работники МЧС спасли тонувшего мужчину.",
								"meta": "Гродно, 11:30"
							}, { "text": "Женщина получила ожоги отдыхая под Витебском.",
								"meta": "Витебск, 11:30"
							}, { "text": "В Островецком районе работники МЧС спасли тонувшего мужчину.",
								"meta": "Гродно, 11:30"
							}, { "text": "Самые читаемые материалы сайта МЧС за 2016 год.",
								"meta": "Гомель, 10:30"
							}, { "text": "В Островецком районе работники МЧС спасли тонувшего мужчину.",
								"meta": "Гродно, 11:30"
							}, { "text": "Женщина получила ожоги отдыхая под Витебском.",
								"meta": "Витебск, 11:30"
							}, { "text": "В Островецком районе работники МЧС спасли тонувшего мужчину.",
								"meta": "Гродно, 11:30"
							}, { "text": "Самые читаемые материалы сайта МЧС за 2016 год.",
								"meta": "Гомель, 10:30"
							}, { "text": "В Островецком районе работники МЧС спасли тонувшего мужчину.",
								"meta": "Гродно, 11:30"
							}
						])
					</div>
				</div>
			</div>
		</div>
	</div>
</aside>