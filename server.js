var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	port = 8888;
	
	
exports.start = function(handle){
	function onRequest(request, response){
		var pathname = getpathname(request);
		
		request.setEncoding('utf8');
		request.addListener("end", function() {
  			router(pathname, handle, response);
		});
	}
	http.createServer(onRequest).listen(port);
	console.log('Node server is Running @ http://localhost:' + port);
}

function router(pathname, handle, response){
	console.log('Request for ' + pathname);
	if( typeof handle[pathname] === 'function'){
		console.log(' found');	
		handle[pathname](response);
	}else{
		console.log(' error no such');
		respond(response, 'Error', 'text/plain', 400);
	}
}
function getpathname(request){
	return url.parse(request.url).pathname;
}

function respond(response, body, contentType, code){
	response.writeHead(code, {'Content-Type': contentType});
	response.write(body);
	response.end();
}
	
