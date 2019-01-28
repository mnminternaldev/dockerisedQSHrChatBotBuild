const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');
const utils = require('../utilities/utils');

// Working
router.post('/pushToServerLog', function (req, res) {
    try {
        utils.log(req.body.type, req.body.logBody);
        res.send({"ResponseString":"ok"});
    } catch (error) {
        utils.log('error', '/pushToServerLog Error While Logging');
    }
});


// to use this endpoint you have to make sure that you are not in mahindra network
// this works from open network
router.post('/sendmail', function (req, res) {
    try {
        var transporter = nodemailer.createTransport(
            {
                host: utils.globalConstDict.getItem("URL_MAIL_SERVER"),
                port: 25,
                secure: false,
                auth: {
                    user: utils.globalConstDict.getItem("MAIL_AUTH_USERNAME"),
                    pass: utils.globalConstDict.getItem("MAIL_AUTH_PASSWORD")
                }
            }
        );

        var mailOptions = {
            from: utils.globalConstDict.getItem("MAIL_APP_SUPPORT_FROM"),
            to: utils.globalConstDict.getItem("MAIL_APP_SUPPORT_TO"),
            subject: req.body.subject,
            text: req.body.message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                utils.log('error', "Error While sending mail");
            } else {
                console.log('Email sent: ' + info.response);
                res.send(info.response);
            }
        });
    } catch (error) {
        utils.log('error', "Error While sending mail");
    }
});


// Working
router.get('/ping', function (req, res) {
    try {
        utils.log('info', "Ping Called");
        res.send({"ResponseString":"SSS"});
    } catch (error) {
        utils.log('error', '/ping Error While Logging Log');
    }
});

module.exports = router