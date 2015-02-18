var args = arguments[0] || {};

if (OS_IOS) {
	$.fila.name = $.titulo.text;
} else {
	$.fila.title = $.titulo.text;
}