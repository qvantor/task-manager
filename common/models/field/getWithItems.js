module.exports = function (f) {
  f.getWithFields = function (id) {
    return new Promise(function (resolve) {
      f.findById(id)
        .then(function (field) {
          if (!field)
            resolve({});

          field.items(function (er, items) {
            if (er) throw  er;

            field.itemsList = items;

            resolve(field);
          });
        });
    });
  };

  f.remoteMethod(
    'getWithFields',
    {
      accepts: [{arg: 'id', type: 'number', required: true}],
      http: {path: '/getWithItems/:id', verb: 'GET'},
      returns: {root: true}
    }
  );
};
