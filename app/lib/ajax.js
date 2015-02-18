// Consultas a la API REST para los juegos de Metacritic
exports.obtenerJuegos = function(_callback) {
	// Ajax http://www.w3schools.com/ajax/ajax_xmlhttprequest_create.asp
	var xhr = Ti.Network.createHTTPClient();
	var url = "https://byroredux-metacritic.p.mashape.com/game-list/pc/new-releases";
	xhr.onload = function() {
		var data = JSON.parse(xhr.responseText);
		_callback(data.results);
	};
	xhr.onerror = function(e) {
		Ti.API.info(JSON.stringify(e));
		alert("No puedo obtener lista de juegos :(");
	};
	xhr.open("GET", url);
	xhr.setRequestHeader("X-Mashape-Authorization", Alloy.CFG.apiKey);
	xhr.send();
};

exports.obtenerJuego = function(titulo, _callback) {
	var xhr = Ti.Network.createHTTPClient();
	var url = "https://byroredux-metacritic.p.mashape.com/find/game";
	xhr.onload = function() {
		var data = JSON.parse(xhr.responseText);
		_callback(data.result);
	};
	xhr.onerror = function(e) { 
		Ti.API.info(JSON.stringify(e));
		alert("No puedo obtener la información del juego :(");
	};
	xhr.open("POST", url);
	xhr.setRequestHeader("X-Mashape-Authorization", Alloy.CFG.apiKey);
	xhr.send({
		platform: 3, // PC
		title: titulo
	});
};