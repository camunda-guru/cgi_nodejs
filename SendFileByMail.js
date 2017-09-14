/**
 * Created by BALASUBRAMANIAM on 03-04-2017.
 */
var nodeMailer = require('nodemailer');
var fs = require('fs');



var transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'Parameswaribala@gmail.com',
        pass: ''
    }
});

console.log('created');




fs.readFile("./google.pdf", function (err, data) {

    transporter.sendMail({
        sender: 'Parameswaribala@gmail.com',
        to: 'parameswaribala@gmail.com',
        subject: 'Attachment!',
        body: 'mail content...',
        attachments: [{'filename': 'test.pdf', 'content': data}]
    }), function(err, success) {
        if (err) {
            // Handle error
        }

    }
});
