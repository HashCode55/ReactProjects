/**
	* Author:    hashcode55 (Mehul Ahuja)
	* Created:   22.04.2017
	*
	* Now using the server to serve the static html files! 
	* Express directly uses the static files to render the index.html 
	* which contains the react code. 
**/

var express = require('express')
var bodyParser = require('body-parser')
var winston = require('winston');
const pool = require('./lib/db');

var z = 1;
// // test data 
// var noteData = [
// 	{post_id:1,text:'UTA001 link shared - *mimick link*', votes:4, user_id:'shaggy', board_id:'uj83jd', tag_one:'COE', tag_two:'CML'},
// 	{post_id:2,text:'Capstone evaluation postponed', time:'Time', votes:3, user_id:'jandura', board_id:'uj83dd', tag_one:'COE', tag_two:'CML'},
// ];

pool.connect(function(err, client, done) {
	// connect to the database 
	if(err) {
		return winston.log('error', 'Error connecting to the database in pool.connect');
	}
	winston.log('info', 'Successfully connected to the database.');
});

var app = express();

app.use(express.static('static')); // has to be static so that express can find it 

// GET request 
app.get('/api/notes/', function(req, res){
	// TODO: Database 
	winston.log('info', 'Get Request Received.');
	pool.connect(function(err, client, done){
		if(err) {
			return winston.log('error', 'Error connecting to the database in app.get');
		}
		client.query('SELECT * FROM posts', [], 
			function(err, result){
				done();
				if(err){
					return winston.log('error', 'query failed in app.get ', err);	
				}
				res.json(result.rows);
				winston.log('info', 'Get request successfully handled.');
			});
	});	
});

// Use bodyparser to parse the JSON
app.use(bodyParser.json());

// POST request 
app.post('/api/notes/', function(req, res) {
	winston.log('info', 'Req body:', req.body);
	var newNote = req.body;
	newNote.post_id = z + 1;

	// insert into postgresql 

	pool.connect(function(err, client, done){
		if(err) {
			return winston.log('error', 'Error connecting to the database in app.post');
		}
		client.query('INSERT INTO posts (post_id, text, votes, user_id, board_id, tag1, tag2) \
						VALUES ($1, $2, $3, $4, $5, $6, $7)', 
						[newNote.post_id, newNote.text, newNote.votes, newNote.user_id, 
						newNote.board_id, newNote.tag_one, newNote.tag_two],
						function(err, result){
							done();
							if(err){
								return winston.log('error', 'query failed in app.post', err);	
							}
							res.json(newNote); // send the note back
							winston.log('info', 'successfully pushed in the database')
						});
	});
});

var server = app.listen(3000, function() {
	var port = server.address().port;
	winston.log('info', 'Started server at port', port);
});