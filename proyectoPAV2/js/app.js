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
    };
    $scope.ShowHideNew = function () {
        $scope.shExpedients = false;
        $scope.shNew = true;
        $scope.shModify = false;
    };
    $scope.ShowHideModify = function () {
        $scope.shExpedients = false;
        $scope.shNew = false;
        $scope.shModify = true;
    };



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
        },
      
    ];
     
});


//JS
