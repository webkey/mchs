/* Belarusian locals for flatpickr */
var flatpickr = flatpickr || { l10ns: {} };
flatpickr.l10ns.by = {};

flatpickr.l10ns.by.firstDayOfWeek = 1; // Monday

flatpickr.l10ns.by.weekdays = {
	shorthand: ["Нд", "Пн", "Ат", "Ср", "Чц", "Пт", "Сб"],
	longhand: ["Нядзеля", "Панядзелак", "Ауторак", "Серада", "Чацвер", "Пятніца", "Субота"]
};

flatpickr.l10ns.by.months = {
	shorthand: ["Студ", "Лют", "Сак", "Кра", "Тра", "Чэр", "Ліп", "Жні", "Вер", "Кас", "Ліс", "Снеж"],
	longhand: ["Студзень", "Люты", "Сакавік", "Красавік", "Травень", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"]
};
if (typeof module !== "undefined") module.exports = flatpickr.l10ns;