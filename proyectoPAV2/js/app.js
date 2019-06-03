
//Angular-JS
myApp = angular.module('myApp', ['ngRoute']);
//SPA 
myApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

myApp.config(function ($routeProvider) {

    //Configuracion de las rutas
    $routeProvider
        .when('/expedientes', {
            templateUrl: '/expedientes.html',
            controller: 'index'
        })

        .when('/nuevo', {
            templateUrl: '/nuevo.html',
            controller: 'nuevo'
        })

        .when('/modificar', {
            templateUrl: '/modificar.html',
            controller: 'modificar'
        })

});

myApp.controller('modificar', function ($scope) {
    $scope.message = 'Modificar';
});

myApp.controller('nuevo', function ($scope) {
    $scope.message = 'Nuevo';
});


myApp.controller('index', function ($scope) {

    //JSON DEFAULT OBJECTS CREATION
    //Default Expedients Variable
    $scope.expedients = [
        {
            "id": "1",
            "numero": "21756396/19",
            "fecha": "2019-04-10",
            "suceso": "accidente",
            "lugar": "Aeropuerto General Pico (Sazg) (La Pampa)",
            "fase": "Aterrizaje",
            "aeronave": "Avion",
            "marca": "LUSCOMBE",
            "modelo": "8-E",
            "matricula": "LV-RUM",
            "estado": "En Curso"
        },
        {
            "id": "2",
            "numero": "21228075/19",
            "fecha": "2019-04-07",
            "suceso": "accidente",
            "lugar": "Localidad Gral. Lamadrid (Buenos Aires)",
            "fase": "Aterrizaje",
            "aeronave": "Avion",
            "marca": "TECNAM",
            "modelo": "P-92",
            "matricula": "LV-S026",
            "estado": "En Curso"
        },
        {
            "id": "3",
            "numero": "19795900/19",
            "fecha": "2019-04-01",
            "suceso": "Incidente grave",
            "lugar": "Aeropuerto Morón (Buenos Aires)",
            "fase": "Aterrizaje",
            "aeronave": "Avion",
            "marca": "CESSNA",
            "modelo": "C-150",
            "matricula": "LV-CRR",
            "estado": "En Curso"
        },
        {
            "id": "4",
            "numero": "19795900/18",
            "fecha": "2018-05-03",
            "suceso": "Accidente grave",
            "lugar": "Aeropuerto Taravella(Cordoba)",
            "fase": "Despegue",
            "aeronave": "Avion",
            "marca": "BOEING",
            "modelo": "737-800",
            "matricula": "LV-ADQ",
            "estado": "En Curso"
        },
        {
            "id": "5",
            "numero": "19735900/19",
            "fecha": "2019-03-23",
            "suceso": "Incidente grave",
            "lugar": "Aeropuerto Morón (Buenos Aires)",
            "fase": "Rodaje",
            "aeronave": "Avion",
            "marca": "CESSNA",
            "modelo": "C-150",
            "matricula": "LV-RCF",
            "estado": "En Curso"
        },
        {
            "id": "6",
            "numero": "19795920/18",
            "fecha": "2018-01-03",
            "suceso": "Incidente",
            "lugar": "Aeropuerto Fza Aerea Cordoba",
            "fase": "Aterrizaje",
            "aeronave": "Avion",
            "marca": "EMBRAER",
            "modelo": "Tucano",
            "matricula": "LV-PPR",
            "estado": "En Curso"
        },
        {
            "id": "7",
            "numero": "19333900/19",
            "fecha": "2017-11-02",
            "suceso": "Incidente grave",
            "lugar": "Aeropuerto Ezeiza",
            "fase": "Rodaje",
            "aeronave": "Avion",
            "marca": "AIRBUS",
            "modelo": "A-320",
            "matricula": "NN-CLR3",
            "estado": "En Curso"
        }
      
    ];

    //Add Expedient Function
    $scope.addExpedient = function () {
        $scope.expedients.push({
            "id": 8,
            "numero": $scope.inputNumero,
            "fecha": $scope.inputFecha,
            "suceso": $scope.inputSuceso,
            "lugar": $scope.inputLugar,
            "fase": $scope.inputFase,
            "aeronave": $scope.inputAeronave,
            "marca": $scope.inputMarca,
            "modelo": $scope.inputModelo,
            "matricula": $scope.inputMatricula,
            "estado": $scope.inputEstado
        });
        alert("Expediente Agregado");
    };
});





