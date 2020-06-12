const users = require('../models/user/user-model.js');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    next('Invalid Login no auth headers');
  } else {
    const [auth, token] = req.headers.authorization.split(' ');
    if (auth === 'Bearer') {
      users
        .authenticateToken(token)
        .then((validUser) => {
          console.log(validUser);
          
          req.user = {
            username : validUser.username,
            capabilities : validUser.capabilities,
          };
          next();
        });
      // .catch((e) => next('Invalid login', e.message));
    } else {
      next('Invalid auth header');
    }
  }
};