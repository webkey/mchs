<aside class="sidebar">
	<div class="sidebar__holder">
		<div class="sidebar-top">
			<ul class="sidebar-menu sidebar-menu-js">
				@@loop('_sidebar-menu-item.tpl', [
					{
						"text": "Главные новости МЧС",
						"active": false,
						"anchor": "#main-new-anchor"
					},
					{
						"text": "Интерактивная карта",
						"active": false,
						"anchor": "#map-anchor"
					},
					{
						"text": "Департаменты",
						"active": false,
						"anchor": "#branches-anchor"
					},
					{
						"text": "Региональные управления",
						"active": false,
						"anchor": "#regions-anchor"
					},
					{
						"text": "Другие проекты",
						"active": false,
						"anchor": "#other-anchor"
					}
				])
			</ul>
		</div>
		<div class="sidebar-bottom">
			<div class="sidebar-bottom__holder">
				<div class="sidebar-bottom__frame">
					<div class="sidebar-bottom__heading"><h3>Новости дня</h3></div>
					<div class="sidebar-bottom__content">
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
	</div>
</aside>