<div class="news-previews__item">
	<a href="#" class="news-previews__inner @@if (src === "img/empty.png") {no-img}">
		<div class="news-previews__label news-previews__label_@@label">@@label</div>
		<div class="news-previews__img" style="@@if (src === "img/empty.png") {display:none}"> <img src="@@src" alt="image description" /></div>
		<div class="news-previews__text">@@text</div>
		<div class="news-previews__meta">@@meta</div>
	</a>
</div>