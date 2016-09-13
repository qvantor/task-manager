module.exports = function (wf) {
  wf.getWithFields = function (id, cb) {
    return  wf.findById(id,{
      include:{
        relation:'fields',
        scope:{
          include: {
            relation:'items'
          }
        }
      }
    });
  };

  wf.remoteMethod(
    'getWithFields',
    {
      accepts: [{arg: 'id', type: 'number', required: true}],
      http: {path: '/getWithFields/:id', verb: 'GET'},
      returns: {root: true}
    }
  );
};
