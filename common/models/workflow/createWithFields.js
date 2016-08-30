module.exports = function (wf) {
  wf.createWithFields = function (id, name, desc, fields, cb) {
    wf.create({
      name: name,
      desc: desc
    }).then(function (workflow) {
      fields.forEach(function (field) {
        workflow.fields.create(field, function (er, f) {
          if(er) throw er;

          field.itemsList.forEach(function (item) {
            f.items.create(item);
          });
        });
      });

      cb(null, workflow);
    });
  };

  wf.remoteMethod(
    'createWithFields',
    {
      accepts: [
        {
          arg: 'id', type: 'number'
        },
        {
          arg: 'name', type: 'string', required: true
        },
        {
          arg: 'desc', type: 'string'
        },
        {
          arg: 'fieldsList', type: 'array', required: true
        }
      ],
      http: {path: '/createWithFields', verb: 'POST'},
      returns: {root: true}
    }
  );
};
