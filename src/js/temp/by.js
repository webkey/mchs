/* Belarusian locals for flatpickr */
var Flatpickr = Flatpickr || { l10ns: {} };
Flatpickr.l10ns.by = {};

Flatpickr.l10ns.by.firstDayOfWeek = 1; // Monday

Flatpickr.l10ns.by.weekdays = {
	shorthand: ['Нд', 'Пн', 'Ат', 'Ср', 'Чц', 'Пт', 'Сб'],
	longhand: ['Нядзеля', 'Панядзелак', 'Ауторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота']
};

Flatpickr.l10ns.by.months = {
	shorthand: ['Студ', 'Лют', 'Сак', 'Кра', 'Тра', 'Чэр', 'Ліп', 'Жні', 'Вер', 'Кас', 'Ліс', 'Снеж'],
	longhand: ['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Травень', 'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад', 'Снежань']
};
if (typeof module !== "undefined") {
	module.exports = Flatpickr.l10ns;
}