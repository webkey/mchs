<aside class="aside">
	<div class="aside__holder">
		<div class="aside__widget special-hide">
			<!--banners-->
			<div class="banners">
				<div class="banners__list">
					@@if(context.pageDepartment) {
						@@loop('_banners-item.tpl', 'includes-json/banners-items-aside-department.json')
					}
					@@if(!context.pageDepartment) {
						@@loop('_banners-item.tpl', 'includes-json/banners-items-aside.json')
					}
				</div>
			</div>
			<!--banners end-->
		</div>
		<div class="aside__widget">
			<h3>сейчас читают</h3>
			<!--news read-->

				<div class="news-read">
					@@loop('_news-read-list.tpl', [
						{
							"text": "Профессиональный праздник на уходящей неделе отметили белорусские спасатели (Центральный регион).",
							"meta": "03.01.2017, 10:30"
						},
						{
							"text": "Новогоднее поздравление Министра по чрезвычайным ситуациям Владимира Ващенко.",
							"meta": "03.01.2017, 10:30"
						},
						{
							"text": "Задачы на 2017 год: якасць, эфектыўнасць, аператыўнасць!",
							"meta": "03.01.2017, 10:30"
						},
						{
							"text": "Профессиональный праздник на уходящей неделе отметили белорусские спасатели (Центральный регион).",
							"meta": "03.01.2017, 10:30"
						},
						{
							"text": "Задачы на 2017 год: якасць, эфектыўнасць, аператыўнасць!",
							"meta": "03.01.2017, 10:30"
						}
					])
				</div>

			<!--news links end-->
		</div>
	</div>
</aside>