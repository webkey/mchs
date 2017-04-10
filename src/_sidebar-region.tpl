<aside class="sidebar sidebar-region">
	<div class="sidebar__holder">
		<div class="sidebar-region-section">
			@@include('_region-menu.tpl', {
				"regionMenuActiveItem": "@@regionMenuActiveItem",
				"regionMenuTitle": "Меню Брестского областного управления"
			})
		</div>
		<div class="sidebar-bottom">
			<div class="sidebar-bottom__holder">
				<div class="sidebar-bottom__frame">
					<div class="sidebar-bottom__heading"><h3>Новости дня</h3>
					</div>
					<div class="sidebar-bottom__content">
						@@include('_news-links.tpl')
					</div>
				</div>
			</div>
		</div>
	</div>
</aside>