module.exports = function (p) {
  p.getProjectFields = function (id) {
    return p.findById(id,
      {include:{
        relation: 'workflow',
        scope:{
          include:{
            relation:'fields',
            scope:{
              include: {
                relation:'items'
              }
            }
          }
        }
      }});
  };
  p.remoteMethod(
    'getProjectFields',
    {
      accepts: [{arg: 'id', type: 'number', required: true}],
      http: {path: '/getProjectFields/:id', verb: 'GET'},
      returns: {root: true}
    }
  );
};
