module.exports = function (p) {
  p.getProjectFields = function (id) {
    var wf = this.app.models.Workflow;
    return new Promise(function (resolve) {
      p.findById(id)
        .then(function (project) {
          if (!project) resolve({});

          wf.getWithFields(project.workflowId).then(function (workflow) {
            resolve(workflow.fieldsList);
          });
        });
    });
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
