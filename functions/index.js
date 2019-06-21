
const express = require('express');
const cors = require('cors');
const app = express();

//Firebase
const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.sendNotification =
  functions.firestore
    .document('orders/{orderRowId}')
    .onUpdate((change, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      const newValue = change.after.data();
      console.log("newValue: " , newValue)

      // ...or the previous value before this update
      const previousValue = change.before.data();
      console.log("newValue: " , newValue)

      // access a particular field as you would any JS property
      //const name = newValue.name;

      // perform desired operations ...
      const payload = {
        notification : {
          title : "Record Updated",
          body : "Order is updated"
        }
      }

      console.info(payload)


      // admin.messaging().sendToDevice([
      //   "c5M2luSfiDk:APA91bH-u1Vg4v_F4vDNDUwCcnCzwVBRxEnjq36WxWqB9H7GkDILHtGUYdtHGPiycQVsU9lV-OtU8WzFrgNShIfctLm17O6KsLHaN2pSVFpQypnLyc3VzxEcdNh20HoWSOHFU0hhCEtO"
      //   ,  "c5M2luSfiDk:APA91bH-u1Vg4v_F4vDNDUwCcnCzwVBRxEnjq36WxWqB9H7GkDILHtGUYdtHGPiycQVsU9lV-OtU8WzFrgNShIfctLm17O6KsLHaN2pSVFpQypnLyc3VzxEcdNh20HoWSOHFU0hhCEtO"
      //   ,  "c5M2luSfiDk:APA91bH-u1Vg4v_F4vDNDUwCcnCzwVBRxEnjq36WxWqB9H7GkDILHtGUYdtHGPiycQVsU9lV-OtU8WzFrgNShIfctLm17O6KsLHaN2pSVFpQypnLyc3VzxEcdNh20HoWSOHFU0hhCEtO"
      //   ,  "c5M2luSfiDk:APA91bH-u1Vg4v_F4vDNDUwCcnCzwVBRxEnjq36WxWqB9H7GkDILHtGUYdtHGPiycQVsU9lV-OtU8WzFrgNShIfctLm17O6KsLHaN2pSVFpQypnLyc3VzxEcdNh20HoWSOHFU0hhCEtO"
      //   ,  "c5M2luSfiDk:APA91bH-u1Vg4v_F4vDNDUwCcnCzwVBRxEnjq36WxWqB9H7GkDILHtGUYdtHGPiycQVsU9lV-OtU8WzFrgNShIfctLm17O6KsLHaN2pSVFpQypnLyc3VzxEcdNh20HoWSOHFU0hhCEtO"
      // ], payload)

    });
//functions.database.ref("")


// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.post('/add', async (req, res) => {
  try {
    let requestBody = req.body;
    let addOrder = await admin.firestore().collection("orders").add(requestBody)
    console.log(JSON.stringify(addOrder));
    res.end("Received Add POST request!");
  }catch (e) {
    console.log(e)
    res.status(500).send("Unable to parse requests")
  }
});

// Expose Express API as a single Cloud Function:
exports.orders = functions.https.onRequest(app);


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
//
// exports.getOrders = functions.https.onRequest(async (request, response) => {
//   // const promise = admin.firestore().doc("orders/12e7PtvO1cNquN1ipyu3").get();
//   // promise.then((snapshot) => {
//   //   const data = snapshot.data();
//   //   response.send(data)
//   // }).catch((error) => {
//   //   console.log(error);
//   //   response.status(500).send(error);
//   // })
//   try {
//
//     // let snapshot = await admin.firestore().collection("orders").get()
//     // //console.log(snapshot.data())
//     // let output = null;
//     // snapshot.forEach(doc => {
//     //   output += doc.data();
//     //   console.log(output)
//     // })
//     // response.setHeader("Content-Type", "application/json; charset=utf-8");
//     response.send("Done:)")
//   } catch (error) {
//     console.log(error)
//     response.status(500).send('{"error": "Unable to parse request"}')
//   }
// });
//
//
