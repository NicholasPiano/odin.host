
/*

Util.js

Contains commonly used shortcuts and utilities

*/

var _ = {

  // promises
  p: function (arg) {
    return new Promise(function (resolve, reject) {
      resolve(_.is.f(arg) ? arg() : arg);
    });
  },
  all: function (list) {
    return Promise.all((list || []));
  },

  // console
  l: console.log,

  // tests
  is: {
    f: function (obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    },
  },
}
