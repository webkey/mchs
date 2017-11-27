<div class="info-map-popup info-map-popup-js" id="@@id">
	<div class="info-map-popup__holder">
		<!--service elements-->
		<div class="info-map-popup__close btn-close-popup-js">Закрыть</div>
		<i class="info-map-popup__corner"></i>
		<!--service elements end-->

		<div class="info-map-popup__title">В @@region районе зафиксировано происшествий</div>
		<ul class="info-map-popup__list">
			@@if(context.tech){
			<li>
				<svg viewBox="0 0 138 138" width="32" height="32">
					<use xlink:href="#svg-ico-tech"></use>
				</svg>
				<div class="text-inner">Крупная ЧС техногенного характера: <b>@@tech</b></div></li>
			}
			@@if(context.nature){
			<li>
				<svg viewBox="0 0 138 138" width="32" height="32">
					<use xlink:href="#svg-ico-nature"></use>
				</svg>
				<div class="text-inner">Крупная ЧС природного характера: <b>@@nature</b></div></li>
			}
			@@if(context.fire){
			<li>
				<svg viewBox="0 0 138 138" width="32" height="32">
					<use xlink:href="#svg-ico-fire"></use>
				</svg>
				<div class="text-inner">Крупные пожары: <b>@@fire</b></div></li>
			}
			@@if(context.dead){
			<li>
				<svg viewBox="0 0 138 138" width="32" height="32">
					<use xlink:href="#svg-ico-dead"></use>
				</svg>
				<div class="text-inner">Погибло в ЧС: <b>@@dead</b></div></li>
			}
			@@if(context.save){
			<li>
				<svg viewBox="0 0 138 138" width="32" height="32">
					<use xlink:href="#svg-ico-save"></use>
				</svg>
				<div class="text-inner">Спасено при ликвидации ЧС и прочих инцидентах: <b>@@save</b></div></li>
			}
		</ul>
	</div>
</div>