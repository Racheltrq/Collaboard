const express = require('express');
const app = express();
const mysql = require('mysql');
var conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '979683',
	database : 'Collaboard'
});

conn.connect();


app.get("/", (req, res) => {
	console.log("Responding to root route...")
	res.send("Hello from root")
})

app.get("/users", (req, res) => {
	res.header("Content-Type",'application/json');
	var s = {
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
	console.log(typeof s)
	console.log(JSON.stringify(s))
	var st = JSON.stringify(s)
	console.log(typeof st)
  	res.send(st)
	
})

app.get('/test', function(request, response){
	conn.query('select * from Users', function(error, results){
		if ( error ){
			response.status(400).send('Error in database operation');
		} else {
			response.send(results);
		}
	});
});

app.listen(3003, ()=>{
	console.log("Server is listening...")
})
