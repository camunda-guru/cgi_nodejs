/**
 * Created by BALASUBRAMANIAM on 11/09/2017.
 */
mainAApp.controller('UserController',['$scope',function($scope)
{
    $scope.user={
        clientName:"",
        location:""
    }
    $scope.save=function()
    {
        console.log($scope.user);
    }

}])