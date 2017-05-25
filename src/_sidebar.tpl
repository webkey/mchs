<aside class="sidebar@@if(context.regionsMenu) { sidebar--region-admin}">
	<div class="sidebar__holder">
		<div class="sidebar-top">
			@@if(context.menu) {
			<div class="sidebar-top__holder">
				<div class="sidebar-menu-wrap sidebar-menu-wrap-js">
					<ul class="sidebar-menu sidebar-menu-js">
						@@loop('_sidebar-menu-item.tpl', './includes-json/sidebar-menu-items.json')
					</ul>
				</div>
			</div>
			} @@if(context.typography) {
			<div class="sidebar-top__holder">
				<div class="sidebar-menu-wrap sidebar-menu-wrap-js">
					<ul class="sidebar-menu">
						@@loop('_sidebar-menu-item.tpl', './includes-json/sidebar-menu-typography-items.json')
					</ul>
				</div>
			</div>
			}
			<div class="sidebar-bottom__heading">
				<a href="#" class="btn-filters-open btn-filters-open-js">
					<span>Открыть фильтр</span>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 308 288.3"> <path d="M9.8,59h32.8v22.9c0,5.4,4.4,9.8,9.8,9.8h72.1c5.4,0,9.8-4.4,9.8-9.8V59h163.9c5.4,0,9.8-4.4,9.8-9.8c0-5.4-4.4-9.8-9.8-9.8  H134.3V9.8c0-5.4-4.4-9.8-9.8-9.8H52.4c-5.4,0-9.8,4.4-9.8,9.8v29.5H9.8c-5.4,0-9.8,4.4-9.8,9.8C0,54.6,4.4,59,9.8,59z M62.3,19.7  h52.4v52.4H62.3V19.7z M298.2,235.9H134.3v-29.5c0-5.4-4.4-9.8-9.8-9.8H52.4c-5.4,0-9.8,4.4-9.8,9.8v29.5H9.8  c-5.4,0-9.8,4.4-9.8,9.8c0,5.4,4.4,9.8,9.8,9.8h32.8v22.9c0,5.4,4.4,9.8,9.8,9.8h72.1c5.4,0,9.8-4.4,9.8-9.8v-22.9h163.8  c5.4,0,9.8-4.4,9.8-9.8C308,240.3,303.6,235.9,298.2,235.9z M114.7,268.7H62.3v-52.4h52.4V268.7z M298.2,137.9h-32.8v-29.5  c0-5.4-4.4-9.8-9.8-9.8h-72.1c-5.4,0-9.8,4.4-9.8,9.8v29.5H9.8c-5.4,0-9.8,4.4-9.8,9.8s4.4,9.8,9.8,9.8h163.8v22.9  c0,5.4,4.4,9.8,9.8,9.8h72.1c5.4,0,9.8-4.4,9.8-9.8v-22.9h32.8c5.4,0,9.8-4.4,9.8-9.8S303.6,137.9,298.2,137.9z M245.7,170.7h-52.4  v-52.4h52.4V170.7z"/> </svg>
				</a>
				<h3>Новости дня</h3>
			</div>
		</div>
		<div class="sidebar-bottom">
			<div class="sidebar-bottom__holder">
				<div class="sidebar-bottom__frame">

					<div class="sidebar-bottom__content">
						@@include('_news-links.tpl')
					</div>
				</div>
			</div>
		</div>
	</div>
</aside>