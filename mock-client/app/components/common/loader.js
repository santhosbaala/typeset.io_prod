// Generated by CoffeeScript 1.7.1
angular.module('ts.util').factory('LoaderBoxService', [
  function() {
    var loader, _display, _hide;
    loader = {
      refCount: 0
    };
    _display = function() {
      if (loader.refCount >= 0) {
        return loader.refCount += 1;
      } else {
        return loader.refCount = 1;
      }
    };
    _hide = function() {
      if (loader.refCount > 0) {
        return loader.refCount -= 1;
      } else {
        return loader.refCount = 0;
      }
    };
    return {
      loader: loader,
      display: _display,
      hide: _hide
    };
  }
]);

angular.module('ts.util').controller('LoaderBoxController', [
  '$scope', 'LoaderBoxService', function($scope, LoaderBoxService) {
    return $scope.loader = LoaderBoxService.loader;
  }
]);

//# sourceMappingURL=loader.map
