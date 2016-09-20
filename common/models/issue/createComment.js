module.exports = function (i) {
  var sanitize = require('sanitize-html');

  i.beforeRemote('*.__create__comments', function (ctx, modelInstance, next) {
    ctx.args.data.userId = i.app.user.id;
    ctx.args.data.text = sanitize(ctx.args.data.text, i.app.config.sanitize);
    ctx.args.data.created = new Date();
    next();
  });

};
