module.exports = function (i) {
  i.ById = function (id) {
    return i.findById(id, {
      include:['assignee', 'fields']
    });
  };
  i.remoteMethod(
    'ById',
    {
      accepts: [{arg: 'id', type: 'number', required: true}],
      http: {path: '/:id', verb: 'GET'},
      returns: {root: true}
    });
};
