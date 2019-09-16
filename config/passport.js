const passport = require('passport-local').Strategy;
const Pool = require('pg');

module.exports = function(passport){
    passport.use(
      new LocalStrategy({usernameField:'email',passwordField:'passwd'},
      (email,password,done)=>{
          console.log('Email : '+email);
          console.log('Password : '+passwd);

      }
    )
 );

 passport.serializeUser(function(user, done) {
    done(null, user);
 });

  passport.deserializeUser(function(user, done) {
      done(null, user);
  });

};