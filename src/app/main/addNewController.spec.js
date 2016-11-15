(function() {
  'use strict';
  describe('Add New Controller', function() {
    var $controller = null;
    var $scope = {};
    var addNewController;

    beforeEach(module('angularChallenge'));
    beforeEach(inject(function(_$controller_) {
      $controller = _$controller_;
      addNewController = $controller("addNewController as vm", { $scope: $scope });
    }));

    it('should be registered', function() {
      expect(addNewController).not.toEqual(null);
    });
  });
})();
