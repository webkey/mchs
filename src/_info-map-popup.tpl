<div class="info-map-popup info-map-popup-js" id="@@id">
	<div class="info-map-popup__holder">
		<!--service elements-->
		<div class="info-map-popup__close btn-close-popup-js">Закрыть</div>
		<i class="info-map-popup__corner"></i>
		<!--service elements end-->

		<div class="info-map-popup__title">В @@region районе зафиксировано происшествий</div>
		<ul class="info-map-popup__list">
			@@if(context.tech){
			<li><i class="depict-tech"></i><div class="text-inner">Крупная ЧС техногенного характера: <span>@@tech</span></div></li>
			}
			@@if(context.nature){
			<li><i class="depict-nature"></i><div class="text-inner">Крупная ЧС природного характера: <span>@@nature</span></div></li>
			}
			@@if(context.fire){
			<li><i class="depict-fire"></i><div class="text-inner">Крупные пожары: <span>@@fire</span></div></li>
			}
			@@if(context.dead){
			<li><i class="depict-man-dead"></i><div class="text-inner">Погибло в ЧС: <span>@@dead</span></div></li>
			}
			@@if(context.save){
			<li><i class="depict-man-save"></i><div class="text-inner">Спасено при ликвидации ЧС и прочих инцидентах: <span>@@save</span></div></li>
			}
		</ul>
	</div>
</div>