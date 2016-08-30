module.exports = function (Workflow) {
  require('./workflow/getWithFields')(Workflow);
  require('./workflow/createWithFields')(Workflow);
};
