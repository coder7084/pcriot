var app = angular.module('home', ['ngRoute']);

// configure our routes
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider

           // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainCtrlHome'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'contactController'
            });
            
            // use the HTML5 History API
           //$locationProvider.html5Mode(true);
    });

    app.controller('mainCtrlHome', function($scope, $http) {     

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
    
    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });