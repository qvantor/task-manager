module.exports = function (app, loopback) {
  require('./user')(app, loopback);
  //@todo replace to config file
  app.config = {
    sanitize: {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'blockquote', 'ul', 'li', 'ol', 'pre', 'hr', 'p', 'br', 'u', 'sup', 'sub']
    }
  };
};
