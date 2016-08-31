module.exports = function (wf) {
  wf.createWithFields = function (id, name, desc, fields, replace, cb) {
    if (replace) {
      wf.findById(id).then(function (workflow) {
        var all = [];
        workflow.fields(function (err, fields) {
          if (err) throw err;

          fields.forEach(function (field) {
            all.push(field.items.destroyAll());
          });
          Promise.all(all).then(function () {
            workflow.fields.destroyAll()
              .then(function () {
                create();
              });
          });
        });
      });
    } else {
      create();
    }
    function create() {
      wf.upsert({
        id: replace ? id : null,
        name: name,
        desc: desc
      }).then(function (workflow) {
        fields.forEach(function (field) {
          if (!replace) field.id = null;
          workflow.fields.create(field, function (er, f) {
            if (er) throw er;

            field.itemsList.forEach(function (item) {
              if (!replace) item.id = null;
              f.items.create(item);
            });
          });
        });

        cb(null, workflow);
      });
    }
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
        },
        {
          arg: 'replace', type: 'boolean', required: true
        }
      ],
      http: {path: '/createWithFields', verb: 'POST'},
      returns: {root: true}
    }
  );
};
