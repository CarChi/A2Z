// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port
port(8000);

// serve files from a directory named "public"
serveFiles("public");


route('/',requestHandler);

function requestHandler(request){
	request.render("index.html");
}


start();
