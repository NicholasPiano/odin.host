
var UI = function () {
  // app object
  this.App = function (context) {
    // context allows the app to access certain UI variables in order to register actions, states, and components
    // context = {
    //   action: UI.Action,
    //   binding: UI.Binding,
    //   data: {
    //     auth: 'auth address',
    //     app: 'app address',
    //   },
    // }

    // 1. disable access to global variables within the app closure
    var window;

    // 2. set up root namespace for incoming data
    this.ns = {
      context: {},
      active: {},
      components: {},
    }
  }
  var _app = this.App;
  _app.prototype = {
    context: {
      get: function () {
        this.load();
      },
      load: function () {
        console.log(_app.prototype);
      },
    },
  }

  // component object
  this.Component = function (name) {
    this.name = name;
  }
  this.Component.prototype = {

  }


  // state object


  // keyboard bindings

  // actions
  this.Action = function () {

  }
}

var ui = new UI();
