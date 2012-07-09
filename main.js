var server = require('./server'),
	handler = require('./handler');
	
	
var handle = {}
handle["/"] = handler.index;
handle["/home"] = handler.home;
handle["/jquery.js"] = handler.jquery;
handle["/faye-browser-min.js"] = handler.fayebrowsermin;

server.start(handle);


