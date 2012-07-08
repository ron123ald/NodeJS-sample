var server = require('./server'),
	handler = require('./handler');
	
	
var handle = {}
handle["/"] = handler.index;
handle["/home"] = handler.home;

server.start(handle);


