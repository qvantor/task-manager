module.exports = function (i) {
  var _ = require('underscore-node');

  i.search = function (fitems, assigned) {
    return i.find({
      include: ['assignee', 'fields']
    }).then(function (data) {
      var issues = [];
      data.forEach(function (issue) {
        var issue = issue.toJSON(),
          assignee = false,
          fields = false;

        if (fitems.length > 0) {
          for (var key in issue.fields) {
            if (fitems.indexOf(issue.fields[key].fieldItemsId) >= 0) {
              fields = true;
              break;
            }
          }
        } else fields = true;

        if (assigned.length > 0) {
          for (var key in issue.assignee) {
            if (assigned.indexOf(issue.assignee[key].userId) >= 0) {
              assignee = true;
              break;
            }
          }
        } else assignee = true;

        if (fields && assignee) {
          issues.push(issue);
        }
      });

      return issues;
    });
  };
  i.remoteMethod(
    'search',
    {
      accepts: [
        {arg: 'fitems', type: 'array'},
        {arg: 'assigned', type: 'array'}
      ],
      http: {path: '/search', verb: 'GET'},
      returns: {root: true}
    });
};
