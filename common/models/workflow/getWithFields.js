module.exports = function (wf) {
  wf.getWithFields = function (id, cb) {
    var Field = this.app.models.Field;
    var FieldItems = this.app.models.FieldItems;

    wf.findById(id, function (er, workflow) {
      if (er) throw er;

      if (!workflow) {
        cb(null, {});
      }

      workflow.fields(function (er, fields) {
        if (er) throw er;

        var ids = [];
        fields.forEach(function (item) {
          ids.push(item.id);
        });

        FieldItems.find({where: {fieldId: {inq: ids}}})
          .then(function (fItems) {

            fields.forEach(function (field) {
              fItems.forEach(function (item) {
                if (field.id === item.fieldId) {
                  field.itemsList ? field.itemsList.push(item) : field.itemsList = [item];
                }
              });
            });

            workflow.fieldsList = fields;

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
