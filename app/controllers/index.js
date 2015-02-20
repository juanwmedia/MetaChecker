// Usamos NavigationWindow para iOS
if (OS_IOS) {
	Alloy.Globals.navWin = Ti.UI.iOS.createNavigationWindow({
		window : $.index
	});
	Alloy.Globals.navWin.open();
	$.list.filterAttribute = "name";
	
} else {
	$.index.open();
	$.list.filterAttribute = "title";
}

// Requerimos la funcionalidad Ajax
var ajax = require('ajax');

Alloy.Globals.loading.show('Cargando...', false);

// Cargamos la lista de juegos
ajax.obtenerJuegos(cambiarPlataforma, 'pc');

function cambiarPlataforma(juegos) {
	Alloy.Globals.loading.hide();
	Alloy.Collections.listaJuegos.reset(juegos);
}

function mostrarDetalle(e) {
	// Instanciamos el controlador y creamos la vista con el parámetro index de la tableview
	var detailWin = Alloy.createController("detalle", e.index);
}

// Transformamos los atributos del modelo para usarlo en las filas de la tabla
function transformarModelo(modelo) {
	var attrs = modelo.attributes;
	attrs.titulo = attrs.name;
	attrs.url = attrs.url;
	return attrs;
}

function mostrarOpciones(){
    $.cambiarPlataforma.show();
}

$.cambiarPlataforma.addEventListener('click', function(e){
	
	Alloy.Globals.loading.show('Cargando...', false);
	
	switch(e.index) {
		case 0:
			Alloy.Globals.plataformaActiva = 3;
			ajax.obtenerJuegos(cambiarPlataforma, 'pc');
		break;
		case 1:
			Alloy.Globals.plataformaActiva = 2;
			ajax.obtenerJuegos(cambiarPlataforma, 'xbox360');
		break;
		case 2:
			Alloy.Globals.plataformaActiva = 5;
			ajax.obtenerJuegos(cambiarPlataforma, 'xboxone');
		break;
		case 3:
			Alloy.Globals.plataformaActiva = 1;
			ajax.obtenerJuegos(cambiarPlataforma, 'ps3');
		break;
		case 4:
			Alloy.Globals.plataformaActiva = 0;
			ajax.obtenerJuegos(cambiarPlataforma, 'ps4');
		break;
	}
	
});


