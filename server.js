const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const passport = require('passport');
const flash = require('connect-flash')
const session = require('express-session')
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var configDB = require('./config/database.js');



// configuration ===============================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gildredUsers").then(console.log('connected.'));

const db = require('./models/user.js');

require('./config/passport')(passport); // pass passport for configuration

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Define API routes here
require("./routes/apiRoutes")(app, passport, db)

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
