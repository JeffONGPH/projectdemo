var authController = require('../controllers/authcontroller.js');
var passport = require("passport")
module.exports = function(app) {
 
    app.get("/signup", authController.signup);

    app.get("/signin", authController.signin);

    app.get("/logout",authController.logout);

    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/dashboard",
    
        failureRedirect: "/signup"
    }
   
    
    ));

//DASHBOARD
    app.get("/dashboard", isLoggedIn, htmlRoutes);

    app.post("/signin", passport.authenticate("local-signin", {
        successRedirect: "/dashboard",
 
        failureRedirect: "/signin"
    }
 
));

//route protection
// function isLoggedIn(req, res, next) {
 
//     if (req.isAuthenticated())
     
//         return next();
         
//     res.redirect("/signin");
 
// }

}


