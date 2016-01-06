var app = angular.module('login', []);

app.controller('MainCtrl', function($scope, $http) {  

  $scope.myusers = [{
    username: 'user1',
    password: '123'  
  }];

  $scope.submit = function() {    
     //console.log($scope.myusers[0].username);

    if ( ($scope.username == $scope.myusers[0].username && $scope.password == $scope.myusers[0].password) ) 
     {  
      //window.location.replace("http://teenathomas.pcriot.com/home");
      
      $http({
        method: 'POST',
        url: '../home',
        data: { name : 'test'},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
       }).then(function(response) {
            // success
            console.log(response);
    }, 
    function(response) { // optional
            // failed
    });
            

    } else {
      alert("Invalid Login");
    }
  }
});