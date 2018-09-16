var exports = module.exports = {}
 

//sign up
exports.signup = function(req, res) {
 
    res.render("signup");
 
}

//sign in
exports.signin = function(req, res) {
 
    res.render("signin");
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect("/");
 
    });
 
}