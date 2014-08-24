// Generated by CoffeeScript 1.7.1
angular.module('docbrowser', ['socket', 'ts.util']);

angular.module('docbrowser').controller('DocbrowserController', [
  '$scope', 'DocService', 'ActionSheetService', '$window', function($scope, DocService, ActionSheetService, $window) {
    $scope.storage = DocService.storage;
    $scope.listState = 'LOADING';
    DocService.list().then(function(docs) {
      console.log('[DocBrowser]: Loaded docs');
      return $scope.listState = 'LOADED';
    }, function(error) {
      console.log('[DocBrowser]: Error!');
      console.log(error);
      return $scope.listState = 'ERROR';
    });
    $scope.newdoc = function() {
      return ActionSheetService.show('NEW_DOC');
    };
    $scope.openDoc = function(docid) {
      return $window.open('research.html?d=' + docid, '_blank');
    };
    return $scope.deleteDoc = function(doc, $event) {
      ActionSheetService.show('DEL_DOC', doc);
      return $event.stopPropagation();
    };
  }
]);

//# sourceMappingURL=docbrowser.map
