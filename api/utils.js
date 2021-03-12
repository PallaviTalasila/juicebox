function requireUser(req, res, next) {
    if (!req.user) {
      next({
        name: "MissingUserError",
        message: "You must be logged in to perform this action"
      });
    }
  
    next();
  }

  function requireActiveUser(req, res, next) {
    if (!req.user.active) {
      next({
        name: "UserInactiveError",
        message: "That user is inactive"
      });
    }
  
    next();
  }
  
  module.exports = {
    requireUser,
    requireActiveUser
  }