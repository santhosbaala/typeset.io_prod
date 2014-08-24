// Generated by CoffeeScript 1.7.1
angular.module('research').controller('ResearchEditorController', [
  '$scope', 'ResearchFactory', function($scope, ResearchFactory) {
    var docid;
    $scope.status = 'CONNECTING';
    docid = $.QueryString['d'];
    if (docid) {
      console.log('[ResearchEditorController]: Connecting...');
      ResearchFactory.connect(docid).then(function() {
        return console.log('[ResearchEditorController]: Connected');
      }, function(error) {
        console.log('[ResearchEditorController]: Connection Failed!');
        return console.log(error);
      });
    } else {
      $scope.status = 'ERROR';
    }
    $scope.storage = ResearchFactory.storage;
    $scope.addSection = function(index) {
      ResearchFactory.addSection(index);
      return console.log('[ResearchEditorController]: Add Section ' + index);
    };
    $scope.deleteSection = function(id) {
      ResearchFactory.deleteSection(id);
      return console.log('[ResearchEditorController]: Delete Section ' + id);
    };
    $scope.addSubSection = function(section_id, index) {
      ResearchFactory.addSubSection(section_id, index);
      return console.log('[ResearchEditorController]: Add SubSection ' + section_id + ' ' + index);
    };
    return $scope.deleteSubSection = function(section_id, subsection_id) {
      ResearchFactory.deleteSubSection(section_id, subsection_id);
      return console.log('[ResearchEditorController]: Delete SubSection ' + section_id + ' ' + subsection_id);
    };
  }
]);

//# sourceMappingURL=researcheditor.controller.map