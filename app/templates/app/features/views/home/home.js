(function (module) {
  module
    .controllerProvider
    .register('HomeController', [function () {
      this.title = 'Hello World';
    }]);
})(window._<%= angularMainModuleName %>VIEWS);
