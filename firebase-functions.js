const remix = require("@remix-run/serve");
const functions = require("firebase-functions");
const path = require("path");

exports.app = functions.https.onRequest(
  remix.createApp(path.join(process.cwd(), "build"))
);
