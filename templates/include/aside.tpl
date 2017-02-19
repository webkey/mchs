<aside class="aside">
	<div class="aside__holder">
		<div class="aside__widget">
			<!--banners-->
			<div class="banners">
				@@loop('banners.tpl', [
					{ "src": "img/img-banner-01.jpg" },
					{ "src": "img/img-banner-02.jpg" },
					{ "src": "img/img-banner-03.jpg" },
					{ "src": "img/img-banner-04.jpg" },
					{ "src": "img/img-banner-05.jpg" }
				])
			</div>
			<!--banners end-->
		</div>
		<div class="aside__widget">
			<h3>сейчас читают</h3>
			<!--news read-->

				<div class="news-read">
					@@loop('news-read-list.tpl', [
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