let nodeMailer      = require('nodemailer');

let transporter = nodeMailer.createTransport({
    service : 'gmail',
    auth : {
        user: 'chiguraseva@gmail.com',
        pass: 'chigurusevasamithi'
    }
});

//Mail Format
let mailOptionsDefault = {
    from    : "'chiguraseva' <chiguraseva@gmail.com>",
    to      : 'bhanupradeep7@gmail.com',
    subject : 'Chiguru Database',
    text    : 'Data Base Updated'
};

exports.sendMail = function (mailOptions) {
    let mailOpt = {
        from    : mailOptions.from ? mailOptions.from : mailOptionsDefault.from,
        to      : mailOptions.to ? mailOptions.to : mailOptionsDefault.to,
        subject : mailOptions.subject ? mailOptions.subject : mailOptionsDefault.subject,
        text    : mailOptions.text ? mailOptions.text : mailOptionsDefault.text
    };
    transporter.sendMail(mailOpt, function (err,info) {
        if(err){
            return console.log(err);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    })
};