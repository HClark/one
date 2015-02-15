
angular.module('starter.controllers', [])

.controller('HomeController', ['$scope','ItemService', '$ionicModal','$state', 'test',
	function($scope, ItemService, $ionicModal, $state, test){


		$scope.items = test.query();
         $scope.closeModal = function(_save) {
         	if (_save) {
         		console.debug("saving the data");
         		console.debug(JSON.stringify($scope.newEntry));

         	}
         	$scope.modal.hide();
         };
		$scope.$on('$destroy', function() {
			$scope.newEntry = null;
			$scope.modal.remove();
		});

    $scope.getData = {};
 

    function genericErrorHandler(_error) {
        console.log(_error.data);
        $scope.response = _error.data;
    }
         $scope.doList = function () {
        
            test.query()
            .$promise.then(function (_response) {
                $scope.response = _response;
            }).catch(genericErrorHandler);
        };
         $scope.doGet = function () {

            if (!$scope.getData.id) {
                $scope.doList();
                return;
            }

            test.get({_id: $scope.getData.id})
            .$promise.then(function (_response) {
                $scope.response = _response;
            }).catch(genericErrorHandler);

        };

$scope.data = {
    showDelete: false
  };
  

  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };

    }])




