// Generated by CoffeeScript 1.7.1
angular.module('docbrowser').factory('DocService', [
  'SocketService', '$q', function(SocketService, $q) {
    var _create, _delete, _list, _rename, _storage;
    _storage = {
      docs: []
    };
    _list = function() {
      var deferred, _ref;
      deferred = $q.defer();
      if ((_ref = SocketService.socket()) != null) {
        _ref.emit('doc.list', null, function(response) {
          if (response.code === 200) {
            _storage.docs = response.data;
            return deferred.resolve(response.data);
          } else {
            return deferred.reject(response.error);
          }
        });
      }
      return deferred.promise;
    };
    _create = function(name) {
      var deferred, _ref;
      if (name == null) {
        name = 'New Document';
      }
      console.log('[DocService]: creating ' + name);
      deferred = $q.defer();
      if ((_ref = SocketService.socket()) != null) {
        _ref.emit('doc.create', {
          name: name
        }, function(response) {
          if (response.code === 200) {
            _storage.docs.unshift(response.data);
            return deferred.resolve(response.data);
          } else {
            return deferred.reject(response.error);
          }
        });
      }
      return deferred.promise;
    };
    _rename = function(id, name) {
      var deferred, _ref;
      deferred = $q.defer();
      if ((_ref = SocketService.socket()) != null) {
        _ref.emit('doc.rename', {
          id: id,
          name: name
        }, function(response) {
          if (response.code === 200) {
            return deferred.resolve();
          } else {
            return deferred.reject(response.error);
          }
        });
      }
      return deferred.promise;
    };
    _delete = function(id) {
      var deferred, _ref;
      deferred = $q.defer();
      if ((_ref = SocketService.socket()) != null) {
        _ref.emit('doc.delete', {
          id: id
        }, function(response) {
          var i, _i, _ref1;
          if (response.code === 200) {
            for (i = _i = 0, _ref1 = _storage.docs.length - 1; 0 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
              if (_storage.docs[i]._id === id) {
                _storage.docs.splice(i, 1);
                break;
              }
            }
            return deferred.resolve();
          } else {
            return deferred.reject(response.error);
          }
        });
      }
      return deferred.promise;
    };
    return {
      storage: _storage,
      create: _create,
      rename: _rename,
      "delete": _delete,
      list: _list
    };
  }
]);

//# sourceMappingURL=doc.service.map