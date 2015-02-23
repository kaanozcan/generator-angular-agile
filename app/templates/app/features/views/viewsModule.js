(function () {
  var module = angular
    .module('app.views',[])
    .config(['$controllerProvider', function ($controllerProvider) {
      module.controllerProvider = $controllerProvider;
    }]);

  window.APPVIEWS = module;
})();
