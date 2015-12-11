'use strict';

angular.module('myApp', [])
  .controller('ForcastController', function($scope, $http) {
    fetch();
    function fetch(city) {
      var url="http://api.openweathermap.org/data/2.5/forecast?q=Dhaka,us&mode=json&appid=6ab5a4636cb310fa6665dd1807193a01";
      if(city!=undefined)
      {
        url="http://api.openweathermap.org/data/2.5/forecast?q="+city+",us&mode=json&appid=6ab5a4636cb310fa6665dd1807193a01";
      }

      $http.get(url)
        .success(function(response) 
        {
          $scope.fdy = response;
        });
    }

    $scope.search=function(){
        var city=$scope.cityQuery;
        console.log(city);
        fetch(city);
    };

  })

  .filter('timestampToDate', function() {
      return function(input) {
        if( input==null || input.length === 0 ){
          return null;
        }
        else
        {  
            var d = new Date(input * 1000);
            var yyyy = d.getFullYear();
            var mm = ('0' + (d.getMonth() + 1)).slice(-2);
            var dd = ('0' + d.getDate()).slice(-2);
            var time = yyyy + '-' + mm + '-' + dd;
            return time;
        }
      }
  });