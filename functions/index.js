const { join } = require("path");
const functions = require("firebase-functions");
const { createApp } = require("@remix-run/serve");

exports.remix = functions.https.onRequest((request, response) => {
  const app = createApp(join(process.cwd(), "build", "index.js"));
  return app(request, response);
});
