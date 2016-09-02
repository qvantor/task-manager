module.exports = function (wf) {
  wf.getWithFields = function (id, cb) {
    var Field = this.app.models.Field;
    return new Promise(function (resolve) {
      wf.findById(id).then(function (workflow) {
        if (!workflow) {
          resolve({});
        }

        workflow.fields(function (er, fields) {
          if (er) throw er;

          var all = [];
          fields.forEach(function (item) {
            all.push(Field.getWithFields(item.id));
          });
          Promise.all(all).then(function (data) {
            workflow.fieldsList = data;
            resolve(workflow);
          });
        });
      });
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
