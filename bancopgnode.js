var pg = require('pg');
var conString = "postgres://Name:Password@localhost:****/Database";


var client = new pg.Client(conString);
client.connect();