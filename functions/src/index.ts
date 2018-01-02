import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

/**
 * Initialized the Admin Firebase SDK to access the Firebase Realtime Database.
 */
admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
export const helloWorld = functions.https.onRequest((request, response) => {
  // return admin.database().ref('/emails').set({'kevinjnguyen2@gmail.com': true}).then( snapshot => {
  //   response.set(snapshot);
  // })
  return admin.database().ref('/email').set({'kevinjnguyen2@gmail.com': true}).then( snapshot => {
    response.set(snapshot);
  })
  // return admin.database().ref('/test').push({'hello': 'world'}).then(snapshot => {
  //   response.redirect(303, snapshot.ref);
  // })
});

export const mirror = functions.https.onRequest((req, res) => {

  return admin.database().ref('users/kevin').update({
    username: 'kevin',
    email: 'email123',
  }).then( snapshot => {
    res.send('Done');
  })

})