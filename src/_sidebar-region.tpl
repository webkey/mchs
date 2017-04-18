<aside class="sidebar sidebar-region region-expand-container-js is-expanded">
	<div class="sidebar__holder">
		@@include('_region-menu-heading.tpl', {
			"headingText": "@@headingText"
		})
		<div class="region-expand-panel-js">
			<div class="region-menu-panel menu-sub-site">
				@@include('_region-menu.tpl', { "regionMenuActiveItem": "@@regionMenuActiveItem", "classKey": "region-menu", "navTag": "" })
			</div>
		</div>
		<div class="sidebar-region-news__heading region-expand-tab-js">
			<h3>Новости дня</h3>
		</div>
		<div class="region-menu-panel">
			<div class="sidebar-region-news__content">
				@@include('_news-links.tpl')
			</div>
		</div>
	</div>
</aside>