<h3><span class="mark">Примеры чекбоксов и переключателей</span></h3>
<form action="#" method="get">
	<div class="text-layout">
		<div class="form-row">
			<div class="input-wrap">
				<h3>
					<span class="mark">Checkbox outside label</span>
				</h3>
				<ul class="checkbox-list list-reset">
					<li>
						<input type="checkbox" name="checkbox-normal" id="checkbox-normal" />
						<label for="checkbox-normal"><span>Normal</span></label>
					</li>
					<li>
						<input type="checkbox" name="checkbox-checked" id="checkbox-checked" checked />
						<label for="checkbox-checked"><span>Checked</span></label>
					</li>
					<li>
						<input type="checkbox" name="checkbox-disabled" id="checkbox-disabled" disabled />
						<label for="checkbox-disabled"><span>Disabled</span></label>
					</li>
					<li>
						<input type="checkbox" name="checkbox-checked-disabled" id="checkbox-checked-disabled" checked disabled />
						<label for="checkbox-checked-disabled"><span>Checked & Disabled</span></label>
					</li>
				</ul>

				<h3>
					<span class="mark">Checkbox inside label</span>
				</h3>
				<ul class="checkbox-list list-reset">
					<li>
						<label class="check-label">
							<input type="checkbox" name="checkbox-normal" />
							<span><i>&nbsp;</i>Отличный способ для выделения самого важного в тексте – использование контрастных шрифтов</span>
						</label>
					</li>
					<li>
						<label class="check-label">
							<input type="checkbox" name="checkbox-checked" checked />
							<span><i>&nbsp;</i>Checked</span>
						</label>
					</li>
					<li>
						<label class="check-label">
							<input type="checkbox" name="checkbox-disabled" disabled />
							<span><i>&nbsp;</i>Disabled</span>
						</label>
					</li>
					<li>
						<label class="check-label">
							<input type="checkbox" name="checkbox-checked-disabled" checked disabled />
							<span><i>&nbsp;</i>Checked & Disabled</span>
						</label>
					</li>
				</ul>
			</div>
			<div class="input-wrap">
				<h3>
					<span class="mark">Radiobutton outside label</span>
				</h3>
				<ul class="radio-list list-reset">
					<li>
						<input type="radio" name="testRadioOutside" id="radio-male" checked />
						<label for="radio-male"><span>Male</span></label>
					</li>
					<li>
						<input type="radio" name="testRadioOutside" id="radio-female" />
						<label for="radio-female"><span>Female</span></label>
					</li>
					<li>
						<input type="radio" name="radio-disabled-outside" id="radio-disabled" disabled />
						<label for="radio-disabled"><span>Disabled</span></label>
					</li>
					<li>
						<input type="radio" name="radio-checked-disabled-outside" id="radio-checked-disabled" checked disabled />
						<label for="radio-checked-disabled"><span>Checked & Disabled</span></label>
					</li>
				</ul>

				<h3>
					<span class="mark">Radiobutton inside label</span>
				</h3>
				<ul class="radio-list list-reset">
					<li>
						<label class="radio-label">
							<input type="radio" name="testRadioInside" />
							<span><i>&nbsp;</i>Male</span>
						</label>
					</li>
					<li>
						<label class="radio-label">
							<input type="radio" name="testRadioInside" checked />
							<span><i>&nbsp;</i>Female</span>
						</label>
					</li>
					<li>
						<label class="radio-label">
							<input type="radio" name="radio-disabled" disabled />
							<span><i>&nbsp;</i>Disabled</span>
						</label>
					</li>
					<li>
						<label class="radio-label">
							<input type="radio" name="radio-checked-disabled" checked disabled />
							<span><i>&nbsp;</i>Checked & Disabled</span>
						</label>
					</li>
				</ul>
			</div>
		</div>
	</div>
</form>
