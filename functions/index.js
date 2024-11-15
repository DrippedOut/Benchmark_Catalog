const { onRequest } = require("firebase-functions/v2/https");

exports.sayHello = onRequest(
  {
    cors: true,  // Enable CORS for cross-origin requests
  },
  (req, res) => {
    res.status(200).send("Hello world!");
  }
);
