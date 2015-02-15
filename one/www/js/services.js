
angular.module('starter.services', [])

.factory('ItemService', [ function(){
	var _items = [ "one", "two", "three", "four"];
	return  {
		getAllItems : function() {
			return _items;
		}
	}
}])

.factory('test', ['$resource', 'KINVEY', function ($resource, KINVEY) {

    /**
    */
    function genericErrorHandler(_error) {
    	console.log(_error.data);
    	$scope.response = _error.data;
    }

    var reqHeaders = {
    	'Authorization': KINVEY.auth
    };

    var User = $resource(KINVEY.baseUrl + ":_id",{},
    {
        
        	'query': {
        		headers: reqHeaders,
        		isArray: true
        	},
        	
        	'get': {
        		headers: reqHeaders
        	},
        });

    return User;
}]);