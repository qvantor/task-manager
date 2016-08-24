var app = require('./server/server');
var fs = require('fs');

var dataSource = app.dataSources.db;

var models = [
  'user',
  'AccessToken',
  'ACL',
  'RoleMapping',
  'Role'
];

models.forEach(function (model) {
  dataSource.autoupdate(model, function (err) {
    if (!err) {
      console.log(model + ' Table Created');
    } else {
      console.log(err);
    }
  });
});
