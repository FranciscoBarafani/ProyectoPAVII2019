//Angular-JS
myApp = angular.module('myApp', []);
myApp.controller('index', function ($scope) {

    //Show And Hide Functions  //CREAR UNA FUNCION UNICA POR ID??
    //Variables Initiation
    $scope.shExpedients = true; //Starts with true as default
    $scope.shNew = false;
    $scope.shModify = false;
    //sh references ShowHide (variable with flag to show or hide div)
    $scope.ShowHideExpedients = function () {
        $scope.shExpedients = true;
        $scope.shNew = false;
        $scope.shModify = false;
    }
    $scope.ShowHideNew = function () {
        $scope.shExpedients = false;
        $scope.shNew = true;
        $scope.shModify = false;
    }
    $scope.ShowHideModify = function () {
        $scope.shExpedients = false;
        $scope.shNew = false;
        $scope.shModify = true;
    }

});
