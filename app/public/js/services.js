'use strict';

angular.module('myApp.services', [])

	//! values
	// Set values for use in page title

	.value('appName', 'Angular Hapi Couch')
	.value('separator', ' - ')

    //! responseHandler
    .factory('responseHandler', function ($q, $location) {
        
        function success(response) {
                    
            return response;
        }
    
        function error(response) {
            
            if (response.status === 404) {
                                    
                // allow 404 partial to be shown despite 404 error
                return response;
            }
            
            // otherwise, default behaviour
            return $q.reject(response);
        }
    
        return function (promise) {
        
            return promise.then(success, error);
        };
    });