<div class="tape-gallery-wrap">
	<div class="tape-gallery">
		<div class="swiper-container">
			<div class="tape-gallery__list swiper-wrapper lg-js">
				@@loop('_photos-gallery-items.tpl', 'includes-json/photos-gallery-items.json')
			</div>

			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			<div class="swiper-pagination"></div>
		</div>
	</div>
</div>