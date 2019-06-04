
//Angular-JS
myApp = angular.module('myApp', ['ngRoute']);
//SPA 
myApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

myApp.config(function ($httpProvider, $routeProvider) {

  $httpProvider.interceptors.push('myHttpInterceptor');

  //Configuracion de las rutas
  $routeProvider
    .when('/expedientes', {
      templateUrl: '/expedientes.html',
      controller: 'expedientes'
    })

    .when('/nuevo', {
      templateUrl: '/nuevo.html',
      controller: 'nuevo'
    })

    .when('/modificar', {
      templateUrl: '/modificar.html',
      controller: 'modificar'
    })
    .otherwise({
      redirectTo: '/expedientes'

    });

});

myApp.service('myService', function ($timeout) {
  this.Alert = function (dialogText, dialogTitle) {
    var alertModal = $('<div class="modal fade" id="myModal"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h4>' + (dialogTitle || 'Atención') + '</h4> <button type="button" class="close" data-dismiss="modal">&times;</button> </div> <div class="modal-body"><p>' + dialogText + '</p></div><div class="modal-footer"><button type="button" class="btn" data-dismiss="modal">Cerrar</button></div></div></div></div>');
    $timeout(function () { alertModal.modal(); });
  };

  this.Confirm = function (dialogText, okFunc, cancelFunc, dialogTitle, but1, but2) {
    var confirmModal = $('<div class="modal fade" id="myModal"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h4>' + dialogTitle + '</h4> <button type="button" class="close" data-dismiss="modal">&times;</button> </div> <div class="modal-body"><p>' + dialogText + '</p></div><div class="modal-footer"><button ID="SiBtn" class="btn" data-dismiss="modal">' + (but1 === undefined ? 'Si' : but1) + '</button><button type="button" ID="NoBtn" class="btn" data-dismiss="modal">' + (but2 === undefined ? 'No' : but2) + '</button></div></div></div></div >');
    confirmModal.find('#SiBtn').click(function (event) {
      if (okFunc)
        okFunc();
      confirmModal.modal('hide');
    });
    confirmModal.find('#NoBtn').click(function (event) {
      if (cancelFunc)
        cancelFunc();
      confirmModal.modal('hide');
    });
    $timeout(function () { confirmModal.modal(); });
  };
  // bloqueo / desbloqueo de pantalla
  // https://www.w3schools.com/bootstrap4/bootstrap_modal.asp
  // https://www.w3schools.com/bootstrap4/bootstrap_progressbars.asp
  var contadorBloqueo = 0;
  var $dialog = $(
    '<div class="modal" id="myModal">' +
    ' <div class="modal-dialog">' +
    '   <div class="modal-content">' +
    '     <!-- Modal Header -->' +
    '     <div class="modal-header">' +
    '       <h5 class="modal-title">Espere por favor..</h5>' +
    '     </div>' +
    '     <!-- Modal body -->' +
    '     <div class="modal-body">' +
    '        <div class="progress">' +
    '        	 <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:100%">' +
    '	    </div>' +
    '      </div>' +
    '   </div>' +
    ' </div>' +
    '</div>');
  this.BloquearPantalla = function () {
    contadorBloqueo++;
    if (contadorBloqueo === 1)
      $dialog.modal();
  };
  this.DesbloquearPantalla = function () {
    contadorBloqueo--;
    if (contadorBloqueo === 0)
      $timeout(function () { $dialog.modal('hide'); }, 100); //dentro de un timeout para que angular actualice la pantalla
  };
});

myApp.factory('myHttpInterceptor', function ($q, myService) {
  // factory retorna un objeto
  var myHttpInterceptor = {
    request: function (config) {
      myService.BloquearPantalla();
      return config;
    },
    requestError: function (config) {
      return config;
    },
    response: function (response) {
      myService.DesbloquearPantalla();
      return response;
    },
    responseError: function (response) {
      myService.DesbloquearPantalla();
      // acceso denegado generado por alguna llamada al servidor (no carga las vistas)
      if (response.status === 404 || response.status === 401) {
        myService.Alert("Acceso Denegado...");
      }
      else if (response.status === 400) {
        myService.Alert("Peticion incorrecta...");
      }
      else if (response.data && response.data.ExceptionMessage) {
        // error desde webapi
        myService.Alert(response.data.ExceptionMessage);
      }
      else {
        myService.Alert("Error en la aplicacion, reintente nuevamente.");
      }
      return $q.reject(response);
    }
  };
  return myHttpInterceptor;
})

  .config(function ($httpProvider) {
    //agrega el interceptor definido anteriormente
    $httpProvider.interceptors.push('myHttpInterceptor');
  });

myApp.run(function ($rootScope, $http, $location, myService) {
  // $rootScope desde donde heredan todos los $scope de los controladores
  // todas las variables o funciones que se definan aquí están disponibles en todos los controladores
  $rootScope.TituloAccionABMC = { A: '(Agregar)', B: '(Eliminar)', M: '(Modificar)', C: '(Consultar)', L: '(Listado)' };
  $rootScope.AccionABMC = 'L';   // inicialmente inicia el el listado (buscar con parametros)
  $rootScope.Mensajes = { SD: ' No se encontraron registros...', RD: ' Revisar los datos ingresados...' };
});

myApp.controller('modificar', function ($scope) {
    $scope.message = 'Modificar';
});

myApp.controller('nuevo', function ($scope) {
    $scope.message = 'Nuevo';
});


myApp.controller('expedientes',
  function ($scope, $http, myService) {
    $scope.Titulo = "Expedientes";
    $http.get('/api/Expedientes')
      .then(function (response) {
        $scope.expedients = response.data;
      });
  }
        
);





