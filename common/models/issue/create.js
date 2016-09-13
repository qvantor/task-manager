module.exports = function (i) {
  var sanitize = require('sanitize-html');
  var _ = require('underscore-node');

  i.add = function (data) {
    var app = this.app;
    return new Promise(function (resolve, reject) {
      data.creatorId = app.user.id;
      data.created = new Date();
      data.text = sanitize(data.text, app.config.sanitize);

      i.create(data)
        .then(function (issue) {
          issue.fields.create(data.fields, function (err, fields) {
            if (err) reject(err);

            issue.assignee.create(data.assigned, function (err, assigned) {
              if (err) reject(err);

              resolve(issue);
            });
          });
        })
        .catch(reject);
    });
  };
  i.remoteMethod(
    'add',
    {
      accepts: [{arg: 'data', type: 'object'}],
      http: {path: '/', verb: 'POST'},
      returns: {root: true}
    });
};
