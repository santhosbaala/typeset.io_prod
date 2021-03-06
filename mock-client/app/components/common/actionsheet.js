// Generated by CoffeeScript 1.7.1
angular.module('ts.util').factory('ActionSheetService', [
  function() {
    var _hide, _register, _registeredSheets, _sheets, _show, _unRegister;
    _registeredSheets = {};
    _sheets = {
      visibleSheets: []
    };
    _register = function(sheetName, templateURL) {
      console.log('[ActionSheetService]: register');
      return _registeredSheets[sheetName] = templateURL;
    };
    _unRegister = function(sheetName) {
      console.log('[ActionSheetService]: unRegister');
      if (_registeredSheets.hasOwnProperty(sheetName)) {
        return delete _registeredSheets[sheetName];
      }
    };
    _show = function(sheetName, data) {
      if (data == null) {
        data = null;
      }
      console.log('[ActionSheetService]: show');
      if (_registeredSheets.hasOwnProperty(sheetName)) {
        return _sheets.visibleSheets.push({
          templateURL: _registeredSheets[sheetName],
          data: data ? data : {}
        });
      }
    };
    _hide = function(sheetName) {
      var findSheetIdx, hideSheet, idx;
      console.log('[ActionSheetService]: hide');
      if (_registeredSheets.hasOwnProperty(sheetName)) {
        hideSheet = function(sheetIdx) {
          return _sheets.visibleSheets.splice(sheetIdx, 1);
        };
        findSheetIdx = function(templateURL) {
          var i, _i, _ref;
          for (i = _i = 0, _ref = _registeredSheets.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
            if (_sheets.visibleSheets[i].templateURL === templateURL) {
              return i;
            }
          }
          return null;
        };
        idx = findSheetIdx(_registeredSheets[sheetName]);
        if (idx >= 0) {
          return hideSheet(idx);
        }
      }
    };
    return {
      sheets: _sheets,
      register: _register,
      unRegister: _unRegister,
      show: _show,
      hide: _hide
    };
  }
]);

angular.module('ts.util').controller('ActionSheetController', [
  '$scope', 'ActionSheetService', function($scope, ActionSheetService) {
    return $scope.sheets = ActionSheetService.sheets;
  }
]);

//# sourceMappingURL=actionsheet.map
