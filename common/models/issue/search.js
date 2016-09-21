module.exports = function (i) {
  i.search = function (projectId, fitems, assigned, limit, offset) {
    return i.find({
      where: {projectId: projectId},
      include: ['assignee', 'fields']
    }).then(function (data) {
      return data.filter(function (issue) {
        var issue = issue.toJSON(),
          fields = [],
          assignedArr = [];

        issue.fields.forEach(function (field) {
          for (var key in fitems) {
            if (fitems[key].length === 0) delete fitems[key];
            if (field.fieldId === Number(key) && fitems[key] && fitems[key].indexOf(field.fieldItemsId) >= 0) {
              fields.push({});
            }
          }
        });

        issue.assignee.forEach(function (assignee) {
          if (assigned.indexOf(assignee.userId) >= 0) {
            assignedArr.push({});
          }
        });

        return Object.keys(fitems).length === fields.length
          && assigned.length === assignedArr.length;
      }).splice(offset || 0, limit || 20);
    });
  };
  i.remoteMethod(
    'search',
    {
      accepts: [
        {arg: 'projectId', type: 'number', required: true},
        {arg: 'fitems', type: 'object'},
        {arg: 'assigned', type: 'array'},
        {arg: 'limit', type: 'number'},
        {arg: 'offset', type: 'number'}
      ],
      http: {path: '/search', verb: 'POST'},
      returns: {root: true}
    });
};
