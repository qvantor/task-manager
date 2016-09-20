module.exports = function (i) {
  i.getComments = function (id) {
    return this.app.models.Comment.find(
      {
        where: {issueId: id, parentId: null},
        include: ['comments']
      }
    )
  };
  i.remoteMethod(
    'getComments',
    {
      accepts: [{arg: 'id', type: 'number', required: true}],
      http: {path: '/:id/comments', verb: 'GET'},
      returns: {root: true}
    });
};
