module.exports = function (user) {
  user.inviteInTeam = function (list, cb) {
    cb(null, {});
  };

  user.remoteMethod(
    'inviteInTeam',
    {
      accepts: [{arg: 'list', type: 'array', required: true}],
      returns: {root: true}
    }
  );
};
