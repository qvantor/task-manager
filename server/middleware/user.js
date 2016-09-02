module.exports = function (app, loopback) {
  app.use(function (req, res, next) {
    if (app.user && req.accessToken && app.user.id === req.accessToken.userId) {
      next();
    } else if (req.accessToken) {
      var user = loopback.findModel('user');
      user.findById(req.accessToken.userId)
        .then(function (data) {
          app.user = data;
          next();
        });
    } else {
      next();
    }
  });
};
