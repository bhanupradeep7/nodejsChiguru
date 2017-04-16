let bodyParser  = require('body-parser');

let Members     = require('./Members');

module.exports = function (app) {

	//parse data in req obj
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Members requests
	app.get('/allMembers', Members.getAllMembers);
	app.post('/addMember', Members.addMember)

};