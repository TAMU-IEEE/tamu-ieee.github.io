import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

/**
 * Initialized the Admin Firebase SDK to access the Firebase Realtime Database.
 */
admin.initializeApp(functions.config().firebase);

export const addMessage = functions.https.onRequest( (request, response) => {
  const original = request.query.text;
  return admin.database().ref('/messages').push({original: original}).then(snapshot => {
    response.end();
  });
})

export const storeMe = functions.https.onRequest( (request, response) => {
  const test = "10:18";
  return admin.database().ref('/messages').set(test).then( (value) => {
    response.end();
  })
})

export const addUserMetadata = functions.auth.user().onCreate( (event) => {
  const user = event.data;
  const fullName = user.displayName || 'Anonymous';
  return admin.database().ref('users/'+user.uid).push({
    'name': fullName,
    'applied': false,
    'data': admin.database.ServerValue.TIMESTAMP
  })
})