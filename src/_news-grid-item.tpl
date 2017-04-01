<div class="news-grid__item@@if(context.size){--@@size}@@if(context.hasntImgSuffix){ news-grid__item--@@hasntImgSuffix}@@if(context.hasImgSuffix){ news-grid__item--@@hasImgSuffix}@@if(context.wideClass){--@@wideClass}@@if(context.hasJs){ @@hasJs}">
	@@if (context.label) { <div class="news-grid__label news-grid__label_@@label">@@label</div>}
	@@if(context.slider){ <div class="news-grid__slider">@@include('_news-grid-slider.tpl')</div>}
	<a href="#" class="news-grid__inner">
		@@if (context.src) { <div class="news-grid__img" style="background-image: url(@@src);"></div>}
		<div class="news-grid__content">
			@@if(context.title){ <div class="news-grid__title">@@title</div>}
			<div class="news-grid__text">@@text</div>
			<div class="news-grid__meta">
				<span class="visit-view">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 179.8 612 346" enable-background="new 0 179.8 612 346"> <path d="M612,351.6c0-0.3,0-0.5-0.1-0.8c0-0.1,0-0.3,0-0.4c0-0.2,0-0.4-0.1-0.5c0-0.2,0-0.4-0.1-0.6c0,0,0-0.1,0-0.1  c-0.8-4.7-3-9.2-6.4-12.6c-19.5-23.1-42.7-43.7-66.4-62.5c-50.9-40.5-109-74.4-173.2-88.1c-37.1-7.9-74.5-8.2-111.8-1.5  c-33.9,6.1-66.6,18.7-97.3,34.3C108.8,243.3,65,277,26.9,314.9c-7.1,7-14.1,14.1-20.5,21.8c-8.5,10.1-8.5,22.1,0,32.2  c19.5,23.1,42.7,43.7,66.4,62.5c50.9,40.5,109,74.4,173.3,88.1c37.1,7.9,74.5,8.2,111.8,1.6c33.9-6.1,66.6-18.7,97.3-34.3  c47.9-24.5,91.7-58.2,129.8-96.1c7.1-7,14.1-14.1,20.5-21.8c3.4-3.4,5.6-7.9,6.4-12.6c0,0,0-0.1,0-0.1c0-0.2,0.1-0.4,0.1-0.6  c0-0.2,0.1-0.4,0.1-0.5c0-0.1,0-0.3,0-0.4c0-0.2,0-0.5,0.1-0.7c0-0.4,0-0.8,0-1.1S612,352,612,351.6z M306,470.5  c-65,0-117.8-52.7-117.8-117.8c0-65,52.7-117.8,117.8-117.8s117.8,52.7,117.8,117.8S371,470.5,306,470.5z M306,313.8  c-21.5,0-39,17.5-39,39s17.5,39,39,39s39-17.5,39-39S327.5,313.8,306,313.8z"></path> </svg>
					<em>41</em>
				</span>
				<time datetime="2016-12-23T12:00">@@meta</time>
			</div>
		</div>
	</a>
</div>