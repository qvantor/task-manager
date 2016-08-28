module.exports = function (wf) {
  wf.getWithFields = function (id, cb) {
    var Field = this.app.models.Field;
    var FieldItems = this.app.models.FieldItems;

    wf.findById(id, function (er, workflow) {
      if (er) throw er;

      if (!workflow) {
        cb(null, {});
      }

      Field.find({where: {workflowId: workflow.id}}, function (er, fields) {
        if (er) throw er;

        var ids = [];
        fields.forEach(function (item) {
          ids.push(item.id);
        });

        FieldItems.find({where: {fieldId: {inq: ids}}}, function (er, fItems) {
          if (er) throw er;

          fields.forEach(function (field) {
            fItems.forEach(function (item) {
              if (field.id === item.fieldId) {
                field.items ? field.items.push(item) : field.items = [item];
              }
            });
          });

          workflow.fields = fields;

          cb(null, workflow);
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
