var app = angular.module('login', []);

app.controller('MainCtrl', function($scope, $http) {  

   $scope.submit = function() {   
     
      var user = "name=" + $scope.username + "&pwd=" +  $scope.password;       
      //console.log(user);     
              
      $http({
            method : 'POST',
            url : '../validation/index.php',
            data: user,
            headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}  
           }).then(function successCallback(response){
               //console.log(response.data);
                        
              if ( response.data.success == false  ) 
              {
                  alert("Invalid Login");                  
              } 
              else
              {
            	 window.location.replace("http://teenathomas.pcriot.com/home");
              }
             
           }, function errorCallback(error) {
               console.log(error);
        });       
   
    
  }
  
});