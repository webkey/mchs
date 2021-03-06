<div class="user-form">
	<div class="text-layout">
		@@if(context.title) {
			<div class="form-title">@@title</div>
		}
		@@if(context.warning) {
			<div class="text-warning">@@warning</div>
		}
		<form action="/submit" method="post" enctype="multipart/form-data">
			<div class="input-wrap">
				<div class="label-holder">
					<label for="user-form-example__name-field">Имя<span class="form-mark">*</span></label>
				</div>
				<div class="input-holder">
					<input type="text" id="user-form-example__name-field">
					<span class="error-note">Поле обязательно для заполнения</span>
				</div>
			</div>
			<div class="input-wrap">
				<div class="label-holder">
					<label for="user-form-example__email-field">E-mail<span class="form-mark">*</span></label>
				</div>
				<div class="input-holder">
					<input type="email" id="user-form-example__email-field">
					<span class="error-note">Поле обязательно для заполнения</span>
				</div>
			</div>
			<div class="input-wrap has--value">
				<div class="label-holder">
					<label for="user-form-example__message-field">Сообщение<span class="form-mark">*</span></label>
				</div>
				<div class="input-holder success">
					<textarea id="user-form-example__message-field" class="success"></textarea>
					<span class="error-note">Поле обязательно для заполнения</span>
				</div>
			</div>
			<div class="input-wrap">
				<div class="label-holder">
					<span class="label">Прикрепить файл</span>
				</div>
				<div class="input-holder upload-file__container">
					<input class="upload-file" name="filesss" type="file" data-jfiler-limit="1">
					<!--<input class="upload-file" name="files[]" type="file" multiple="multiple" data-jfiler-limit="2">-->
				</div>
			</div>
			<div class="input-wrap has--value">
				<div class="label-holder">
					<label for="user-form-example__captcha-field">Защита от спама:<span class="form-mark">*</span></label>
				</div>
				<div class="input-holder">
					<div class="captcha">
						<img src="img/captcha.jpg" alt="captcha" />
						<input type="text" id="user-form-example__captcha-field">
						<span class="error-note">Введите текст на картинке для защиты от спама</span>
					</div>
				</div>
			</div>
			<div class="form-footer">
				<div class="form-buttons">
					<button class="btn-default btn-submit" data-label="Отправить">Отправить</button>
				</div>
				<div class="form-note">
					<div class="form-note__item"><span class="form-mark">*</span> Поля обязательны для заполнения</div>
				</div>
			</div>
		</form>
	</div>
</div>