<aside class="sidebar">
	<div class="sidebar__holder">
		<div class="sidebar-top">
			@@if(context.menu) {
				<ul class="sidebar-menu sidebar-menu-js">
					@@loop('_sidebar-menu-item.tpl', [
						{
							"text": "Главные новости МЧС",
							"active": false,
							"anchor": "#main-new-anchor"
						},
						{
							"text": "Мультимедиа по ОБЖ",
							"active": false,
							"anchor": "#multimedia-anchor"
						},
						{
							"text": "Интерактивная карта",
							"active": false,
							"anchor": "#map-anchor"
						},
						{
							"text": "Другие проекты",
							"active": false,
							"anchor": "#other-projects-anchor"
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
							"text": "Инфомрация",
							"active": false,
							"anchor": "#information-anchor"
						}
					])
				</ul>
			}

		</div>
		<div class="sidebar-bottom">
			<div class="sidebar-bottom__holder">
				<div class="sidebar-bottom__frame">
					<div class="sidebar-bottom__heading"><h3>Новости дня</h3></div>
					<div class="sidebar-bottom__content">
						@@include('_news-links.tpl')
					</div>
				</div>
			</div>
		</div>
	</div>
</aside>