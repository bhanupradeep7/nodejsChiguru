let sql = require('mysql');

//mysql connection on local config
let config = {
	user : 'root',
	password : 'root',
	host : 'localhost',
	port:'3310',
	database : 'chiguru'
};



let connection = sql.createConnection(config);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
