const db=require("../models");
const router = require('express').Router();

router.get('/test', (req, res) => {
    db.User.create({
        username: 'Diarmuid',
        password: 'password1234',
        email: 'peter.pan@gmail.co.uk'
    }).then(() => {
        res.send('Test working.');
    });
 
});

router.post('/login', (req, res) => {
    var user = new User(req.body);
    User.create(user)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);

    });
});

module.exports = router;