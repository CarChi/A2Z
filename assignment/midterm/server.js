var servi = require('servi');
var app = new servi(true);
// set the port (defaults to 3000 if you leave out this line)
port(3222);
// serve files from a directory named "public"
serveFiles("public");
/* NOTE:
Make sure you have a directory called "public"
that resides on the same level as your server.js file
and that "public" has at least one HTML file in it.
(fwiw, you don't have to call it "public", just make sure it matches the folder name)
*/
// start it!
start();