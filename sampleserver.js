var http = require("http);
funcon dealWithWebRequest(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello Node.js");
response.end();
}
var webserver = http.createServer(dealWithWebRequest).listen(8000,"127.0.0.1");
webserver.once("listening", function() {
console.log("Server running at http://127.0.0.1:3000/");
});