const MongoClient = require('mongodb').MongoClient;

const adminPanelUsers = require('./qlikHrChatBot/adminPanelUsers');
const colKPIComments = require('./qlikHrChatBot/colKPIComments');
const config_AppLevel = require('./qlikHrChatBot/config_AppLevel');
const config_DefaultSelections = require('./qlikHrChatBot/config_DefaultSelections');
const config_FirstLevelMenu = require('./qlikHrChatBot/config_FirstLevelMenu');
const config_Server = require('./qlikHrChatBot/config_Server');
const config_SideMenu = require('./qlikHrChatBot/config_Server');
const sessionMaster = require('./qlikHrChatBot/sessionMaster');

function seedCollection(collectionName, initialRecords) {

  var DB_CONN = "mongodb://mongo:27017";

  MongoClient.connect(DB_CONN, (err, client) => {
    if (err) {
      console.log(err);
    }
    var db = client.db('qlikHrChatBot');

    const collection = db.collection(collectionName);

    collection.insertMany(initialRecords, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(" inserted.",result);
    });

    db.collection(collectionName).find({}).toArray(function (err, docs) {

      docs.forEach(function (doc) {
        console.log(doc);
      });

      client.close();
    });

  });
}

seedCollection('adminPanelUsers',adminPanelUsers); 
seedCollection('colKPIComments',colKPIComments); 
seedCollection('config_AppLevel',config_AppLevel); 
seedCollection('config_DefaultSelections',config_DefaultSelections); 
seedCollection('config_FirstLevelMenu',config_FirstLevelMenu); 
seedCollection('config_Server',config_Server); 
seedCollection('config_SideMenu',config_SideMenu); 
seedCollection('sessionMaster',sessionMaster); 
// seedCollection('qlikData',qlikData);

// const colNotifications = require('./qlikHrChatBot/colNotifications');
// const qlikData = require('./qlikHrChatBot/qlikData');