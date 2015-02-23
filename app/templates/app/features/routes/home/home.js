angular
  .module('app.routes')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/features/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'homeVM'
    });
}]);
