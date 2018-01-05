"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
/**
 * Initialized the Admin Firebase SDK to access the Firebase Realtime Database.
 */
admin.initializeApp(functions.config().firebase);
exports.addMessage = functions.https.onRequest((request, response) => {
    const original = request.query.text;
    return admin.database().ref('/messages').push({ original: original }).then(snapshot => {
        response.end();
    });
});
exports.storeMe = functions.https.onRequest((request, response) => {
    const test = "10:18";
    return admin.database().ref('/messages').set(test).then((value) => {
        response.end();
    });
});
exports.addUserMetadata = functions.auth.user().onCreate((event) => {
    const user = event.data;
    const fullName = user.displayName || 'Anonymous';
    return admin.database().ref('users/' + user.uid).push({
        'name': fullName,
        'applied': false,
        'data': admin.database.ServerValue.TIMESTAMP
    });
});
//# sourceMappingURL=index.js.map