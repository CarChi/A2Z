// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(8000);

// serve files from a directory named "public"
serveFiles("public");


route('/',requestHandler);

function requestHandler(request){
	request.render("index.html");
}


start();
