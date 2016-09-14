module.exports = function(Issue) {
  Issue.disableRemoteMethod('create', true);
  Issue.disableRemoteMethod('findById', true);

  require('./issue/create')(Issue);
  require('./issue/getById')(Issue);
  require('./issue/search')(Issue);
};
