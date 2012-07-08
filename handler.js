var fs = require('fs');


function index(response){
	console.log('index');
	fs.readFile('./html/index.html', function(err, html){
		if(err){
			console.log(err);
		}
		respond(response, html, 'text/html', 200);
	});
}

function home(response){
	console.log('home');
	fs.readFile('./html/index.html', function(err, html){
		if(err){
			console.log(err);
		}
		respond(response, html, 'text/html', 200);
	});
}

exports.index = index;
exports.home = home;

function respond(response, body, contentType, code){
	response.writeHead(code, {'Content-Type': contentType });
	response.write(body);
	response.end();
}