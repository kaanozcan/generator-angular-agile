angular
  .module('<%= angularMainModuleName %>.routes')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'dist/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'homeVM',
      resolve: {
        load: ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
          var defer = $q.defer();

          $http.get('dist/views/home/home.js')
            .then(function (response) {
              eval(response.data);
              $rootScope.$evalAsync();
              defer.resolve();
            }, function(err){
              defer.reject(err);
            });

          return defer.promise;
        }]
      }
    });
}]);
