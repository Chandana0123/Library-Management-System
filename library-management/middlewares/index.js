const authMiddleware = require("./auth.middleware");
const authrorizationMiddleware  = require("./authorization.middleware");
const loggedInMiddleware = require("./loggedIn.middleware");

module.exports = {
    authMiddleware,
    authrorizationMiddleware,
    loggedInMiddleware
}