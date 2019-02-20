(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var $ctrl = this;
  
  $ctrl.info = {};

  $ctrl.submit = function() {
      MenuService.getMenuItem($ctrl.info.favorite)
        .then(function(response) {
          $ctrl.invalidFavorite = false;
          $ctrl.submitted = true;
          MenuService.setInfo($ctrl.info);
        })
        .catch(function() {
          $ctrl.invalidFavorite = true;
        });


    }

    $ctrl.validateFavorite = function() {
      MenuService.getMenuItem($ctrl.info.favorite)
        .then(function () {
          $ctrl.invalidFavorite = false;
        })
        .catch(function() {
          $ctrl.invalidFavorite = true;
        });
    }
  
}


})();
