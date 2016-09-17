module.exports = function (i) {
  i.search = function (fitems, assigned) {
    return i.find({
      include: ['assignee', 'fields']
    }).then(function (data) {
      return data.filter(function (issue) {
        var issue = issue.toJSON(),
          fields = [];
        issue.fields.forEach(function (field) {
          for (var key in fitems) {
            if (fitems[key].length === 0) delete fitems[key];
            if (field.fieldId === Number(key) && fitems[key] && fitems[key].indexOf(field.fieldItemsId) >= 0) {
              fields.push({});
            }
          }
        });
        return Object.keys(fitems).length === fields.length;
      });
    });
  };
  i.remoteMethod(
    'search',
    {
      accepts: [
        {arg: 'fitems', type: 'object'},
        {arg: 'assigned', type: 'array'}
      ],
      http: {path: '/search', verb: 'POST'},
      returns: {root: true}
    });
};
