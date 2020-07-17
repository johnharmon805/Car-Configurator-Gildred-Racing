module.exports = function(app, passport) {
    // app.post('/login')

    // app.post('/signup')

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't, redirect them to the home page
    else res.status(401);
}

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));
app.post('/login', function(req, res, next){
    passport.authenticate('local-login', function(err, user, info){
        if (err) return next(err)
        if(!user){return res.json({message: info.message})}
        req.logIn(user, function(err){
            if (err) return next(err)
            return res.json(user)
        })
})(req, res, next);
})
app.get('/profile', isLoggedIn, function(req, res, next){
    res.json({user: req.user, loggedIn: true})
})

};