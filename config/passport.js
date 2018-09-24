var LocalStrategy   = require('passport-local').Strategy;
// var mysql = require('mysql');
var dbconfig = require('./database');
// var dbconfig = dbconfig.con;

module.exports = function(passport){
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        dbconfig.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });

    //for Local login
    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done){
            console.log(username)
            dbconfig.query("select * from users where username = '"+ username + "' AND password= '"+ password+"'", function(err, rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false,null); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                // if (!bcrypt.compareSync(password, rows[0].password))
                //     return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done(null, rows[0]);
            });
        }
    )
    )
}