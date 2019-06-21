const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require('express');
const cors = require('cors');
const app = express();

admin.initializeApp();

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
