<form action="#" method="get">
	<div class="input-wrap">
		<div class="label-holder">
			<label for="expl-label-01">Пример текстового поля с плейсхолдером: <span class="form-mark">*</span></label>
		</div>
		<input type="text" placeholder="Текстовое поле" id="expl-label-01" />
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="expl-label-02">Пример невалидного текстового поля: <span class="form-mark">*</span></label>
		</div>
		<input class="error" type="text" placeholder="Невалидное поле" id="expl-label-02" />
		<span class="error-note">Поле обязательное для заполнения</span>
	</div>
	<div class="form-row">
		<div class="input-wrap">
			<div class="label-holder">
				<label for="expl-label-03">Текстовое поле первое: <span class="form-mark">*</span></label>
			</div>
			<input type="text" placeholder="Текстовое поле первое" id="expl-label-03" />
		</div>
		<div class="input-wrap">
			<div class="label-holder">
				<label for="expl-label-04">Текстовое поле второе: <span class="form-mark">*</span></label>
			</div>
			<input type="text" placeholder="Текстовое поле второе" id="expl-label-04" />
		</div>
	</div>
	<div class="form-row">
		<div class="input-wrap">
			<div class="label-holder">
				<label for="expl-label-05">Текстовое поле третье: <span class="form-mark">*</span></label>
			</div>
			<input type="text" placeholder="Текстовое поле третье" id="expl-label-05" />
		</div>
		<div class="input-wrap">
			<div class="label-holder">
				<label for="expl-label-06">Пример селекта: <span class="form-mark">*</span></label>
			</div>
			<div class="select">
				<select class="cselect" name="filter-type" id="expl-label-06">
					<option value="0">В Островецком</option>
					<option value="1">районе работники</option>
					<option value="2">МЧС спасли</option>
					<option value="3">тонувшего мужчину</option>
					<option value="4">Женщина получила ожоги отдыхая под Витебском.</option>
				</select>
			</div>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="default-select-example">Некастомный селект:</label>
		</div>
		<div class="select">
			<select id="default-select-example">
				<option value="0">В Островецком</option>
				<option value="1">районе работники</option>
				<option value="2">МЧС спасли</option>
				<option value="3">тонувшего мужчину</option>
				<option value="4">Женщина получила ожоги отдыхая под Витебском.</option>
			</select>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="custom-select-example">Кастомный селект:</label>
		</div>
		<div class="select">
			<select class="cselect" id="custom-select-example">
				<option value="0">В Островецком</option>
				<option value="1">районе работники</option>
				<option value="2">МЧС спасли</option>
				<option value="3">тонувшего мужчину</option>
				<option value="4">Женщина получила ожоги отдыхая под Витебском.</option>
			</select>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="multiselect-example">Мультиселект:</label>
		</div>
		<div class="select">
			<select class="cselect" id="multiselect-example" multiple>
				<option value="0">В Островецком</option>
				<option value="1">районе работники</option>
				<option value="2">МЧС спасли</option>
				<option value="3">тонувшего мужчину</option>
				<option value="4">Женщина получила ожоги отдыхая под Витебском.</option>
			</select>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="multiselect-example">Мультиселект c пелейсхолдером:</label>
		</div>
		<div class="select">
			<select class="cselect" id="multiselect-example-with" multiple data-placeholder="Выберите несколько вариантов">
				<option value="0">В Островецком</option>
				<option value="1">районе работники</option>
				<option value="2">МЧС спасли</option>
				<option value="3">тонувшего мужчину</option>
				<option value="4">Женщина получила ожоги отдыхая под Витебском.</option>
			</select>
		</div>
	</div>
	<div class="input-wrap" style="width: 200px;">
		<div class="label-holder">
			<label for="date-example-01">Выбрать дату:</label>
		</div>
		<input class="custom-date" type="text" placeholder="Выбирите дату" id="date-example-01"/>
	</div>
	<div class="input-wrap" style="width: 200px;">
		<div class="label-holder">
			<label for="date-example-02">Выбрать дату:</label>
		</div><input class="custom-date" type="text" placeholder="Выбирите дату" id="date-example-02"/>
	</div>
	<div class="label-holder">
		<label for="date-example-03">Дата начала и конца события (1):</label>
	</div>
	<div class="form-row">
		<div class="input-wrap">
			<input class="custom-date--from" type="text" placeholder="Дата начала" id="date-example-03"/>
		</div>
		<div class="input-wrap">
			<input class="custom-date--to" type="text" placeholder="Дата конца"/>
		</div>
	</div>
	<div class="label-holder">
		<label for="date-example-04">Дата начала и конца события (2):</label>
	</div>
	<div class="form-row">
		<div class="input-wrap">
			<input class="custom-date--from" type="text" placeholder="Дата начала" id="date-example-04"/>
		</div>
		<div class="input-wrap">
			<input class="custom-date--to" type="text" placeholder="Дата конца"/>
		</div>
	</div>
	<div class="input-wrap">
		<div class="label-holder">
			<label for="expl-label-07">Сообщение:</label>
		</div>
		<textarea placeholder="Сообщение" id="expl-label-07"></textarea>
	</div>
	<div class="form-row">
		<div class="input-wrap">
			<input class="btn-default" type="submit" value="Отправить">
		</div>
	</div>
</form>