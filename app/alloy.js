// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// NavigationWindow global
Alloy.Globals.navWin;

// Plataforma activa 
Alloy.Globals.plataformaActiva = 3; // PC

Alloy.Globals.loading = Alloy.createWidget("nl.fokkezb.loading");
// Creamos la colección de juegos.
Alloy.Models.juego = new Backbone.Model();
Alloy.Collections.listaJuegos = new Backbone.Collection();