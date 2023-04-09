const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Mt7wiGqeqlJKgZDbWoepxzcO0uxGXMOLrv6l3mI9Bun8kjdhPg1zXeIhtDOFxGm0YDMCCR2OJTucHdOrI7g4M6800qzFLE2F7"
);

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// route
app.get("/", (request, response) => response.status(200).send("hello world"));
// - API routes

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  // console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  listening
exports.api = functions.https.onRequest(app);
