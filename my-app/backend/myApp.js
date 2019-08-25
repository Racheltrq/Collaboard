const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const mysql = require('mysql');
var conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '979683',
	database : 'Collaboard'
});

conn.connect();

app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/", (req, res) => {
	console.log("Responding to root route...")
	res.send("Hello from root")
})

app.post("/users", (req, res) => {
	//res.header("Content-Type",'application/json');

	//console.log(typeof s)
	//console.log(JSON.stringify(s))
	//var st = JSON.stringify(s)
	//console.log(typeof st)
  	//res.send(st)

	console.log("log:", req.body)

	conn.query('select Email from Users', function(error, results){
		if ( error ){
			res.status(400).send('Error in database operation');
			console.log("Fail")
		} else {
			let emailExists = false;
			for(let i = 0; i < results.length; i++) {
				console.log("Compare:", results[i].Email, req.body.email)
				if (results[i].Email === req.body.email) {
					emailExists = true;
					res.status(400).send('login failed');
					break;
				}
			}
			if(emailExists === false) {
				var sql = "INSERT INTO Users VALUES ?";
				var values = [
					[req.body.email, req.body.psw]
				]
				conn.query(sql, [values],function (err, result) {
					if (err) throw err;
					console.log("1 record inserted");
				});
			}
		}
	});
	
})

app.listen(3003, ()=>{
	console.log("Server is listening...")
})
