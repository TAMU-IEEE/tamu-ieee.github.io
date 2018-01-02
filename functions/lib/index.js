"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
/**
 * Initialized the Admin Firebase SDK to access the Firebase Realtime Database.
 */
admin.initializeApp(functions.config().firebase);
// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    // return admin.database().ref('/emails').set({'kevinjnguyen2@gmail.com': true}).then( snapshot => {
    //   response.set(snapshot);
    // })
    return admin.database().ref('/email').set({ 'kevinjnguyen2@gmail.com': true }).then(snapshot => {
        response.set(snapshot);
    });
    // return admin.database().ref('/test').push({'hello': 'world'}).then(snapshot => {
    //   response.redirect(303, snapshot.ref);
    // })
});
exports.mirror = functions.https.onRequest((req, res) => {
    return admin.database().ref('users/kevin').update({
        username: 'kevin',
        email: 'email123',
    }).then(snapshot => {
        res.send('Done');
    });
});
//# sourceMappingURL=index.js.map