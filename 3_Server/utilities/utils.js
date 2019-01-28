const log4js = require('log4js');
const config = require('../config');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const dao = require('../dao/dao');

const csvWriter = createCsvWriter({
    path: './log.csv',
    header: [
        { id: 'level', title: 'level' },
        { id: 'username', title: 'username' },
        { id: 'sessionID', title: 'sessionID' },
        { id: 'info', title: 'info' },
        { id: 'rating', title: 'rating' },
        { id: 'reason', title: 'reason' },
    ]
});

log4js.configure({
    appenders: {
        everything: { type: 'file', filename: 'logfile.log' }
    },
    categories: {
        default: { appenders: ['everything'], level: 'debug' }
    }
});

const logger = log4js.getLogger();

module.exports.log = function (level, msg) {
    if (config.IS_DEBUG_MODE_ON) {
        console.log(msg);
    }
    if (level == "CS") { // Current Selections
        console.log(msg);
        var arrCS = msg.split('#');

        dao.persistCurrentSelections(arrCS[1],1,arrCS[2]);
        
        logger.info("CS" + JSON.stringify(msg));
    }
    if (level == "rating") {
        csvWriter.writeRecords([{ level: level, username: msg.username, sessionID: msg.sessionId, 
            info: msg.query, rating: msg.rating, reason: msg.reason }]).then(() => { console.log('...Done'); });
    }
    if (level == 'info') {
        logger.info(JSON.stringify(msg));
    } else if (level == 'warn') {
        logger.warn(JSON.stringify(msg));
    } else if (level == 'error') {
        logger.error(JSON.stringify(msg));
    }
};

module.exports.ResponseToReturn = function ResponseToReturn(respCode = 200, respMsg = "", respStr = "", respObj = {}) {
    var obj = {
        "ResponseCode": respCode,
        "ResponseMessage": respMsg,
        "ResponseString": respStr,
        "ResponseObject": respObj
    }
    return obj;
};

module.exports.getCurrentTime = function getCurrentTime() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    var date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

    var ampm = hours >= 12 ? 'PM' : 'AM';
    var hr = hours % 12;
    hr = hr ? hr : 12;
    var min = minutes < 10 ? '0' + minutes : minutes;
    var sec = seconds < 10 ? '0' + seconds : seconds;
    var strTime = hr + ':' + min + ':' + sec + ' ' + ampm;
    return date + " " + strTime;
}

class Dictionary {

    constructor() {
        this.length = 0;
    }

    count() {
        return this.length;
    }

    setItems(obj) {
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                this[p] = obj[p];
                this.length++;
            }
        }
    }

    add(key, value) {
        var previous = undefined;
        if (this.containsKey(key)) {
            previous = this[key]
        }
        else {
            this.length++;
        }
        this[key] = value;
    }

    remove(key) {
        var val = this[key];
        delete this[key];
        this.length--;
        return val;
    }

    containsKey(key) {
        return this.hasOwnProperty(key);
    }

    getItem(key) {
        return this.containsKey(key) ? this[key] : undefined;
    }

    keys() {
        var keySet = [];

        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    }

    each(fn) {
        for (var k in this) {
            if (this.containsKey(k)) {
                fn(k, this[k]);
            }
        }
    }

    clear() {
        //this = {}
        this.length = 0;
    }
}

module.exports.globalConstDict = new Dictionary();