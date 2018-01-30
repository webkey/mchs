<aside class="aside">
	<div class="aside__holder">
		<div class="aside__widget">
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
		<div class="aside__widget">
			<iframe id="_view" class="forecast lazy" frameborder="0" scrolling="no" width="225" height="200" src="img/preloader.svg" data-src="http://pogoda.by/meteoinformer/preview.php?_type=3&_city=26850&_name=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA&_bgcl=%23f2f2f2&_brcl=%23cccccc&_size_W=225&_size_H=200&_font_color=%23000000&_font_style=Tahoma&_font_nsize=12&_link_color=%23003399&_link_style=Tahoma&_link_nsize=12"></iframe>
			<!--<table width="300" height="180" style="background-color:#f2f2f2; border: #cccccc 1px solid; font-family:PT Sans; font-size:14px; color:#000000;" cellpadding="2" cellspacing="0">
				<tr><td><a href="http://6.pogoda.by/26850" style="font-family:PT Sans; font-size:12px; color:#003399;" title="Погода Минск на 6 дней - Гидрометцентр РБ" target="_blank">Погода Минск</a>
					</td></tr>
				<tr><td>

						<table width=100% height=100% style="background-color:#f2f2f2; font-family:PT Sans; font-size:14px; color:#000000;" cellpadding="0" cellspacing="0">
							<tr><td>
									<script type="text/javascript" charset="windows-1251" src="http://pogoda.by/meteoinformer/js/26850_3.js"></script>
								</td></tr>
						</table>

					</td></tr>

				<tr><td align="right">Информация сайта <a href="http://www.pogoda.by" target="_blank" style="font-family:PT Sans; font-size:12px; color:#003399;">pogoda.by</a>
					</td></tr>
			</table>-->
		</div>
	</div>
</aside>