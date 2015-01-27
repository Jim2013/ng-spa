/**
 * 
 * @authors Jim (developer.lao@gmail.com)
 * @date    2015-01-27 16:46:01
 * @version $Id$
 */

// create the module and name it ngSpa
    var ngSpa = angular.module('ngSpa', ['ngRoute']);

    // configure our routes
    ngSpa.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            .otherwise({
            redirectTo: '/'
            });
    });

    // create the controller and inject Angular's $scope
    ngSpa.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    ngSpa.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    ngSpa.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });