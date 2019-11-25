const http = require('http');
const FIREBASE_API_KEY = 'AAAARA1q62E:APA91bHahzUXM8PoYThxZ17bnLh2K9NdqVWGhOuTI8Hdp6MxNuqNDwhiKgzG-OgHN_yqfl05ua6FPshQeTC1pJpgr4b-sSNH0FkI8YUDQmB9K96UYOWeL3KoP9Cql9eCyj15EyHEFsjO';
const DEVICE_TOKEN = 'fXO8FTy6o7M:APA91bHv63AqErydkHQoCpSL5ZfkcRuIaETfcRw_79DWcGA_c6K2T_9zP4DfaYV_4eiNsirRi_QVN-EApQlU5J0DlAetNXFAU8DB-K1wgsPHhoQ8Qxxqkzjb3LskqMCAa3mESjppKqyF';
var FCM = require('fcm-node');
var fcm = new FCM(FIREBASE_API_KEY);
exports.handler = async (event, context) => {
  console.log(event);
  return new Promise((resolve, reject) => {
    var message = {
      to: event.arguments.token,
      notification: {
        title: "Update Job Status",
        body: "Update your Jobs Status"
      }
    };

    fcm.send(message, function (err, response) {
      if (err) {
        console.log("Something has gone wrong!");
      } else {
        console.log("Successfully sent with response: ", response);
      }
    });
  });
}
