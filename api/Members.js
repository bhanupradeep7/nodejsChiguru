let connection = require('./connection');
let MailService = require('./mail/mail');

let tableName = 'members';

exports.getAllMembers = function (req, res) {
	connection.query('select * from '+tableName, function (err1, record) {
		if(err1) res.send(err1);
		else res.send(record);
	});
};

exports.addMember = function (req,res) {
    let actMember = req.body.activemember ? 1: 0;
    let query = "Insert into "+tableName+ " ( name, dateOfBirth, phoneNumber, email, gender, address,city,school,activeMember,pincode) "
                + " Values('"
                +req.body.name + "', '"
                +req.body.dateOfBirth + "', '"
                +req.body.phoneNumber + "', '"
                +req.body.email + "', '"
                +req.body.gender + "', '"
                +req.body.address + "', '"
                +req.body.city + "', '"
                +req.body.school + "', "
                + actMember + ", '"
                +req.body.pincode + "')";

    connection.query(query,function (err,resp) {
        if(err) {
            res.send(err);
            MailService.sendMail({text: err.message});
            console.log(err);
        }
        else{
            MailService.sendMail({text: res.req.body.name + " Added Successfully in database"});
            res.send(resp);
        }
    })
};