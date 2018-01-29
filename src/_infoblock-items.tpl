@@if(context.survey) {
<div class="infoblock__item">
	<div class="section__subtitle">@@heading</div>
	<div class="survey">
		<div class="survey__header">
			<a href="#" class="survey__all">Все</a>
			<span>Анонимный опрос</span>
		</div>
		<form action="#" method="post">
			<div class="survey__title">У вас трезвый вечер пятницы?</div>
			<ul class="survey__answers list-reset">
				<li>
					<label class="radio-label">
						<input type="radio" name="survey"/> <span><i>&nbsp;</i>Да</span>
					</label>
				</li>
				<li>
					<label class="radio-label">
						<input type="radio" name="survey" checked/>
						<span><i>&nbsp;</i>Пока да</span> </label>
				</li>
				<li>
					<label class="radio-label">
						<input type="radio" name="survey"/> <span><i>&nbsp;</i>Иногда</span>
					</label>
				</li>
				<li>
					<label class="radio-label">
						<input type="radio" name="survey"/> <span><i>&nbsp;</i>Никогда</span>
					</label>
				</li>
			</ul>
			<div class="survey__footer">
				<button class="btn-default-light">Голосовать</button>
				<a href="#">Ответы</a>
			</div>
		</form>
	</div>
</div>
}
@@if(!context.survey) {
<div class="infoblock__item">
	<div class="section__subtitle">@@heading</div>
	<a href="#" title="Каждая гиперссылка должна содержать поясняющий текст для объекта на который она указывает">
		<img src="img/preloader.svg" data-src="@@src" class="lazy" alt="Текст поясняющий содержание изображения"/>
	</a>
</div>
}