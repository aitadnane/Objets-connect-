angular.module("PGOC",[])
.controller("pgocCtrl",[ '$scope', '$http', function ($scope, $http)
 {
	// $scope.menu=[{nom:"Vue D'ensemble",class:"",tab:"1"},{nom:"Gestion des Tables",class:"",tab:"2"},{nom:"Gestion Des Boisons",class:"",tab:"3"},{nom:"Gestion Des Lieux",class:""},{nom:"Gestion Des Utilisateurs",class:""}];
	$scope.itemcourant=null;
	$scope.tab=null;
	$scope.selectItem=function (item) {
		$scope.itemcourant=item;
	}

	//tri
	$scope.champtri=null;
	$scope.tridescendant=false;
	$scope.triepar=function (param) {
		if ($scope.champtri==param) {
			$scope.tridescendant = !$scope.tridescendant;
		} else {
			$scope.champtri=param;
			$scope.tridescendant=false;
		}
		
	}

	///tri

	//--------Recherche------------
	$scope.recherche = null;
	$scope.initrech=function(){
		$scope.recherche = null;
	}


	//--------Recherche------------

	$scope.tableselect=null;
	$scope.selecttable=function (table) {
		$scope.tableselect=table;
	}


	$scope.tables= [];
	$http.get('/Tables').success(function(data){
		$scope.tables = data;
	});
	


	$scope.lieux= [];
	$http.get('/Lieux').success(function(data){
		$scope.lieux = data;
	});


	$scope.Boissons= [];
	$http.get('/Boissons').success(function(data){
		$scope.Boissons = data;
	});

	$scope.Utilisateurs= [];
	$http.get('/Utilisateurs').success(function(data){
		$scope.Utilisateurs = data;
	});



	$scope.Futs= [];
	$http.get('/Futs').success(function(data){
		$scope.Futs = data;
	});

}]);