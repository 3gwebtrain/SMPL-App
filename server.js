var express		= require('express'),
	app			= express(),
	path		= require('path');



//local folder

app.use( express.static( __dirname + '/public') );

app.get('*', function( req, res ) {

	res.sendFile( __dirname + '/public/views/index.html' );

});

app.listen(8080);
console.log('Magic Started at 8080!');