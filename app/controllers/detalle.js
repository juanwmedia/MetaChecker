var args = arguments[0];
var ajax = require('ajax');

// Extraigo un modelo con .at() de la colección y lo convierto en JSON
var detallesJuego = Alloy.Collections.listaJuegos.at(args).toJSON();

Alloy.Globals.loading.show('Cargando...', false);

// Llamada a la API para los detalles de un juego específico
ajax.obtenerJuego(detallesJuego.name, function(juego) {
	Alloy.Globals.loading.hide();
    Alloy.Models.juego.set(juego);
});

function cerrarVentana() {
  $.detalle.close();
}

// Libero binds y memoria
$.detalle.addEventListener("close", function() {
	Alloy.Models.juego.clear();
	$.destroy();
});