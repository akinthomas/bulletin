var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl;

if(process.env.DATABASE_URL){
	dbUrl = process.env.DATABASE_URL
} else {
	dbUrl = {
		user: process.argv.POSTGRES_USER,
		password: process.argv.POSTGRES_PASSWORD,
		database: 'bulletinboard',
		host: 'localhost',
		port: 5432
	};
}

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});


router.post('/api/new-post', (req,res) => {
	var query = "INSERT INTO messages (title, message) VALUES ($1,$2)";
	pgClient.query(query, [req.body.title, req.body.message], (error,queryRes) => {
		if(error){
			res.json({error: error})
		} else {
			res.json({results: "successful"})
		}
	});
})

module.exports = router;