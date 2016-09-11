module.exports = function(Issue) {
  Issue.disableRemoteMethod('create', true);
  require('./issue/create')(Issue);
};
