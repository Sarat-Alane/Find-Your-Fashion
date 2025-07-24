
function authenticateUser(req, res, next) {
    if (req.session && req.session.user) {
        req.user = req.session.user;
        next();
    }
    else{
        req.user=null
        next()
    }
}
function authenticateAdmin(req, res, next) {
    if (req.session && req.session.admin) {
        req.admin = req.session.admin;
        next();
    }
    else{
        req.admin=null
        next()
    }
}
module.exports = authenticateUser,authenticateAdmin;
