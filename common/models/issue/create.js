module.exports = function (i) {
  i.add = function (data) {
    return new Promise(function (resolve, reject) {
      i.create(data)
        .then(function (issue) {
          resolve(1);
        })
        .catch(reject);
    });
  };
  i.remoteMethod(
    'add',
    {
      accepts: [{arg: 'data', type: 'object'}],
      http: {path: '/', verb: 'POST'},
      returns: {root: true}
    });
};
