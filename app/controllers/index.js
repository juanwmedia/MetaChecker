// Requerimos la funcionalidad Ajax
var ajax = require('ajax');

// Usamos NavigationWindow para iOS
if (OS_IOS) {
    var navWin = Ti.UI.iOS.createNavigationWindow({
        window: $.index
    });
    navWin.open();
    $.list.filterAttribute = "name";
} else {
    $.index.open();
    $.list.filterAttribute = "title";
}

Alloy.Globals.loading.show('Cargando...', false);

// Cargamos la lista de juegos
ajax.obtenerJuegos(function(juegos) {
	Alloy.Globals.loading.hide();
    Alloy.Collections.listaJuegos.reset(juegos);
});

function mostrarDetalle(e) {
	// Instanciamos el controlador y creamos la vista con el parámetro index de la tableview
    var detailWin = Alloy.createController("detalle", e.index).getView();

    if (OS_IOS) {
        navWin.openWindow(detailWin);
    } else {
        detailWin.open();
    }
}

// Transformamos los atributos del modelo para usarlo en las filas de la tabla
function transformarModelo(modelo) {
    var attrs = modelo.attributes;
    attrs.titulo = attrs.name;
    attrs.url = attrs.url;
    return attrs;
}